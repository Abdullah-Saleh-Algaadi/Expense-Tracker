export default function FinancialCard({
  totalIncome,
  incomes,
  date,
  totalExpense,
  expenses,
  balance,
}) {
  return (
    <section className="space-y-6">
      {/* Date Picker Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-800">
          Financial Overview
        </h2>
      </div>

      {/* Financial Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Total Income Card */}
        <div className="bg-gradient-to-br from-green-50 to-green-100 border border-green-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-green-800">
              Total Income
            </h2>
            <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">↑</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-green-900">
            ${totalIncome.toLocaleString()}
          </p>
          <p className="text-sm text-green-600 mt-2">
            {incomes.length} transactions
          </p>
          <p className="text-xs text-green-500 mt-1">{date}</p>
        </div>

        {/* Total Expenses Card */}
        <div className="bg-gradient-to-br from-red-50 to-red-100 border border-red-200 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-red-800">
              Total Expenses
            </h2>
            <div className="w-10 h-10 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">↓</span>
            </div>
          </div>
          <p className="text-3xl font-bold text-red-900">
            ${totalExpense.toLocaleString()}
          </p>
          <p className="text-sm text-red-600 mt-2">
            {expenses.length} transactions
          </p>
          <p className="text-xs text-red-500 mt-1">{date}</p>
        </div>

        {/* Balance Card */}
        <div
          className={`bg-gradient-to-br rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 border ${
            balance >= 0
              ? "from-blue-50 to-blue-100 border-blue-200"
              : "from-orange-50 to-orange-100 border-orange-200"
          }`}
        >
          <div className="flex items-center justify-between mb-4">
            <h2
              className={`text-lg font-semibold ${
                balance >= 0 ? "text-blue-800" : "text-orange-800"
              }`}
            >
              Balance
            </h2>
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${
                balance >= 0 ? "bg-blue-500" : "bg-orange-500"
              }`}
            >
              <span className="text-white font-bold text-lg">
                {balance >= 0 ? "✓" : "!"}
              </span>
            </div>
          </div>
          <p
            className={`text-3xl font-bold ${
              balance >= 0 ? "text-blue-900" : "text-orange-900"
            }`}
          >
            ${balance.toLocaleString()}
          </p>
          <p
            className={`text-sm mt-2 ${
              balance >= 0 ? "text-blue-600" : "text-orange-600"
            }`}
          >
            {balance >= 0 ? "Positive balance" : "Negative balance"}
          </p>
          <p
            className={`text-xs mt-1 ${
              balance >= 0 ? "text-blue-500" : "text-orange-500"
            }`}
          >
            {date}
          </p>
        </div>
      </div>
    </section>
  );
}
