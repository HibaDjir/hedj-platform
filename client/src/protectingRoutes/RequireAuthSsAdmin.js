
import { Navigate, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { useContext, useEffect, useState } from 'react';
import { AuthContext } from "../context/authContext";

const RequireAuth = ({ children ,  allowedRoles = ["sousAdmin"]}) => {
const location = useLocation();
const navigate = useNavigate(); // Use useNavigate hook
const { user, dispatch } = useContext(AuthContext); // Destructure directly
const [isLoading, setIsLoading] = useState(true); // Track loading state
const [userRole, setUserRole] = useState(''); // Track user role
let redirectPath;

useEffect(() => {
    const checkAuth = async () => {
        const storedUser = localStorage.getItem('user'); // Retrieve user data from localStorage
        if (storedUser) {
            try {
            const userData = JSON.parse(storedUser); // Parse the stored user data (replace if not JSON)
            setUserRole(userData.Role); // Extract and set user role
            } catch (error) {
            console.error('Error parsing user data:', error);
            }
        }
    setIsLoading(false); // Update loading state after check
    if (!storedUser || !allowedRoles.includes(userRole)) { // Check user existence and role
        if (userRole === 'user') {
            redirectPath = '/homelgin';
        }else if(userRole === 'masterAdmin'){
            redirectPath = '/dash';
        }else if(userRole === 'medecin'){
            redirectPath = '/medecin';
        }

          return <Navigate to={redirectPath} replace state={{ path: location.pathname }} />;
    }

    };

    checkAuth(); // Call the check on component mount

}, [dispatch,allowedRoles]); // Include dispatch in dependency array to re-check on state updates


return isLoading ? (
    <p>Loading...</p>
// Display loading indicator while checking auth
) : user && userRole=== 'sousAdmin'  ? (
    children 
    // Render children if user exists and loading is complete
) : (
    <Navigate to="/home" replace state={{ path: location.pathname }} /> // Redirect if not authenticated
);
};


export default RequireAuth;
