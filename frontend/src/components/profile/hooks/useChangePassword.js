// src/components/profile/hooks/useChangePassword.js
import { useMutation } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "../../../services/api";

export default function useChangePassword() {
  const mutation = useMutation({
    mutationFn: async (passwordForm) => {
      const response = await api.put("change-user-password", passwordForm);
      return response.data;
    },
    onSuccess: (data) => {
      toast.success(data.message || "Password changed successfully");
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Failed to update password");
    },
  });
  

  return {
    changePassword: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
}
