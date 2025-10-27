// src/components/auth/Register.jsx
import React, { useState } from "react";
import useRegister from "./hooks/useRegister";
import validateRegister from "./utils/validateRegister";
import RegisterForm from "./RegisterForm";

export default function Register() {
  const { registerUser, isLoading } = useRegister();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // ✅ handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // ✅ form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = validateRegister(formData);
    if (Object.keys(newErrors).length > 0) return setErrors(newErrors);

    try {
      setIsSubmitting(true);
      await registerUser(formData);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <RegisterForm
        formData={formData}
        errors={errors}
        isSubmitting={isSubmitting}
        isLoading={isLoading}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />
    </>
  );
}
