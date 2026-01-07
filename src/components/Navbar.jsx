// public site navigation

import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {
    console.log('components/Navbar.jsx loaded')
    const { user, logout } = useAuth();
    const navigate = useNavigate();
    
    const linkToggler = ( {isActive} ) => isActive ? "nav-link active" : "nav-link";

    function handleLogout() {
        logout();
        navigate("/");
    };

    return (
        <nav className="nav gap-3">
            <NavLink to="/" end className={linkToggler}>
                Home
            </NavLink>
            <NavLink to="/listings" className={linkToggler}>
                Spacecrafts
            </NavLink>

            {user
                ? (
                    <>
                        <NavLink to="/user/profile" className={linkToggler}>
                            Account
                        </NavLink>
                        <button className="btn btn-primary nav-link" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                )
                : (
                    <NavLink to="/login" className={linkToggler}>
                        Login
                    </NavLink>
                )
            }
        </nav>
    );
};

/*
==================
REACT ROUTER NOTES
==================
    - In React Router, whenever a NavLink is active, it will automatically have an .active class applied for easy styling with CSS
    - 'end' is used to strictly apply .active class only to links that exactly match to= value

    -originally set <NavLink to="user/profile"> which is a relative path, ruining navigation -> example: linked to /listings/user/profile when clicking listings
    - always set linking to absolute paths "example: /user/profile"

    - originally used NavLink for logout -> logout is a state mutation not a navigation, mixed responsibilities -> used a button instead
        <NavLink to="/" end onClick={logout}>
            Logout
        </NavLink>

*/