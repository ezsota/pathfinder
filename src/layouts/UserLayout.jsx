// site layout after users logins/authenticates -> UserReservations.jsx, UserProfile.jsx, Logout Link/Feature -> starting page for authed users
// no public-site navbar since page is for authed users to perform tasks, navigate to public side of site using logo click or a link

import { Outlet } from "react-router-dom";
import UserNavbar from "../components/UserNavbar.jsx";

export default function UserLayout() {
  console.log('layouts/UserLayout.jsx loaded');

  return (
    <div className="container-fluid">
      <div className="row sidenav">
        <UserNavbar />
        <main className="col-9 col-md-10 p-4">
          <Outlet />
        </main>
      </div>
    </div>
  );
}

/*
================
BOOTSTRAP NOTES
================
  container-fluid -> always 100% viewport width
  row -> creates horizontal columns using BS grid
  col-# -> small devices use # of 12 parts of width
  col-md-# -> medium devices use # of 12 parts of width
  bg-light -> applies light background color to columns
  min-vh-100 -> sets minimum height to 100% vh
  p-4 -> padding to all sides set to BS value of 4 (24px)

  ** Learning point:
    * <main> originally set as a standard element, no BS classes -> caused blank component renders and 0 errors
    * In BS -> children of .row MUST have a .col-* class OR they collapse the layout

*/