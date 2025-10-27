import { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import Header from "../components/common/Header";
import Sidebar from "../components/common/Sidebar";
import FinancialSnapshot from "../components/Financial/FinancialSnapshot";
import ExpenseChart from "../components/dashboard/ExpenseChart";
import RecentTransactions from "../components/transaction/RecentTransactions";
import Footer from "../components/common/Footer";

export default function Dashboard() {
  const { user, token } = useContext(AuthContext);
  const [selectedDate, setSelectedDate] = useState(
    new Date().toISOString().slice(0, 7)
  );

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6 ml-64">
          <div className="bg-white rounded-lg p-6 shadow mb-6">
            <div className="flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-800">
                  Dashboard Overview
                </h1>
                <p className="text-gray-600">
                  Welcome to your expense tracker dashboard, {user?.name}
                </p>
              </div>

              <div className="flex items-center space-x-2">
                <label
                  htmlFor="dashboard-date"
                  className="text-sm font-medium text-gray-700"
                >
                  Select Month:
                </label>
                <input
                  id="dashboard-date"
                  type="month"
                  value={selectedDate}
                  onChange={(e) => setSelectedDate(e.target.value)}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors duration-200"
                />
              </div>
            </div>
          </div>

          <div className="mb-8">
            <FinancialSnapshot date={selectedDate} />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ExpenseChart date={selectedDate} />

          </div>
          <RecentTransactions date={selectedDate} />
        </main>
      </div>
      
      <div className="flex-1 ml-64">
        <Footer />
      </div>
    </div>
  );
}
