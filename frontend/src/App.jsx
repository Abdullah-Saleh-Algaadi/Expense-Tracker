import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/Protected/ProtectedRoute";
import Loading from "./components/common/Loading";
import PageLoader from "./components/common/PageLoader";

import About from "./components/common/About";
import HelpCenter from "./components/common/HelpCenter";
import PrivacyPolicy from "./components/common/PrivacyPolicy";
import TermsOfService from "./components/common/TermsOfService";

const Register = lazy(() => import("./components/auth/Register"));
const Login = lazy(() => import("./components/auth/Login"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const AddTransactionForm = lazy(() =>
  import("./components/transaction/AddExpense")
);
const Predict = lazy(() => import("../predict/Predict"));
const AllTransactions = lazy(() =>
  import("./components/transaction/AllTransactions")
);
const Profile = lazy(() =>
  import("./components/profile/Personal Information/Profile")
);
const Home = lazy(() => import("./pages/Home"));

const queryClient = new QueryClient();
function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AuthProvider>
            <Suspense
              fallback={
                <div className="loading">
                  <PageLoader />
                </div>
              }
            >
              <Routes>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/help" element={<HelpCenter />} />
                <Route path="/privacy" element={<PrivacyPolicy />} />
                <Route path="/terms" element={<TermsOfService />} />

                {/* Protected Routes */}
                <Route
                  path="/dashboard"
                  element={
                    <ProtectedRoute>
                      <Dashboard />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/add-transaction"
                  element={
                    <ProtectedRoute>
                      <AddTransactionForm />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/predict"
                  element={
                    <ProtectedRoute>
                      <Predict />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/all_transactions"
                  element={
                    <ProtectedRoute>
                      <AllTransactions />
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <ProtectedRoute>
                      <Profile />
                    </ProtectedRoute>
                  }
                />
              </Routes>
            </Suspense>
          </AuthProvider>
        </BrowserRouter>
      </QueryClientProvider>
      <ToastContainer position="top-center" autoClose={3000} />
    </>
  );
}

export default App;
