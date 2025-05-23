import { Navigate } from "react-router"

const ProtectedRoute = ({ children }) =>{
    if(!localStorage.getItem("token")){
        return <Navigate to={"/login"} replace/>
    }
    return children
}

export default ProtectedRoute