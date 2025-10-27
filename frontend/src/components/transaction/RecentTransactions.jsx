import Transaction from "./Transaction";
import useRecentTransactions from "./hooks/useRecentTransactions";

export default function RecentTransactions({ date }) {
  const {
    data: transactions = [],
    isLoading,
    isError,
    error,
  } = useRecentTransactions({ limit: 7, date });

  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
      <h2 className="text-xl font-semibold text-gray-800 mb-6">
        Recent Transactions
      </h2>

      <Transaction
        transactions={transactions}
        isLoading={isLoading}
        isError={isError ? error.message : null}
        pathName={`View All Transactions →`}
        path={"/all_transactions"}
      />
    </div>
  );
}
