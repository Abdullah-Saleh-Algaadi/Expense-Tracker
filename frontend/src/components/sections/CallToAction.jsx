import { Link, useNavigate } from "react-router-dom";

export default function CallToAction() {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/register`);
  };

  return (
    <section className="relative py-20 bg-gradient-to-r from-blue-600 to-purple-700 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-white rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-white rounded-full blur-3xl"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Main Heading */}
          <div>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Take Control of Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-300 to-orange-300">
                Finances?
              </span>
            </h3>
            <p className="text-xl text-blue-100 opacity-90 max-w-2xl mx-auto">
              Join thousands of users who are already saving money and achieving
              their financial goals with our intuitive expense tracker.
            </p>
          </div>

          {/* Buttons Container */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleClick}
              className="bg-white text-blue-600 px-8 py-4 rounded-xl hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-3xl font-semibold text-lg flex items-center space-x-2 group"
            >
              <span>Start Your Free Trial</span>
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 7l5 5m0 0l-5 5m5-5H6"
                />
              </svg>
            </button>

            <Link
              to={`/login`}
              className="border-2 border-white text-white px-8 py-4 rounded-xl hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105 font-semibold text-lg"
            >
              Sign In to Your Account
            </Link>
          </div>

          {/* Additional Info */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8 text-blue-100 text-sm">
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-green-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-green-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="w-5 h-5 text-green-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>

          {/* Trust Badges */}
          <div className="pt-8 border-t border-blue-500 border-opacity-30">
            <p className="text-blue-200 text-sm mb-4">
              Trusted by thousands of users worldwide
            </p>
            <div className="flex justify-center items-center space-x-8 opacity-80">
              <div className="text-white font-bold text-lg">⭐ 4.9/5</div>
              <div className="text-white">•</div>
              <div className="text-white font-bold text-lg">10,000+ Users</div>
              <div className="text-white">•</div>
              <div className="text-white font-bold text-lg">99.9% Uptime</div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute bottom-4 left-4 w-8 h-8 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-4 right-4 w-6 h-6 bg-white rounded-full opacity-20 animate-pulse"></div>
    </section>
  );
}
