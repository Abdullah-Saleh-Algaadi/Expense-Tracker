# predict_sales_fixed.py
import pandas as pd
from xgboost import XGBRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import mean_absolute_error

# 1️⃣ اقرأ ملف CSV
df = pd.read_csv("Supermart Grocery Sales - Retail Analytics Dataset.csv")

# 2️⃣ تنظيف أسماء Sub Category
df['Sub Category'] = df['Sub Category'].str.strip()

# 3️⃣ تحويل العمود الزمني (MM/DD/YYYY)
df['Order Date'] = pd.to_datetime(df['Order Date'], errors='coerce', dayfirst=False)
df = df.dropna(subset=['Order Date'])

# 4️⃣ ميزات زمنية
df['day_of_week'] = df['Order Date'].dt.dayofweek
df['week_of_year'] = df['Order Date'].dt.isocalendar().week
df['month'] = df['Order Date'].dt.month

# 5️⃣ ترتيب البيانات
df = df.sort_values(['Sub Category','Order Date'])

# 6️⃣ إنشاء lag و rolling features مع ملء NaN بصفر
df['sales_lag_1'] = df.groupby('Sub Category')['Sales'].shift(1).fillna(0)
df['sales_rolling_7'] = df.groupby('Sub Category')['Sales'].shift(1).rolling(7).mean().fillna(0)

# 7️⃣ ملء NaN في أي Feature أخرى
df['Discount'] = df['Discount'].fillna(0)

# 8️⃣ Features و Target
features = ['day_of_week','week_of_year','month','sales_lag_1','sales_rolling_7','Discount']
target = 'Sales'

results = []
predictions_all = pd.DataFrame()

# 9️⃣ التنبؤ لكل Sub Category
for sub_cat in df['Sub Category'].unique():
    sub_df = df[df['Sub Category']==sub_cat].reset_index(drop=True)
    
    if len(sub_df) < 10:
        continue
    
    X = sub_df[features]
    y = sub_df[target]
    
    X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, shuffle=False)
    
    model = XGBRegressor(n_estimators=200, learning_rate=0.05)
    model.fit(X_train, y_train)
    
    y_pred = model.predict(X_test)
    mae = mean_absolute_error(y_test, y_pred)
    results.append({'Sub Category': sub_cat, 'MAE': mae})
    
    # استخدم آخر len(y_test) صفوف للتوافق
    sub_pred = sub_df.iloc[-len(y_test):].copy()
    sub_pred['Predicted_Sales'] = y_pred
    predictions_all = pd.concat([predictions_all, sub_pred], axis=0)

# 10️⃣ حفظ النتائج
results_df = pd.DataFrame(results)
results_df.to_csv("mae_per_subcategory.csv", index=False)
predictions_all.to_csv("predictions_per_subcategory.csv", index=False)

print("✅ Done! MAE and predictions saved. Total predictions:", len(predictions_all))
