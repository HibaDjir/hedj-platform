import { Navigate, useLocation } from "react-router-dom";
import { useContext } from 'react';
import { AuthContext } from "../context/authContext"; // Replace with actual path

const OnlyPublic = ({ children }) => {
  const { user } = useContext(AuthContext); // Destructure directly

  // If user exists, redirect to a different page (not /home)
  if (user) {
    return <Navigate to="/homelgin" replace />; // Redirect to a specific page
  }

  return children;
};

export default OnlyPublic;
