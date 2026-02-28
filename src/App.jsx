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
// Error:
import ErrorPage from "./pages/ErrorPage.jsx";


export default function App() {
  return (
    <Routes>
      {/* PUBLIC ROUTES */}
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/listings" element={<CraftListings />} />
        <Route path="/listings/:id" element={<CraftDetails />} />
      </Route>
      {/* PUBLIC LOGIN ROUTE */}
      <Route path="/login" element={<UserLogin />} />
      {/* PROTECTED ROUTES */}
      <Route path="/user" element={
        <ProtectedRoute>
          <UserLayout />
        </ProtectedRoute>
      }>
        <Route index element={<UserProfile />} />
        <Route path="reservations" element={<UserReservations />} />
        <Route path="reservations/new" element={<NewReservation />} />
        <Route path="profile" element={<UserProfile />} />
      </Route>
      {/* ERROR ROUTE */}
      <Route path="*" element={<ErrorPage />} />
    </Routes >
  );
};