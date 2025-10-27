// src/components/transactions/AllTransactions.jsx
import Header from "../common/Header";
import Sidebar from "../common/Sidebar";
import Transaction from "./Transaction";
import useTransactions from "./hooks/useTransactions";

export default function AllTransactions() {
  const {
    data: transactions = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useTransactions();

  return (
    <>
      <Header />
      <Sidebar />

      <div className="flex-1 p-8 ml-64">
        <div className="max-w-7xl mx-auto">
          {/* العنوان */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              All Transactions
            </h1>
            <p className="text-gray-600">
              Manage and view all your financial transactions
            </p>
          </div>

          {/* زر تحديث (اختياري) */}
          <div className="mb-6">
            <button
              onClick={() => refetch()}
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-all"
            >
              Refresh Transactions
            </button>
          </div>

          {/* عرض النتائج */}
          <Transaction
            transactions={transactions}
            isLoading={isLoading}
            isError={isError ? error.message : null}
            pathName={`View Dashboard →`}
            path={"/dashboard"}
          />
        </div>
      </div>
    </>
  );
}
