const SummaryCards = ({
  totalExpense = 0,
  totalIncome = 0,
  balance = 0,
  selectedDate,
  setSelectedDate,
  incomes,
  expenses,
}) => {
  return (
    <div className="bg-white rounded-2xl shadow-md border border-gray-100 p-8 max-h-95 max-w-3xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-xl font-bold text-gray-900">Financial Summary</h2>

        {/* Date Picker */}
        <div className="flex items-center space-x-2">
          <label className="text-sm font-medium text-gray-700">Month:</label>
          <input
            type="month"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
      </div>

      {/* Summary Cards Grid */}

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Income Card */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-xl p-5 text-center">
          <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1"
              />
            </svg>
          </div>
          <h3 className="text-sm font-medium text-green-800 mb-1">
            Total Income
          </h3>
          <p className="text-2xl font-bold text-green-900">
            ${totalIncome.toFixed(2)}
          </p>
        </div>

        {/* Expense Card */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-xl p-5 text-center">
          <div className="w-12 h-12 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3">
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-5 5v-5zM4.5 6.5L12 2l7.5 4.5M12 22V2"
              />
            </svg>
          </div>
          <h3 className="text-sm font-medium text-red-800 mb-1">
            Total Expense
          </h3>
          <p className="text-2xl font-bold text-red-900">
            ${totalExpense.toFixed(2)}
          </p>
        </div>

        {/* Balance Card */}
        <div
          className={`bg-gradient-to-br from-blue-50 to-blue-100 border ${
            balance >= 0 ? "border-blue-200" : "border-orange-200"
          } rounded-xl p-5 text-center`}
        >
          <div
            className={`w-12 h-12 ${
              balance >= 0 ? "bg-blue-500" : "bg-orange-500"
            } rounded-full flex items-center justify-center mx-auto mb-3`}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
              />
            </svg>
          </div>
          <h3 className="text-sm font-medium text-blue-800 mb-1">Balance</h3>
          <p
            className={`text-2xl font-bold ${
              balance >= 0 ? "text-blue-900" : "text-orange-900"
            }`}
          >
            ${balance.toFixed(2)}
          </p>
          <p
            className={`text-xs mt-1 ${
              balance >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            {balance >= 0 ? "Positive" : "Negative"} Balance
          </p>
        </div>
      </div>

      {/* Additional Stats */}

      <div className="mt-4 pt-8 border-t border-gray-200">
        <div className="grid grid-cols-2 gap-4 text-sm">
          <div className="text-center">
            <p className="text-gray-600">Total Transactions</p>
            <p className="font-semibold text-gray-900">
              {incomes.length + expenses.length}
            </p>
          </div>
          <div className="text-center">
            <p className="text-gray-600">Savings Rate</p>
            <p className="font-semibold text-gray-900">
              {totalIncome > 0 ? ((balance / totalIncome) * 100).toFixed(1) : 0}
              %
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCards;
