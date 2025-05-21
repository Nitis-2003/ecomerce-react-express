import { Navigate } from "react-router"

const PublicRoute = ({ children }) => {
    if(localStorage.getItem("token")){
        return <Navigate to={"/"} replace />
    }
    return children
}

export default PublicRoute