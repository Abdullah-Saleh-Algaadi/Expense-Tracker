import { useEffect, useState } from "react";
import api from "../../services/api";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import Loading from "../common/Loading";
import Error from "../common/Error";
import Chart from "./Chart";

ChartJS.register(ArcElement, Tooltip, Legend);

export default function ExpenseChart({ date }) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      if (!date) return;
      try {
        setLoading(true);
        const response = await api.get(`/categories-stats?month=${date}`);
        const data = response.data;

        if (data.success && data.categories) {
          // تجميع الفئات المتشابهة معًا
          const aggregatedCategories = aggregateCategories(data.categories);
          setCategories(aggregatedCategories);
        }
      } catch (err) {
        setError(err.response?.data?.message || `Failed to fetch categories`);
        console.error(err);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [date]);

  const aggregateCategories = (categoriesArray) => {
    const categoryMap = {};

    categoriesArray.forEach((item) => {
      const amount = parseFloat(item.amount) || 0; // تحويل لنمبر
      if (categoryMap[item.category]) {
        categoryMap[item.category] += amount;
      } else {
        categoryMap[item.category] = amount;
      }
    });

    return Object.entries(categoryMap).map(([category, amount]) => ({
      category,
      amount,
    }));
  };

  // Prepare chart data
  const chartData = {
    labels: categories.map((cat) => cat.category),
    datasets: [
      {
        data: categories.map((cat) => cat.amount),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#4BC0C0",
          "#9966FF",
          "#FF9F40",
          "#7CFC00",
          "#FFD700",
          "#00BFFF",
          "#FF69B4",
          "#9370DB",
          "#20B2AA",
        ],
        borderColor: "#ffffff",
        borderWidth: 2,
        hoverOffset: 15,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: "right",
        labels: {
          font: {
            size: 14,
            family: "'Inter', 'sans-serif'",
          },
          padding: 20,
          usePointStyle: true,
          pointStyle: "circle",
        },
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = context.raw;
            const total = context.dataset.data.reduce((a, b) => a + b, 0);
            const percentage = ((value / total) * 100).toFixed(1);
            return `${context.label}: $${value} (${percentage}%)`;
          },
        },
      },
    },
    cutout: "60%",
  };

  if (loading) {
    return <Loading />;
  }

  if (error) {
    return <Error error={error} />;
  }

  if (categories.length === 0) {
    return (
      <div className="bg-white rounded-2xl p-6 shadow-lg">
        <div className="text-center text-gray-500">
          <div className="text-lg font-semibold mb-2">No Data Available</div>
          <div>No expenses found for this period</div>
        </div>
      </div>
    );
  }

  return (
    <Chart
      categories={categories}
      date={date}
      chartData={chartData}
      chartOptions={chartOptions}
    />
  );
}
