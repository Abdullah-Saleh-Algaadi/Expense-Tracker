// src/utils/validateRegister.js

export default function validateRegister(formData) {
  const errors = {};

  // ✅ First Name
  if (!formData.firstName.trim()) {
    errors.firstName = "First name is required";
  }

  // ✅ Last Name
  if (!formData.lastName.trim()) {
    errors.lastName = "Last name is required";
  }

  // ✅ Email
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Email is invalid";
  }

  // ✅ Password
  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(formData.password)) {
    errors.password =
      "Password must contain uppercase, lowercase, and a number";
  }

  // ✅ Confirm Password
  if (formData.password !== formData.confirmPassword) {
    errors.confirmPassword = "Passwords do not match";
  }

  // ✅ Terms and Conditions
  if (!formData.agreeToTerms) {
    errors.agreeToTerms = "You must agree to the terms and conditions";
  }

  return errors;
}
