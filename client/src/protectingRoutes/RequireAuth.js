import { Navigate ,useLocation} from "react-router-dom";
import {useAuthContext} from '../hooks/useAuthContext'


const RequireAuth=({children})=>{
    const location=useLocation()
const {user}=useAuthContext()
//const user = localStorage.getItem('user')
if(!user){
    return <Navigate to="/home" replace state={{path:location.pathname}}/>;

}
return children;
}
export default RequireAuth; 


