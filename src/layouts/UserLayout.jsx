import { Outlet } from "react-router-dom";
import UserNavbar from "../components/UserNavbar.jsx";

export default function UserLayout() {

  return (
    <div className="container-fluid">
      <div className="row sidenav">
        <UserNavbar />
        <main className="col-9 col-lg-10 p-4 mx-auto">
          <Outlet />
        </main>
      </div>
    </div>
  );
}