import { Doughnut } from "react-chartjs-2";

export default function Chart({ categories, date, chartData, chartOptions }) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-800">
          Expense Distribution
        </h2>
      </div>

      {categories.length === 0 ? (
        <div className="text-center py-12">
          <div className="text-gray-500 text-lg mb-2">No Data Available</div>
          <div className="text-gray-400">No expenses found for {date}</div>
        </div>
      ) : (
        <>
          <div className="relative h-64">
            <Doughnut data={chartData} options={chartOptions} />
          </div>

          {/* Additional Statistics */}
          <div className="mt-6 pt-6 border-t border-gray-100">
            <div className="grid grid-cols-2 gap-4 text-sm">
              <div className="text-center">
                <div className="text-gray-600">Total Categories</div>
                <div className="font-semibold text-lg text-blue-600">
                  {categories.length}
                </div>
              </div>
              <div className="text-center">
                <div className="text-gray-600">Total Amount</div>
                <div className="font-semibold text-lg text-green-600">
                  $
                  {categories
                    .reduce((sum, cat) => sum + cat.amount, 0)
                    .toLocaleString()}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
