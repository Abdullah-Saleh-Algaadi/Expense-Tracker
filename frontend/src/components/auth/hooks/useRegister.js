// src/components/auth/hooks/useRegister.js

import { useMutation } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import api from "../../../services/api";
import { AuthContext } from "../../../context/AuthContext";

export default function useRegister() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const mutation = useMutation({
    mutationFn: async (userData) => {
      const res = await api.post("/register", userData);
      return res.data;
    },

    onSuccess: (data) => {
      if (data?.user && data?.token) {
        login(data.user, data.token);
        toast.success("Registration successful 🎉");
        navigate("/dashboard");
      } else {
        toast.warn("Registration completed, but user data missing");
      }
    },

    onError: (error) => {
      toast.error(error.response?.data?.message || "Registration failed ❌");
    },
  });

  return {
    registerUser: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
}
