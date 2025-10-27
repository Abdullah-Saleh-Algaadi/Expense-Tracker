// components/About.js
import { Link } from "react-router-dom";
import {
  BarChart3,
  Shield,
  Zap,
  Users,
  Smartphone,
  TrendingUp,
  DollarSign,
  PieChart,
  Target,
  Bell,
} from "lucide-react";

import Header from './Header'
import Footer from "./Footer";

export default function About() {
  const features = [
    {
      icon: <DollarSign className="w-8 h-8" />,
      title: "Income & Expense Tracking",
      description:
        "Easily record and categorize your income and expenses to understand your cash flow.",
    },
    {
      icon: <PieChart className="w-8 h-8" />,
      title: "Visual Analytics",
      description:
        "Beautiful charts and graphs to visualize your spending patterns and financial health.",
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Budget Goals",
      description:
        "Set monthly budgets and track your progress towards financial goals.",
    },
    {
      icon: <Bell className="w-8 h-8" />,
      title: "Smart Alerts",
      description:
        "Get notified when you're approaching budget limits or have unusual spending.",
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: "Secure & Private",
      description:
        "Your financial data is encrypted and never shared with third parties.",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Responsive Design",
      description:
        "Access your finances anywhere, on any device with our mobile-friendly interface.",
    },
  ];

  const stats = [
    { number: "10K+", label: "Active Users" },
    { number: "1M+", label: "Transactions Tracked" },
    { number: "95%", label: "User Satisfaction" },
    { number: "24/7", label: "Availability" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
     <Header />

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Take Control of Your
            <span className="text-blue-600"> Financial Future</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            ExpenseTracker is your all-in-one solution for managing personal
            finances. Track expenses, set budgets, and achieve your financial
            goals with ease.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/dashboard"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Get Started
            </Link>
            <Link
              to="/features"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg font-semibold hover:border-blue-600 transition-colors"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div key={index} className="p-6">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose ExpenseTracker?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Powerful features designed to simplify your financial management and
            help you make better money decisions.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
            >
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center text-blue-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Mission Section */}
      <div className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-xl text-gray-300 max-w-4xl mx-auto">
              We believe that financial freedom should be accessible to
              everyone. ExpenseTracker was born from the vision to democratize
              personal finance management, making it intuitive, accessible, and
              empowering for people from all walks of life.
            </p>
          </div>
        </div>
      </div>

      {/* Team/Technology Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Built with Modern Technology
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              ExpenseTracker leverages cutting-edge web technologies to deliver
              a fast, secure, and reliable experience.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Zap className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">
                  React.js with modern hooks
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <BarChart3 className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">
                  Real-time data visualization
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <Shield className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">Bank-level security</span>
              </div>
              <div className="flex items-center space-x-3">
                <Smartphone className="w-5 h-5 text-green-500" />
                <span className="text-gray-700">
                  Mobile-first responsive design
                </span>
              </div>
            </div>
          </div>
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start?</h3>
            <p className="mb-6 opacity-90">
              Join thousands of users who have already taken control of their
              finances.
            </p>
            <Link
              to="/dashboard"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors inline-block"
            >
              Start Tracking Now
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
      {/* <footer className="bg-gray-800 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <DollarSign className="w-6 h-6 text-blue-400" />
                <span className="text-xl font-bold">ExpenseTracker</span>
              </div>
              <p className="text-gray-400">
                Your partner in financial success and freedom.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Product</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/features"
                    className="hover:text-white transition-colors"
                  >
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    to="/pricing"
                    className="hover:text-white transition-colors"
                  >
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link
                    to="/dashboard"
                    className="hover:text-white transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/about"
                    className="hover:text-white transition-colors"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <Link
                    to="/blog"
                    className="hover:text-white transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className="hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link
                    to="/help"
                    className="hover:text-white transition-colors"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    to="/privacy"
                    className="hover:text-white transition-colors"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    to="/terms"
                    className="hover:text-white transition-colors"
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 ExpenseTracker. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
