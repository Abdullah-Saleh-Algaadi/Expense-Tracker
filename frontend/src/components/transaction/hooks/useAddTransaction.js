import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "../../../services/api"
import { toast } from "react-toastify";

export default function useAddTransaction() {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (formData) => {
      if (formData.type === "income") {
        const res = await api.post("/incomes", formData);
        return res.data;
      } else {
        const res = await api.post("/expenses", formData);
        return res.data;
      }
    },
    onSuccess: (data) => {
      if (data.success) {
        toast.success(data.message || "Transaction added successfully!");
        // إعادة تحديث البيانات في الواجهة (لو فيه قائمة عمليات مثلاً)
        queryClient.invalidateQueries(["transactions"]);
      } else {
        toast.error(data.message || "Failed to add transaction");
      }
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Error adding transaction");
    },
  });

  return {
    addTransaction: mutation.mutateAsync, // async call
    isLoading: mutation.isPending,
  };
}
