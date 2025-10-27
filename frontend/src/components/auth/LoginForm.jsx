import React from "react";

function LoginForm({
  onSubmit,
  onChange,
  formData,
  errors,
  isLoading,
}) {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="bg-white/10 backdrop-blur-md rounded-2xl shadow-2xl overflow-hidden border border-white/20">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-700/90 to-purple-700/90 px-8 py-6">
            <h2 className="text-3xl font-bold text-white text-center">
              Welcome Back
            </h2>
            <p className="text-blue-100/90 text-center mt-2">
              Sign in to continue your journey
            </p>
          </div>

          {/* Form */}
          <form onSubmit={onSubmit} className="p-8 space-y-6">
            {/* Email */}
            <div className="space-y-2">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-white"
              >
                Email Address
              </label>
              <input
                type="text"
                id="email"
                name="email"
                value={formData.email}
                onChange={onChange}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:ring-4 focus:outline-none bg-white/5 text-white placeholder-white/60 ${
                  errors.email
                    ? "border-red-500 focus:ring-red-300/30"
                    : "border-white/20 focus:ring-blue-300/30 hover:border-white/40"
                }`}
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-300 text-xs mt-1">{errors.email}</p>
              )}
            </div>

            {/* Password */}
            <div className="space-y-2">
              <label
                htmlFor="password"
                className="block text-sm font-semibold text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={onChange}
                className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-200 focus:ring-4 focus:outline-none bg-white/5 text-white placeholder-white/60 ${
                  errors.password
                    ? "border-red-500 focus:ring-red-300/30"
                    : "border-white/20 focus:ring-blue-300/30 hover:border-white/40"
                }`}
                placeholder="••••••••"
              />
              {errors.password && (
                <p className="text-red-300 text-xs mt-1">{errors.password}</p>
              )}
            </div>

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-4 rounded-xl hover:from-blue-700 hover:to-purple-700 focus:outline-none focus:ring-4 focus:ring-purple-500/50 focus:ring-offset-2 transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed transform hover:scale-[1.02] active:scale-[0.98]"
            >
              {isLoading ? (
                <span className="flex items-center justify-center">
                  <svg
                    className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Signing in...
                </span>
              ) : (
                "Sign In"
              )}
            </button>

            <div className="text-center text-sm text-white/80">
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-blue-300 hover:text-blue-200 font-medium hover:underline transition-colors"
              >
                Create one
              </a>
            </div>
          </form>
        </div>

        <div className="mt-6 text-center">
          <p className="text-white/60 text-sm">
            By signing in, you agree to our Terms of Service and Privacy Policy.
          </p>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;

