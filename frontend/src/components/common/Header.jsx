import { useContext, useCallback, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import Logo from "../../assets/logo3.png";
import Modal from "./Modal";

export default function Header() {
  const { user, token, logout } = useContext(AuthContext);
  const navigate = useNavigate();
  const [activeModal, setActiveModal] = useState(null);

  const navLinks = [
    { name: "Home", path: user && token ? "/dashboard" : "/" },
    { name: "About", path: "/about" },
  ];

  const confirmLogout = () => {
    setActiveModal(`logout`);
  };

  const handleLogout = useCallback(() => {
    logout();
    setActiveModal(null);
  }, [logout]);

  const handleLogin = useCallback(() => {
    navigate("/login");
  }, [navigate]);

  const handleRegister = useCallback(() => {
    navigate("/register");
  }, [navigate]);

  return (
    <header className="bg-white border-b border-blue-50 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex justify-between items-center h-16">
          {/* الشعار والترحيب */}
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl flex items-center justify-center shadow-md">
              <img
                src={Logo}
                alt="Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col">
              <h1 className="text-2xl font-light text-gray-900 tracking-tight">
                Expense
                <span className="font-semibold text-blue-600">Tracker</span>
              </h1>
              <p className="text-sm text-gray-500">
                Welcome back,{" "}
                <span className="font-medium text-gray-700">
                  {user?.username || "Guest"}
                </span>
              </p>
            </div>
          </div>

          <nav className="flex items-center space-x-8">
            {/* الروابط الثابتة */}
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-normal relative group text-[15px]"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-300 group-hover:w-full"></span>
              </Link>
            ))}

            {/* روابط التسجيل والدخول */}
            {user && token ? (
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gradient-to-br from-blue-50 to-blue-100 rounded-full flex items-center justify-center border border-blue-200">
                  <Link
                    to={"/profile"}
                    className="text-blue-700 font-medium text-sm"
                  >
                    {user?.username?.charAt(0)?.toUpperCase() || "U"}
                  </Link>
                </div>
                <button
                  onClick={confirmLogout}
                  className="text-gray-500 hover:text-red-500 transition-colors duration-200 flex items-center space-x-2 text-[15px] font-normal"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"
                    />
                  </svg>
                  <span>Sign out</span>
                </button>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <button
                  onClick={handleLogin}
                  className="text-gray-600 hover:text-blue-600 transition-colors duration-200 font-medium text-[15px] py-2 px-4 rounded-lg hover:bg-blue-50"
                >
                  Sign in
                </button>
                <button
                  onClick={handleRegister}
                  className="bg-blue-600 text-white px-6 py-2.5 rounded-lg hover:bg-blue-700 transition-all duration-200 font-medium text-[15px] shadow-sm hover:shadow-md"
                >
                  Get Started
                </button>
              </div>
            )}
          </nav>
        </div>
      </div>

      {/* Logout Modal */}
      <Modal
        isOpen={activeModal === "logout"}
        onClose={() => setActiveModal(null)}
        title={"Confirm Logout"}
        footerButtons={[
          {
            text: "Cancel",
            onClick: () => setActiveModal(null),
            type: "secondary",
          },
          {
            text: "Confirm Logout",
            onClick: handleLogout,
            type: "danger",
          },
        ]}
      >
        <p className="text-gray-600">
          Are you sure you want to logout ? This action cannot be undone.
        </p>
      </Modal>
    </header>
  );
}
