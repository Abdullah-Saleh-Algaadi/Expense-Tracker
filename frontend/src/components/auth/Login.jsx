// src/components/auth/Login.jsx
import { useState, useContext, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import useLogin from "./hooks/useLogin";
import validateLogin from "./hooks/validateLogin";
import LoginForm from "./LoginForm";

export default function Login() {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const { loginUser, isLoading } = useLogin(login, navigate); // ✅ Pass login and navigate into hook
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});



  // 🔹 Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // clear error for that field
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  // 🔹 Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors = validateLogin(formData);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // ✅ Call mutation hook if validation passes
    loginUser(formData);
  };

  return (
    <LoginForm
      onSubmit={handleSubmit}
      onChange={handleChange}
      formData={formData}
      errors={errors}
      isLoading={isLoading}
    />
  );
}
