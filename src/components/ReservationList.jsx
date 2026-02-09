// view your reservations from user profile
// Browsing is public. Booking is authenticated.

export default function ReservationList(props) {
    console.log('Current User ResData:', props.userReservations)

    return (
        <section>
            <ol className="list-group list-group-numbered font-medium">
                {props.userReservations.map(reservation => (
                    <li key={reservation.id} className="list-group-item d-flex justify-content-center flex-wrap">
                        <div className="ms-2 me-auto">
                            <div>
                                <h2 className="font-large"><strong>Rental Id:</strong></h2>{reservation.id}
                            </div>
                            <span>
                                <ul>
                                    <li><strong>Craft:</strong> {reservation.craftName}</li>
                                    <li><strong>Craft Id:</strong> {reservation.craftId}</li>
                                    <li><strong>Date:</strong> {reservation.createdAt}</li>
                                </ul>
                            </span>
                        </div>
                        <span className="badge rounded-pill">
                            <button className="
                            btn 
                            btn-danger 
                            rounded-pill 
                            font-small"
                                onClick={() => props.deleteReservation(
                                    reservation.id,
                                    reservation.craftName,
                                    reservation.createdAt)}>
                                End Reservation
                            </button>
                        </span>
                    </li>
                ))}
            </ol>
        </section>
    );
};