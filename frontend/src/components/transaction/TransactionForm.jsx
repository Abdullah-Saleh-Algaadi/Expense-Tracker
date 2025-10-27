export default function TransactionForm({ formData, setFormData }) {
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
    <form className="space-y-4">
      {/* Type */}
      <div className="flex justify-center mb-4">
        <div
          className={`text-lg font-semibold px-4 py-2 rounded-lg ${
            formData.type === "income"
              ? "bg-green-100 text-green-700"
              : "bg-red-100 text-red-700"
          }`}
        >
          {formData.type === "income" ? "Income" : "Expense"}
        </div>
      </div>

      {/* Amount */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Amount
        </label>
        <input
          type="number"
          value={formData.amount}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, amount: e.target.value }))
          }
          placeholder="0.00"
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Description */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Description
        </label>
        <input
          type="text"
          value={formData.description}
          onChange={(e) =>
            setFormData((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
          placeholder="What was this for?"
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>

      {/* Category */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Category
        </label>
        <select
          value={formData.category}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, category: e.target.value }))
          }
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        >
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

      {/* Date */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Date
        </label>
        <input
          type="date"
          value={formData.date ? formData.date.split("T")[0] : ""}
          onChange={(e) =>
            setFormData((prev) => ({ ...prev, date: e.target.value }))
          }
          className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-blue-500 focus:outline-none"
        />
      </div>
    </form>
  );
}
