# api.py
from fastapi import FastAPI
import pandas as pd
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# السماح للـ React بالوصول (CORS)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # عنوان React Dev Server
    allow_methods=["*"],
    allow_headers=["*"],
)

# تحميل بيانات التنبؤ
df = pd.read_csv("predictions_per_subcategory.csv")

@app.get("/predictions")
def get_predictions(sub_category: str = None):
    data = df.copy()
    
    # نظف الأعمدة من المسافات
    data['Sub Category'] = data['Sub Category'].str.strip()
    
    if sub_category:
        # اجعل البحث غير حساس للحروف
        data = data[data['Sub Category'].str.lower() == sub_category.lower()]
    
    # حول التاريخ لسلسلة YYYY-MM-DD
    data['Order Date'] = pd.to_datetime(data['Order Date'], errors='coerce').dt.strftime('%Y-%m-%d')

    return data.to_dict(orient='records')
