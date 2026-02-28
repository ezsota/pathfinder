import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
// Loading
import LoadingPage from "../pages/LoadingPage";

export default function ProtectedRoute({children}) {
    console.log('ProtectedRoute({children}) loaded');

    // get user and laoding states
    const { user , loading } = useAuth();
    // URL location data
    const location = useLocation();

    if (loading) {
        return <LoadingPage />
    }

    if (!user) {
        // if NOT authenticated then navigate to login page
        return (
            <Navigate 
                to={"/login"}
                // replace history stack with login page -> user unable to navigate back to ProtectedRoute -> maintains authentication requirements
                replace
                // add intended location to navigation context -> after login navigate to intended location
                state={{ from:location }}
            />
        )
    }

    // if authenticated then render the child content
    return children;
};