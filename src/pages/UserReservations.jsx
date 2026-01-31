// page within UserLayout for housing reservations list
// Browsing is public. Booking is authenticated.

import { useAuth } from "../context/AuthContext.jsx";
import ReservationList from "../components/ReservationList.jsx";

export default function UserReservations() {
    console.log('pages/UserReservations.jsx loaded')

    const { user } = useAuth();
    const storedReservations = JSON.parse(localStorage.getItem("reservations")) || [];

    // grab only reservations that match current authed user
    const userReservations = storedReservations.filter(
        res => res.userId == user.id
    );
    
    return (
        <section>
            <h1 className="border-bottom pb-4">Current Reservations</h1>
            <ReservationList userReservations={userReservations} />
        </section>
    );
};