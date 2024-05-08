import { Navigate, useLocation } from "react-router-dom";
import { useContext ,useState} from 'react';
import { AuthContext } from "../context/authContext"; // Replace with actual path

const OnlyPublic = ({ children }) => {
  const { user } = useContext(AuthContext); // Destructure directly
  const storedUser = localStorage.getItem('user'); // Retrieve user data from localStorage

  if(storedUser){
  const userData = JSON.parse(storedUser); // Parse the stored user data (replace if not JSON)
  const userRole = userData.Role; // Extract and set user role
  console.log("user role", userRole); // Optional: Log user role for debugging
  if (user && userRole === "user") {
    return <Navigate to="/homelgin" replace />; // Redirect to a specific page
  }else if(user && userRole ==="sousAdmin"){
    return <Navigate to="/sousdash" replace />; // Redirect to a specific page
  }else if(user && userRole ==="masterAdmin"){
    return <Navigate to="/dash" replace />; // Redirect to a specific page
  }
  }
return children

};


export default OnlyPublic;
