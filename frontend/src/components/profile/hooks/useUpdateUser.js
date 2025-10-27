// src/components/profile/hooks/useUpdateUser.js
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "react-toastify";
import api from "../../../services/api";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export default function useUpdateUser() {
  const { setUser } = useContext(AuthContext);
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: async (updatedData) => {
      const response = await api.put("/update-user-info", updatedData);
      return response.data;
    },
    onSuccess: (data) => {
      if (data.success) {
        const updatedUser = data.user;
        setUser(updatedUser);
        localStorage.setItem("user", JSON.stringify(updatedUser));

        queryClient.invalidateQueries(["user"]);

        toast.success(data.message || "Profile updated successfully");
      } else {
        toast.error(data.message || "Failed to update info");
      }
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Something went wrong");
    },
  });

  return {
    updateUserInfo: mutation.mutateAsync, // async mutation
    isLoading: mutation.isPending,
  };
}
