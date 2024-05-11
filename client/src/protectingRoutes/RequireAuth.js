import { Navigate } from "react-router-dom";
import {useAuthContext} from '../hooks/useAuthContext'


const RequireAuth=({children})=>{
// const {user}=useAuthContext()
const user = localStorage.getItem('user')
if(!user){
    return <Navigate to="/home" />;
}
return children;
}
export default RequireAuth;