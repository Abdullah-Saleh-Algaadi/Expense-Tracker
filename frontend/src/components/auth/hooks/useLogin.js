import { useMutation } from "@tanstack/react-query";
import api from "../../../services/api";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useContext } from "react";
import { AuthContext } from "../../../context/AuthContext";

export default function useLogin() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const mutation = useMutation({
    mutationFn: (formData) => api.post("/login", formData),
    onSuccess: (res) => {
      const data = res.data;
      if (data.success && data.user && data.token) {
        login(data.user, data.token);
        navigate("/dashboard");
        toast.success(`Welcome back ${data?.user?.username} !`);
      } else {
        toast.error("Invalid credentials");
      }
    },
    onError: (error) => {
      toast.error(error.response?.data?.message || "Login failed");
    },
  });

  return {
    loginUser: mutation.mutateAsync,
    isLoading: mutation.isPending,
  };
}
