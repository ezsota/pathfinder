// checkout page -> review craft and select dates (days) -> book
// ** Browsing is public. Booking is authenticated.

import { useSearchParams, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function NewReservation() {
    console.log("pages/NewReservation.jsx loaded");

    // assign the first element, of the URL query, returned by useSearchParams() to params:
    const [params] = useSearchParams();
    // assign the value of ?craft=XXX to craftId
    const craftId = params.get("craft");
    // get user auth info
    const { user } = useAuth();
    const navigate = useNavigate();

    function handleReservation() {
        // assign reservations to anything stored, OR set reservations to empty array
        const reservations = JSON.parse(localStorage.getItem("reservations")) || [];

        // add new reservation to reservations variable
        reservations.push({
            id: crypto.randomUUID(),
            userId: user.id,
            craftId,
            createdAt: Date.now()
        });

        //update reservations in localStorage with current data
        localStorage.setItem("reservations", JSON.stringify(reservations));

        // re-direct user to reservations page
        navigate("/user/reservations");
    };

    return (
        <section>
            <h1>Confirm Reservation</h1>
            <p>Craft: {craftId}</p>
            <button className="btn btn-primary" onClick={handleReservation}>
                Reserve Now
            </button>
        </section>
    );
};