// pages/PrivacyPolicy.jsx  or  app/privacy-policy/page.jsx

import Footer from "./Footer";
import Header from "./Header";

export default function PrivacyPolicy() {
  return (
    <>
    <Header/>
    <section className="max-w-3xl mx-auto py-16 px-6">
      <h1 className="text-4xl font-bold mb-6 text-blue-700 text-center">
        Privacy Policy
      </h1>

      <p className="text-gray-700 text-lg mb-6 text-center">
        Your privacy is important to us. This policy explains how Expense
        Tracker handles your information.
      </p>

      <div className="space-y-6 text-gray-700">
        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            🔐 Data Collection
          </h2>
          <p>
            We only collect essential data such as your name, email, and
            transaction details.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            🧠 Data Usage
          </h2>
          <p>
            Data is used solely to provide insights, reports, and personalized
            experiences within the app.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-semibold text-blue-600 mb-2">
            🚫 Data Sharing
          </h2>
          <p>
            We never sell or share your data with third parties. Your
            information stays private and secure.
          </p>
        </div>

        <p className="text-gray-600 mt-6">
          If you have any concerns, contact us at{" "}
          <a
            href="mailto:privacy@expensetracker.com"
            className="text-blue-600 underline"
          >
            privacy@expensetracker.com
          </a>
        </p>
      </div>
    </section>
    <Footer/>
    </>
  );
}
