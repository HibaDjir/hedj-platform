import { Navigate ,useLocation} from "react-router-dom";
import {useAuthContext} from '../hooks/useAuthContext'
import { useContext } from "react";
import { AuthContext } from "../context/authContext";


const RequireAuth=({children})=>{
    const location=useLocation()
    const context=useContext(AuthContext)

//const user = localStorage.getItem('user')
if(!context.user){
    return <Navigate to="/home" replace state={{path:location.pathname}}/>;

}
return children;
}
export default RequireAuth; 


