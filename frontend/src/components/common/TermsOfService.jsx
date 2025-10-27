// pages/TermsOfService.jsx  or  app/terms/page.jsx

import Footer from "./Footer";
import Header from "./Header";

export default function TermsOfService() {
  return (
    <>
      <Header />
      <section className="max-w-3xl mx-auto py-16 px-6">
        <h1 className="text-4xl font-bold mb-6 text-blue-700 text-center">
          Terms of Service
        </h1>

        <p className="text-gray-700 text-lg mb-6 text-center">
          By using Expense Tracker, you agree to the following terms and
          conditions.
        </p>

        <div className="space-y-6 text-gray-700">
          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              1. Account Responsibility
            </h2>
            <p>
              You are responsible for maintaining the confidentiality of your
              account and credentials.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              2. Acceptable Use
            </h2>
            <p>
              Do not use the platform for fraudulent, illegal, or harmful
              activities.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              3. Data Accuracy
            </h2>
            <p>
              Ensure that the financial data you provide is accurate and up to
              date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-blue-600 mb-2">
              4. Termination
            </h2>
            <p>
              We reserve the right to suspend or terminate accounts that violate
              these terms.
            </p>
          </div>

          <p className="text-gray-600 mt-6">Last updated: October 2025</p>
        </div>
      </section>
      <Footer />
    </>
  );
}
