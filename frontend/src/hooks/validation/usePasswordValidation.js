// hooks/usePasswordValidation.js
import { useState } from "react";

export default function usePasswordValidation() {
  const [validateErrors, setErrors] = useState({});

  const validatePasswords = (form) => {
    const newErrors = {};
    if (!form.currentPassword.trim())
      newErrors.currentPassword = "Enter your current password.";
    if (!form.newPassword.trim())
      newErrors.newPassword = "Enter a new password.";
    else if (form.newPassword.length < 6)
      newErrors.newPassword = "Password must be at least 6 characters.";
    if (form.confirmNewPassword !== form.newPassword)
      newErrors.confirmNewPassword = "Passwords do not match.";

    setErrors(newErrors);
    return { isValid: Object.keys(newErrors).length === 0, errors: newErrors };
  };

  return { validatePasswords, validateErrors };
}
