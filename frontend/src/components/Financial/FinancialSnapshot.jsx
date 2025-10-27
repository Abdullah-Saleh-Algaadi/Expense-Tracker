import { useEffect, useState } from "react";
import api from "../../services/api";
import FinancialCard from "./FinancialCard";
import Loading from "../common/Loading";
import Error from "../common/Error";


export default function FinancialSnapshot({ date }) {
  const [loading, setLoading] = useState(true);
  const [incomes, setIncomes] = useState([]);
  const [expenses, setExpenses] = useState([]);
  const [error, setError] = useState(null);

  // دالة موحدة لجلب البيانات - تم تحديثها لاستخدام date
  const fetchData = async (type, setData) => {
    try {
      const response = await api.get(`/transactions?type=${type}&date=${date}`);
      const data = response.data;
      if (data.success && data[type]) {
        setData(data[type]);
      }
    } catch (err) {
      setError(err.response?.data?.message || `Failed to fetch ${type}`);
      console.error(err);
    }
  };

  useEffect(() => {
    const fetchAllData = async () => {
      setLoading(true);
      setError(null);

      // جلب البيانات بشكل متوازي
      await Promise.all([
        fetchData("incomes", setIncomes),
        fetchData("expenses", setExpenses),
      ]);

      setLoading(false);
    };

    fetchAllData();
  }, [date]);

  const totalIncome = incomes.reduce(
    (total, income) => total + Number(income.amount),
    0
  );

  const totalExpense = expenses.reduce(
    (total, expense) => total + Number(expense.amount),
    0
  );

  const balance = totalIncome - totalExpense;

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  return (
    <>
      <FinancialCard
        totalIncome={totalIncome}
        incomes={incomes}
        date={date}
        totalExpense={totalExpense}
        expenses={expenses}
        balance={balance}
      />
    </>
  );
}
