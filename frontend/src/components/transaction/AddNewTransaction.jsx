export default function AddNewTransaction({
  formData,
  setFormData,
  incomeCategories,
  expenseCategories,
  isSubmitting,
  handleSubmit,
}) {
  return (
    <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
        Add New Transaction
      </h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* نوع المعاملة (دخل أو مصروف) */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Transaction Type
          </label>
          <div className="flex space-x-4">
            <button
              type="button"
              onClick={() => setFormData({ ...formData, type: "expense" })}
              className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all duration-300 font-semibold ${
                formData.type === "expense"
                  ? "border-red-500 bg-red-50 text-red-700"
                  : "border-gray-300 text-gray-600 hover:border-gray-400"
              }`}
            >
              Expense
            </button>
            <button
              type="button"
              onClick={() => setFormData({ ...formData, type: "income" })}
              className={`flex-1 py-3 px-4 rounded-xl border-2 transition-all duration-300 font-semibold ${
                formData.type === "income"
                  ? "border-green-500 bg-green-50 text-green-700"
                  : "border-gray-300 text-gray-600 hover:border-gray-400"
              }`}
            >
              Income
            </button>
          </div>
        </div>

        {/* المبلغ */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Amount
          </label>
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold">
              $
            </span>
            <input
              type="number"
              value={formData.amount}
              onChange={(e) =>
                setFormData({ ...formData, amount: e.target.value })
              }
              className="w-full pl-10 pr-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
              placeholder="0.00"
              required
            />
          </div>
        </div>

        {/* الوصف */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Description
          </label>
          <input
            type="text"
            value={formData.description}
            onChange={(e) =>
              setFormData({ ...formData, description: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
            placeholder="What was this for?"
            required
          />
        </div>

        {/* الفئة */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Category
          </label>
          <select
            value={formData.category}
            onChange={(e) =>
              setFormData({ ...formData, category: e.target.value })
            }
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
            required
          >
            <option value="">Select a category</option>
            {formData.type === "income"
              ? incomeCategories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))
              : expenseCategories.map((category) => (
                  <option key={category.value} value={category.value}>
                    {category.label}
                  </option>
                ))}
          </select>
        </div>

        {/* التاريخ */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Date
          </label>
          <input
            type="date"
            value={formData.date}
            onChange={(e) => setFormData({ ...formData, date: e.target.value })}
            className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 hover:border-gray-400"
          />
        </div>

        {/* زر الإضافة */}
        <button
          type="submit"
          disabled={isSubmitting}
          className={`w-full py-3 px-6 rounded-xl font-semibold text-white transition-all duration-300 transform hover:scale-105 ${
            formData.type === "income"
              ? "bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800"
              : "bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800"
          } disabled:opacity-50 disabled:cursor-not-allowed`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Adding...
            </span>
          ) : (
            `Add ${formData.type === "income" ? "Income" : "Expense"}`
          )}
        </button>
      </form>
    </div>
  );
}
