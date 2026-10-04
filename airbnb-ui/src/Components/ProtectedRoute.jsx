// ProtectedRoute.jsx
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const user = localStorage.getItem("userId");

  // ❌ Not logged in
  if (!user) {
    return <Navigate to="/" />;
  }

  // ✅ Logged in
  return children;
}