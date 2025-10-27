import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "../../services/api";

export default function useDeleteTransaction() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ id, type }) => {
      const response = await api.delete(`/delete-transaction`, {
        data: { id, type },
      });
      if (!response.data.success) {
        throw new Error(
          response.data.message || "Failed to delete transaction"
        );
      }
      return id;
    },
    onSuccess: (id) => {
      // تحديث الكاش
      queryClient.setQueryData(["transactions"], (oldData) =>
        oldData ? oldData.filter((t) => t.id !== id) : []
      );
      toast.success("Transaction deleted successfully ✅");
    },
    onError: (error) => {
      toast.error(error.message || "Something went wrong.");
    },
  });
}
