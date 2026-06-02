import { Navigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { toast } from "react-hot-toast";

export default function ProtectedRoute({ children }) {
  const { user } = useAuth();

  if (!user) {
    toast.error("Please log in to access this page");
    return <Navigate to="/" replace />;
  }

  return children;
}
