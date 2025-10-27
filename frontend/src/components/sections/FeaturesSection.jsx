import { useNavigate } from "react-router-dom";
import Button from "../common/Button";

export default function FeaturesSection() {
  const navigate = useNavigate();

  const features = [
    {
      icon: "📊",
      name: "Expense Tracking",
      description:
        "Quickly and easily record your daily transactions on the go. Categorize your spending, add notes, and never lose track of where your money goes. Financial awareness starts with a single tap.",
    },
    {
      icon: "📈",
      name: "Visual Reports",
      description:
        "Transform your raw data into beautiful, easy-to-understand charts and graphs. See your spending patterns at a glance, identify your top categories, and make informed financial decisions based on clear visuals.",
    },
    {
      icon: "📱",
      name: "Multi-Device Sync",
      description:
        "Access your financial data seamlessly across all your devices. Whether you're on your phone, tablet, or computer, your expenses and budgets are always up-to-date and securely synchronized.",
    },
    {
      icon: "💰",
      name: "Budget Management",
      description:
        "Set monthly budgets for different spending categories and get real-time alerts to avoid overspending. Take control of your finances and confidently work towards your savings goals.",
    },
    {
      icon: "🛡️",
      name: "Data Security",
      description:
        "Rest easy knowing your financial information is protected with end-to-end encryption and secure cloud storage. Your privacy is our top priority.",
    },
  ];

  const handelClick = () => {
    navigate(`/login`);
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Powerful Features for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
              Smart Spending
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to take control of your finances and build
            better money habits.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={feature.name}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 hover:border-blue-100"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                <span className="text-3xl">{feature.icon}</span>
              </div>

              {/* Content */}
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {feature.name}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Decorative Element */}
              <div className="w-0 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mt-6 group-hover:w-full transition-all duration-500"></div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 shadow-inner">
            <h3 className="text-2xl font-semibold text-gray-900 mb-4">
              Ready to Transform Your Financial Life?
            </h3>
            <p className="text-gray-600 mb-6">
              Join thousands of users who are already taking control of their
              money.
            </p>

            <Button
              text="Start Free Today"
              onClick={handelClick}
              type="primary"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
