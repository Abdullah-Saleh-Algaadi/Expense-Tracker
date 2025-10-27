## 🧾 Expense Tracker

A modern web app to manage and track daily expenses efficiently.
Built with **React, Vite, and Tailwind CSS** for speed, simplicity, and a clean UI.

---

### 🚀 Features

- ✅ Add, update, and delete transactions
- 📊 View income, expenses, and total balance in a dashboard
- 🔍 Filter transactions by category or date
- 🌙 Responsive and modern user interface
- 💾 Data stored via API (or local storage fallback)
- 🧠 Custom React Hooks for reusable logic:

  - `useAddTransaction`
  - `useUpdateTransaction`
  - `useDeleteTransaction`
  - `useFetchTransactions`

---

### ⚙️ Installation & Setup

1️⃣ **Clone the repository**

```bash
git clone https://github.com/Abdullah-Saleh-Algaadi/Expense-Tracker.git
```

2️⃣ **Navigate into the project**

```bash
cd Expense-Tracker
```

3️⃣ **Install dependencies**

```bash
npm install
```

4️⃣ **Run the development server**

```bash
npm run dev
```

🔗 Then open your browser at:

```
http://localhost:5173/
```

---

### 🎨 Tech Stack

| Technology                     | Purpose                             |
| ------------------------------ | ----------------------------------- |
| **React.js**                   | Frontend library for UI             |
| **Vite**                       | Fast build tool and dev server      |
| **Tailwind CSS**               | Utility-first CSS framework         |
| **React Query / Custom Hooks** | Data fetching & mutation management |
| **Axios**                      | HTTP client for API requests        |

---

### 🧠 Validation Logic

The registration form uses a `validateRegister(values)` function:

- Ensures all fields are filled
- Validates email format
- Checks password confirmation
- Returns an `errors` object if validation fails

---

### 📂 Hooks Structure (Best Practice)

Each **feature** (e.g., `transactions`, `auth`) has its own folder under `/hooks`:

```
src/hooks/transactions/useDeleteTransaction.js
src/hooks/auth/useRegister.js
```

> ✨ This makes your code modular, scalable, and easy to maintain.

---

### 🖼️ UI Preview

_Add screenshots later if available:_

```
assets/screenshot1.png
assets/screenshot2.png
assets/screenshot3.png
assets/screenshot4.png
assets/screenshot5.png
assets/screenshot6.png
```

---

### 👨‍💻 Author

**Abdullah Saleh Al-Gaadi**
📧 [abdullahsalehali46@gmail.com]
🌐 GitHub: [Abdullah-Saleh-Algaadi](https://github.com/Abdullah-Saleh-Algaadi)

---

### 🪪 License

This project is licensed under the **MIT License** — free to use, modify, and distribute.

---

Would you like me to generate this as a ready-to-download `README.md` file (with markdown formatting preserved)?
