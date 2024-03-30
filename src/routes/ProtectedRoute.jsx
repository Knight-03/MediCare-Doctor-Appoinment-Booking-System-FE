import React, { useContext } from "react";
import { authContext } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children, allowedRoles }) {
  const { token, user } = useContext(authContext);

  if (!token) {
    // Handle case where user is not authenticated
    return <Navigate to="/login" replace={true} />;
  }

  if (!user || !user.role) {
    // Handle case where user object or user role is missing
    console.error("User or user role is missing in authContext!");
    return null;
  }

  const isAllowed = allowedRoles.includes(user.role);
  const accessibleRoute = isAllowed ? children : <Navigate to="/login" replace={true} />;

  return accessibleRoute;
}

export default ProtectedRoute;
