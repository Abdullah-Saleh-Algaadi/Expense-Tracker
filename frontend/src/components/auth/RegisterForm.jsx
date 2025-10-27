function RegisterForm({
  onSubmit,
  formData,
  onChange,
  errors,
  isSubmitting,
  isLoading,
}) {
  return (
    <>
      <div className="w-screen h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl border border-white/20 overflow-hidden">
            <div className="bg-gradient-to-r from-blue-700/90 to-purple-700/90 px-6 py-6">
              <h2 className="text-2xl font-bold text-white text-center">
                Create Your Account
              </h2>
              <p className="text-blue-100/90 text-center mt-2 text-sm">
                Join our community and start your journey today
              </p>
            </div>

            <form onSubmit={onSubmit} className="p-6 space-y-4">
              {/* ✅ First & Last Name */}
              <div className="grid grid-cols-2 gap-4">
                {["firstName", "lastName"].map((field) => (
                  <div key={field} className="space-y-2">
                    <label
                      htmlFor={field}
                      className="block text-sm font-semibold text-white"
                    >
                      {field === "firstName" ? "First Name" : "Last Name"}
                    </label>
                    <input
                      type="text"
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={onChange}
                      className={`w-full px-3 py-2 text-sm rounded-lg border transition-all duration-200 focus:ring-2 focus:outline-none bg-white/5 text-white placeholder-white/60 ${
                        errors[field]
                          ? "border-red-500 focus:ring-red-300/30"
                          : "border-white/20 focus:ring-blue-300/30 hover:border-white/40"
                      }`}
                      placeholder={
                        field === "firstName" ? "First name" : "Last name"
                      }
                    />
                    {errors[field] && (
                      <p className="text-red-300 text-xs mt-1">
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* ✅ Email */}
              <div className="space-y-2">
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-white"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={onChange}
                  className={`w-full px-3 py-2 text-sm rounded-lg border transition-all duration-200 focus:ring-2 focus:outline-none bg-white/5 text-white placeholder-white/60 ${
                    errors.email
                      ? "border-red-500 focus:ring-red-300/30"
                      : "border-white/20 focus:ring-blue-300/30 hover:border-white/40"
                  }`}
                  placeholder="your.email@example.com"
                />
                {errors.email && (
                  <p className="text-red-300 text-xs mt-1">{errors.email}</p>
                )}
              </div>

              {/* ✅ Password + Confirm */}
              <div className="grid grid-cols-2 gap-4">
                {["password", "confirmPassword"].map((field, i) => (
                  <div key={field} className="space-y-2">
                    <label
                      htmlFor={field}
                      className="block text-sm font-semibold text-white"
                    >
                      {i === 0 ? "Password" : "Confirm Password"}
                    </label>
                    <input
                      type="password"
                      id={field}
                      name={field}
                      value={formData[field]}
                      onChange={onChange}
                      className={`w-full px-3 py-2 text-sm rounded-lg border transition-all duration-200 focus:ring-2 focus:outline-none bg-white/5 text-white placeholder-white/60 ${
                        errors[field]
                          ? "border-red-500 focus:ring-red-300/30"
                          : "border-white/20 focus:ring-blue-300/30 hover:border-white/40"
                      }`}
                      placeholder="••••••••"
                    />
                    {errors[field] && (
                      <p className="text-red-300 text-xs mt-1">
                        {errors[field]}
                      </p>
                    )}
                  </div>
                ))}
              </div>

              {/* ✅ Terms */}
              <div className="flex items-start pt-2">
                <input
                  id="agreeToTerms"
                  name="agreeToTerms"
                  type="checkbox"
                  checked={formData.agreeToTerms}
                  onChange={onChange}
                  className={`h-4 w-4 rounded border text-blue-600 focus:ring-blue-500 transition-colors duration-200 ${
                    errors.agreeToTerms ? "border-red-500" : "border-white/40"
                  }`}
                />
                <label
                  htmlFor="agreeToTerms"
                  className="ml-3 text-xs text-white/90"
                >
                  I agree to the{" "}
                  <a
                    href="#"
                    className="text-blue-300 hover:text-blue-200 underline"
                  >
                    Terms
                  </a>{" "}
                  and{" "}
                  <a
                    href="#"
                    className="text-blue-300 hover:text-blue-200 underline"
                  >
                    Privacy Policy
                  </a>
                </label>
              </div>
              {errors.agreeToTerms && (
                <p className="text-red-300 text-xs mt-1">
                  {errors.agreeToTerms}
                </p>
              )}

              {/* ✅ Submit */}
              <button
                type="submit"
                disabled={isSubmitting || isLoading}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-2 px-4 rounded-lg hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all duration-200 disabled:opacity-70 text-sm"
              >
                {isSubmitting || isLoading ? "Creating..." : "Create Account"}
              </button>

              <div className="text-center text-sm text-white/80 pt-2">
                Already have an account?{" "}
                <a
                  href="login"
                  className="text-blue-300 hover:text-blue-200 font-medium hover:underline transition-colors"
                >
                  Sign in
                </a>
              </div>
            </form>
          </div>

          <div className="mt-4 text-center">
            <p className="text-white/60 text-xs">
              By registering, you agree to our Terms of Service and Privacy
              Policy.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegisterForm;
