// pages/HelpCenter.jsx  or  app/help-center/page.jsx

import Footer from "./Footer";
import Header from "./Header";

export default function HelpCenter() {
  return (
    <>
      <Header />
      <section className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 text-blue-700 text-center">
          Help Center
        </h1>

        <p className="text-gray-700 text-lg mb-6 text-center">
          Need assistance? We’re here to help you get the most out of Expense
          Tracker.
        </p>

        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              💡 How to Add a Transaction
            </h2>
            <p>
              Go to your Dashboard → Click on "Add Transaction" → Fill in the
              details → Save.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              🔐 Reset Your Password
            </h2>
            <p>
              On the login page, click “Forgot Password?” and follow the
              instructions sent to your email.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              📞 Contact Support
            </h2>
            <p>
              If you’re facing issues, feel free to reach out at{" "}
              <a
                href="mailto:support@expensetracker.com"
                className="text-blue-600 underline"
              >
                support@expensetracker.com
              </a>
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}
