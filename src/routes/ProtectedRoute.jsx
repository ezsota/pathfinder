// not a visual page, but a gatekeeper, used to restrict or allow access to specific site content based on authentication status
// AuthContext manages authentication state | ProtectedRoute manages routing decisions -> separate responsibilites

import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function ProtectedRoute({children}) {
    console.log('ProtectedRoute({children}) loaded');

    // user authorization data
    const { user } = useAuth();
    // URL location data
    const location = useLocation();

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