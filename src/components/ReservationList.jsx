// view your reservations from user profile
// Browsing is public. Booking is authenticated.

export default function ReservationList(props) {
    console.log('components/ReservationsList.jsx loaded')
    console.log('ReservationList.jsx component received:', props.userReservations)

    return (
        <section>
            <ol className="profile-list">
                {props.userReservations.map(reservation => (
                    <li key={reservation.id}><strong>Name: </strong>{reservation.craftName} <strong>Id:</strong> {reservation.craftId}</li>
                ))}
            </ol>
        </section>
    );
};