// public site navigation
import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function Navbar() {    
    const { user, logout } = useAuth();
    const navigate = useNavigate();

    function handleLogout() {
        logout();
        navigate("/");
    };

    // NavLink manages isActive based on currentUrl
    const linkToggler = ( {isActive} ) => isActive ? "nav-link active" : "nav-link text-black";

    return (
        <nav className="nav gap-0 gap-md-3 pe-3 bg-midgray font-small">
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
                        <button className="btn log-offon-btns nav-link ms-auto text-white bg-darkblue darkred-hover rounded-pill" onClick={handleLogout}>
                            Logout
                        </button>
                    </>
                )
                : (
                    <NavLink to="/login" className={`btn log-offon-btns ms-auto text-white bg-darkblue darkpurple-hover rounded-pill`}>
                        Login
                    </NavLink>
                )
            }
        </nav>
    );
};