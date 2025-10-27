import { Link } from "react-router-dom";
import { useState } from "react";

import Modal from "../common/Modal";
import TransactionForm from "./TransactionForm";
import Loading from "../common/Loading";
import Error from "../common/Error";
import TransactionTable from "./TransactionTable";
import useDeleteTransaction from "../../hooks/transactions/useDeleteTransaction";
import useUpdateTransaction from "../../hooks/transactions/useUpdateTransaction";

export default function Transaction({
  transactions,
  isLoading,
  isError,
  path,
  pathName,
}) {
  const [activeModal, setActiveModal] = useState(null);
  const [selectedTransaction, setSelectedTransaction] = useState(null);

  const deleteMutation = useDeleteTransaction();
  const updateMutation = useUpdateTransaction();

  const handleDelete = () => {
    deleteMutation.mutate({
      id: selectedTransaction.id,
      type: selectedTransaction.type,
    });

    setActiveModal(null);
  };

  const handleUpdate = () => {
    const formattedDate = new Date(selectedTransaction.date)
      .toISOString()
      .split("T")[0];
    updateMutation.mutate({
      ...selectedTransaction,
      date: formattedDate,
    });
    setActiveModal(null);
  };

  if (isLoading) return <Loading />;
  if (isError) return <Error error={isError} />;

  return (
    <>
      <TransactionTable
        transactions={transactions}
        onEdit={(t) => {
          setSelectedTransaction(t);
          setActiveModal("edit");
        }}
        onDelete={(t) => {
          setSelectedTransaction(t);
          setActiveModal("delete");
        }}
      />

      {transactions.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gray-200">
          <div className="flex justify-between items-center text-sm text-gray-600">
            <span>Showing {transactions.length} recent transactions</span>
            <Link
              to={path}
              className="text-blue-600 hover:text-blue-800 font-medium transition-colors duration-200"
            >
              {pathName}
            </Link>
          </div>
        </div>
      )}

      {/* Delete Modal */}
      <Modal
        isOpen={activeModal === "delete"}
        onClose={() => setActiveModal(null)}
        title="Confirm Delete"
        footerButtons={[
          {
            text: "Cancel",
            onClick: () => setActiveModal(null),
            type: "secondary",
          },
          { text: "Yes, Delete", onClick: handleDelete, type: "danger" },
        ]}
      >
        <p className="text-gray-600">
          Are you sure you want to delete this transaction? This action cannot
          be undone.
        </p>
      </Modal>

      {/* Edit Modal */}
      <Modal
        isOpen={activeModal === "edit"}
        onClose={() => setActiveModal(null)}
        title="Edit Transaction"
        footerButtons={[
          {
            text: "Cancel",
            onClick: () => setActiveModal(null),
            type: "secondary",
          },
          {
            text: "Save Changes",
            onClick: handleUpdate,
            type: selectedTransaction?.type === "income" ? "primary" : "danger",
          },
        ]}
      >
        <TransactionForm
          formData={selectedTransaction}
          setFormData={setSelectedTransaction}
        />
      </Modal>
    </>
  );
}
