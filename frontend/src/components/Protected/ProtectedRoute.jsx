import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const { user, token, loading } = useContext(AuthContext);

  if (loading) {
    return <div className="text-center text-white">Loading...</div>;
  }

  if (!user || !token) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

