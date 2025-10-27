import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  FaHome,
  FaClipboardList,
  FaChartPie,
  FaMoneyBillWave,
  FaPiggyBank,
  FaCog,
  FaPlusCircle,
  FaSignOutAlt,
  FaUser,
  FaFileExport,
  FaBell,
} from "react-icons/fa";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

export default function Sidebar() {
  const { user, token, logout } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const sidebarItems = [
    { name: "Dashboard", path: "/dashboard", icon: FaHome },
    { name: "Transactions", path: "/all_transactions", icon: FaClipboardList },
    // { name: "Reports", path: "/reports", icon: FaChartPie },
    // { name: "Budget", path: "/budget", icon: FaMoneyBillWave },
    // { name: "Savings", path: "/savings", icon: FaPiggyBank },
    // { name: "Notifications", path: "/notifications", icon: FaBell },
    { name: "Settings", path: "/settings", icon: FaCog },
    // { name: "Export Data", path: "/export", icon: FaFileExport },
  ];

  if (!user || !token) {
    navigate("/login");
    return null;
  }

  return (
    <aside className="w-64 bg-gradient-to-b from-gray-900 to-gray-800 text-white h-screen fixed left-0 top-0 overflow-y-auto pt-16">
      {/* زر Add Expense في أعلى الـ Sidebar */}
      <div className="p-4 border-b border-gray-700">
        <button
          onClick={() => navigate("/add-transaction")}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-all duration-300 flex items-center justify-center space-x-2 font-semibold"
        >
          <FaPlusCircle className="w-5 h-5" />
          <span>Add Expense</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4">
        <ul className="space-y-2">
          {sidebarItems.map((item) => {
            const isActive = location.pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`flex items-center space-x-3 py-3 px-4 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-lg"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white"
                  }`}
                >
                  <item.icon className="w-5 h-5" />
                  <span className="font-medium">{item.name}</span>
                  {isActive && (
                    <div className="ml-auto w-2 h-2 bg-white rounded-full"></div>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Footer */}
      <div className="absolute bottom-0 left-0 right-0 p-4 border-t border-gray-700">
        <div className="space-y-2">
          <Link
            to="/profile"
            className="flex items-center space-x-3 py-3 px-4 rounded-xl text-gray-300 hover:bg-gray-700 hover:text-white transition-all duration-300"
          >
            <FaUser className="w-5 h-5" />
            <span className="font-medium">Profile</span>
          </Link>

          {/* <button
            onClick={handleLogout}
            className="w-full flex items-center space-x-3 py-3 px-4 rounded-xl text-red-300 hover:bg-red-600 hover:text-white transition-all duration-300 font-medium"
          >
            <FaSignOutAlt className="w-5 h-5" />
            <span>Logout</span>
          </button> */}
        </div>
      </div>
    </aside>
  );
}
