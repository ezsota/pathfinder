/*
  APP FLOW
    Landing:
      1) Public users visit Home -> browse CraftListings -> view CraftDetails (use id) -> click CTA/Reserve Now btn
    Authorization gate:
      2a) User not authed? redirect to UserLogin (preserve craft id) -> redirect to NewReservation
      2b) User authed ? direct to NewReservation
    Creation:
      3) NewReservation rendered -> Finalize then click Confirm reservation button -> create a reservation object (to be added to ReservationList)
    Post-Creation:
      4) redirect to UserLayout-> Reservations (ReservationsList component inside containing reservation objects)
*/

import { Route, Routes } from 'react-router-dom';
// Layouts:
import PublicLayout from "./layouts/PublicLayout.jsx";
import UserLayout from "./layouts/UserLayout.jsx";
// Pages:
import Home from "./pages/Home";
import CraftDetails from "./pages/CraftDetails.jsx";
import CraftListings from "./pages/CraftListings.jsx";
import NewReservation from './pages/NewReservation.jsx';
import UserLogin from "./pages/UserLogin.jsx";
import UserProfile from "./pages/UserProfile.jsx";
import UserReservations from "./pages/UserReservations.jsx";
// Routes:
import ProtectedRoute from "./routes/ProtectedRoute.jsx";
// Errors:
import ErrorDisplay from "./components/ErrorDisplay.jsx";

export default function App() {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<CraftListings />} />
        <Route path="/listings/:id" element={<CraftDetails />} />
        <Route path="/error" element={<ErrorDisplay />} />
      </Route>
      {/* PUBLIC LOGIN ROUTE */}
      <Route path="/login" element={<UserLogin />} />
      {/* PROTECTED ROUTES */}
      <Route path="/user" element={
        <ProtectedRoute>
          <UserLayout />
        </ProtectedRoute>
      }>
        <Route path="reservations" element={<UserReservations />} />
        <Route path="reservations/new" element={<NewReservation />} />
        <Route path="profile" element={<UserProfile />} />
      </Route>
    </Routes >
  );
};

/*
==================
REACT ROUTER NOTES
==================
<Routes> and <Route> are components for navigation and rendering based on URL.

<Routes>
  - container for <Route> elements/components
  - renders first <Route> by default
  - maps to path of <Route> children
  - can contain nested <Route>
  - new to ReactRouter 6

<Route>
  - an individual route in the app or site
  - renders whats inside the element prop -> example: element={<About />}
  - sets the path prop ->  example: path="/about"
  - nested child inside <Routes>
  - React Router 4+

*/