import { useNavigate } from "react-router-dom";
import Button from "../common/Button"; 


export default function HeroSection() {
  const navigate = useNavigate();

  const handelClick = (path) => {
    navigate(path);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 flex items-center justify-center px-4 py-16">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Content Section */}
        <div className="space-y-8 text-center md:text-left">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
              Track Your Expenses{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                Smartly
              </span>
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
              Manage your finances with our intuitive expense tracker that helps
              you save money, set budgets, and achieve your financial goals
              effortlessly.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <Button
              text="Get Started Free"
              onClick={() => handelClick("/register")}
              type="primary"
            />

            <Button
              text="Learn More"
              onClick={() => handelClick("/about")}
              type="secondary"
            />
          </div>  

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 pt-8">
            <div className="text-center">
              <div className="text-2xl font-bold text-blue-600">10K+</div>
              <div className="text-gray-600">Happy Users</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-purple-600">$5M+</div>
              <div className="text-gray-600">Tracked</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-green-600">99%</div>
              <div className="text-gray-600">Satisfaction</div>
            </div>
          </div>
        </div>

        {/* Graphics Section */}
        <div className="relative">
          {/* Main Illustration */}
          <div className="relative z-10">
            <div className="bg-white rounded-3xl p-8 shadow-2xl border border-gray-100">
              <div className="space-y-6">
                {/* Chart Graphic */}
                <div className="bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl p-6">
                  <div className="flex items-end justify-center space-x-2 h-32">
                    <div className="w-8 bg-blue-400 rounded-t-lg h-16 animate-pulse"></div>
                    <div className="w-8 bg-purple-400 rounded-t-lg h-24 animate-pulse delay-100"></div>
                    <div className="w-8 bg-blue-500 rounded-t-lg h-20 animate-pulse delay-200"></div>
                    <div className="w-8 bg-purple-500 rounded-t-lg h-28 animate-pulse delay-300"></div>
                    <div className="w-8 bg-blue-600 rounded-t-lg h-18 animate-pulse delay-400"></div>
                  </div>
                </div>

                {/* Expense Cards */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center p-4 bg-blue-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">🍔</span>
                      </div>
                      <div>
                        <div className="font-semibold">Food & Dining</div>
                        <div className="text-sm text-gray-500">
                          Lunch at Restaurant
                        </div>
                      </div>
                    </div>
                    <div className="text-red-500 font-bold">-$45.00</div>
                  </div>

                  <div className="flex justify-between items-center p-4 bg-purple-50 rounded-xl">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                        <span className="text-white font-bold">🚗</span>
                      </div>
                      <div>
                        <div className="font-semibold">Transportation</div>
                        <div className="text-sm text-gray-500">Gasoline</div>
                      </div>
                    </div>
                    <div className="text-red-500 font-bold">-$30.00</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-blue-200 rounded-full opacity-50 animate-float"></div>
          <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-purple-200 rounded-full opacity-50 animate-float delay-1000"></div>
          <div className="absolute top-1/2 -right-8 w-16 h-16 bg-green-200 rounded-full opacity-40 animate-float delay-2000"></div>
        </div>
      </div>

      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-30"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-100 rounded-full blur-3xl opacity-30"></div>
      </div>
    </section>
  );
}
