import { NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";

export default function UserNavbar() {
  console.log('components/UserNavbar.jsx loaded');

  const { logout } = useAuth();
  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate("/");
  };

  // NavLink manages isActive based on currentUrl
  const linkToggler = ({ isActive }) => isActive ? "nav-link active" : "nav-link text-white";

  return (
    <nav
      className="
    bg-darkblue text-white
    col-12 col-md-3 col-lg-2
    d-flex flex-column
    min-vh-md-100
  "
    >
      <header className="p-3">
        <h4 className="audiowide text-red m-0">PATHFINDER</h4>
      </header>

      {/* MOBILE TOOLBAR */}
      <div className="d-flex d-md-none align-items-center justify-content-between px-3 py-2">
        <ul className="list-unstyled d-flex gap-3 m-0">
          <li>
            <NavLink to="/user/profile" end className={linkToggler}>
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/user/reservations" end className={linkToggler}>
              Reservations
            </NavLink>
          </li>
          <li>
            <NavLink to="/listings" end className={linkToggler}>
              Spacecrafts
            </NavLink>
          </li>
        </ul>

        <button
          className="btn bg-purple darkred-hover text-white btn-small p-0 ms-2"
          onClick={handleLogout}
        >
          Logout
        </button>
      </div>

      {/* DESKTOP SIDEBAR */}
      <ul className="list-unstyled d-none d-md-flex flex-column gap-3 p-3">
        <li>
          <NavLink to="/user/profile" end className={linkToggler}>
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink to="/user/reservations" end className={linkToggler}>
            Reservations
          </NavLink>
        </li>
        <li>
          <NavLink to="/listings" end className={linkToggler}>
            Spacecrafts
          </NavLink>
        </li>
      </ul>

      <footer className="mt-auto d-none d-md-block p-3 border-top border-secondary">
        <button
          className="btn bg-purple darkred-hover text-white w-100"
          onClick={handleLogout}
        >
          Logout
        </button>
      </footer>
    </nav>
  );
}