import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "../../services/api";

export default function useUpdateTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (updatedTransaction) => {
      const response = await api.put(`/transactions`, updatedTransaction);
      if (!response.data.success) {
        throw new Error("Failed to update transaction");
      }
      return updatedTransaction;
    },
    onSuccess: (updatedTransaction) => {
      queryClient.setQueryData(["transactions"], (oldData) =>
        oldData
          ? oldData.map((t) =>
              t.id === updatedTransaction.id
                ? { ...t, ...updatedTransaction }
                : t
            )
          : []
      );
      toast.success("Transaction updated successfully ✅");
    },
    onError: () => {
      toast.error("Failed to update transaction");
    },
  });
}
