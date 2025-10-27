import { useState } from "react";
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import AddNewTransaction from "./AddNewTransaction";
import useAddTransaction from "./hooks/useAddTransaction";

export default function AddTransaction() {
  const [formData, setFormData] = useState({
    amount: "",
    description: "",
    category: "",
    type: "expense",
    date: new Date().toISOString().split("T")[0],
  });

  const { addTransaction, isLoading } = useAddTransaction();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addTransaction(formData); // 🔥 فقط استدعاء بسيط
      setFormData({
        amount: "",
        description: "",
        category: "",
        type: "expense",
        date: new Date().toISOString().split("T")[0],
      });
    } catch (error) {
      console.error("Error adding transaction:", error);
    }
  };

  const incomeCategories = [
    { value: "salary", label: "Salary" },
    { value: "freelance", label: "Freelance" },
    { value: "investment", label: "Investment" },
    { value: "bonus", label: "Bonus" },
    { value: "gift", label: "Gift" },
    { value: "other", label: "Other Income" },
  ];

  const expenseCategories = [
    { value: "food", label: "Food & Drinks" },
    { value: "transport", label: "Transportation" },
    { value: "entertainment", label: "Entertainment" },
    { value: "shopping", label: "Shopping" },
    { value: "bills", label: "Bills & Utilities" },
    { value: "health", label: "Healthcare" },
    { value: "education", label: "Education" },
    { value: "other", label: "Other Expense" },
  ];

  return (
    <>
      <Header />
      <Sidebar />

      <div>
        <AddNewTransaction
          formData={formData}
          setFormData={setFormData}
          incomeCategories={incomeCategories}
          expenseCategories={expenseCategories}
          isSubmitting={isLoading}
          handleSubmit={handleSubmit}
        />
      </div>
    </>
  );
}
