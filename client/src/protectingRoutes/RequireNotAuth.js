import { Navigate, useLocation } from "react-router-dom";
import { useContext ,useState} from 'react';
import { AuthContext } from "../context/authContext"; // Replace with actual path

const OnlyPublic = ({ children }) => {
  const { user } = useContext(AuthContext); // Destructure directly

//   if (user) {
//     return <Navigate to="/homelgin" replace />; // Redirect to a specific page
//   }

//   return children;
// };
const storedUser = localStorage.getItem('user');
  // Retrieve user data from localStorage
  if(storedUser){
                
                const userData = JSON.parse(storedUser); // Parse the stored user data (replace if not JSON)
                
              const userRole=userData.Role
                if(user && userRole==="sousAdmin"){
                  console.log('user is ',userRole)
                  return <Navigate to="/sousdash" replace />
                }
                if(user && userRole==="user"){
                  return <Navigate to="/homelgin" replace />
                }
                
                }
                return children
}


export default OnlyPublic;
