//site layout after users logins/authenticates -> add navbar features ->  UserReservations.jsx, UserProfile.jsx, Logout Link/Feature -> starting page for authed users
// no navbar since page is for authed users to perform tasks, navigate to oublic side of site using logo click or a link

import { Outlet } from "react-router-dom";

export default function UserLayout() {
  return (
    <div>
        <h1>site layout after users logins/authenticates</h1>
      <Outlet />
    </div>
  );
}