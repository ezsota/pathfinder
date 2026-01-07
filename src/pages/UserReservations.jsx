// page within UserLayout for housing reservations list
// Browsing is public. Booking is authenticated.

import { useAuth } from "../context/AuthContext.jsx";
import ReservationList from "../components/ReservationsList.jsx";

export default function UserReservations() {
    console.log('pages/UserReservations.jsx loaded')

    const { user } = useAuth();
    const storedReservations = JSON.parse(localStorage.getItem("reservations")) || [];

    // grab only reservations that match current authed user
    const userReservations = storedReservations.filter(
        reservation => reservation.userID === user.id
    ); 
    
    return (
        <section>
            <h1>Current Reservations</h1>
            <ReservationList reservations={userReservations} />
        </section>
    );
};