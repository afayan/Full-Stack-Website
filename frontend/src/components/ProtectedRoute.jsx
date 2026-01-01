import { Navigate } from "react-router-dom"
import useLogin from "../hooks/useLogin"

const ProtectedRoute = ({ children }) => {
  const [loading, userdata] = useLogin()

  console.log("userdata",userdata);
  

  if (loading) {
    return <p>Checking authentication...</p> 
  }

  // if backend says user is not authenticated
  if (!userdata?.success) {
    return <Navigate to="/login" replace />
  }

  return children
}

export default ProtectedRoute
