// site layout after users logins/authenticates -> UserReservations.jsx, UserProfile.jsx, Logout Link/Feature -> starting page for authed users
// no public-site navbar since page is for authed users to perform tasks, navigate to public side of site using logo click or a link

import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div className="container-fluid">
      <div className="row">
        <nav className="col-3 col-md-2 bg-light min-vh-100">
          <p>User Navigation (Breadcrumb? Toolbar?)</p>
        </nav>
        <main>
          <p>User Layout: The site layout after users login/authenticate</p>
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

*/