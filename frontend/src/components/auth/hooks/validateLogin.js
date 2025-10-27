export default function validateLogin(formData) {
  const errors = {};
  if (!formData.email.trim()) errors.email = "Email is required";
  else if (!/\S+@\S+\.\S+/.test(formData.email)) errors.email = "Invalid email";
  if (!formData.password) errors.password = "Password is required";
  return errors;
}
