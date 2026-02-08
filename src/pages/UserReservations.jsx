// page within UserLayout for housing reservations list
// Browsing is public. Booking is authenticated.

import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext.jsx";
import ReservationList from "../components/ReservationList.jsx";

export default function UserReservations() {
    // user auth info
    const { user } = useAuth();

    // Reservations state ('client data')
    const [userReservations, setUserReservations] = useState(JSON.parse(localStorage.getItem("reservations")) || []);
    console.log('usr res', userReservations);

    // Update userReservations state with localStorage data
    useEffect(() => {
        // get all reservations ('server data')
        const allReservations = JSON.parse(localStorage.getItem("reservations") || []);
        console.log('all res', allReservations);
        // set state res by current user
        setUserReservations(allReservations.filter(
            res => res.userId === user.id
        ));
        // update each time user.id changes
    }, [user.id]);

    //delete a reservation on btn click (ReservationList.jsx)
    function deleteReservation(resId, craftName, timeStamp) {
        // verify delete action
        const confirmation = window.confirm(`
            Are you sure you want to end this rental?\n
            Craft: ${craftName}\n
            Res#: ${resId}\n
            Rented: ${timeStamp}
            `);
        if (!confirmation) return;

        // get all reservations ('server data')
        const allReservations = JSON.parse(localStorage.getItem("reservations") || []);
        //Get all res id's besides one selected for deletion        
        const updatedReservations = allReservations.filter(res => res.id !== resId);
        //Update localStorage ('server')
        localStorage.setItem("reservations", JSON.stringify(updatedReservations));
        //Update state ('client')
        setUserReservations(updatedReservations.filter(
            res => res.userId === user.id
        ));
    };

    return (
        <section>
            <h1 className="border-bottom pb-4">Current Reservations</h1>
            <ReservationList userReservations={userReservations} deleteReservation={deleteReservation} />
        </section>
    );
};