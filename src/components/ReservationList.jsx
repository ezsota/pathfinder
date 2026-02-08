// view your reservations from user profile
// Browsing is public. Booking is authenticated.

export default function ReservationList(props) {
    console.log('Current User ResData:', props.userReservations)

    return (
        <section>
            <ol className="list-group list-group-numbered font-medium">
                {props.userReservations.map(reservation => (
                    <li key={reservation.id} className="list-group-item d-flex justify-content-between align-items-start flex-wrap">
                        <div className="ms-2 me-auto">
                            <div>
                                <strong>Res#:</strong> {reservation.id}
                            </div>
                            <span>
                                <strong>Craft:</strong> {reservation.craftName} | <strong>Craft Id:</strong> {reservation.craftId}
                            </span>
                        </div>
                        <span className="badge rounded-pill">
                            <button className="btn btn-danger rounded-pill font-small" onClick={() => props.deleteReservation(reservation.id)}>End Reservation</button>
                        </span>
                    </li>
                ))}
            </ol>
        </section>
    );
};