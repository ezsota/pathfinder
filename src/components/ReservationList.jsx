// view your reservations from user profile
// Browsing is public. Booking is authenticated.

export default function ReservationList(props) {
    console.log('components/ReservationsList.jsx loaded')
    console.log('ReservationList.jsx component received:', props.reservations)

    return (
        <section>
            <ol className="profile-list">
                {props.reservations.map(reservation => (
                    <li key={reservation.id}>{reservation.craftName}{reservation.craftId}</li>
                ))}
            </ol>
        </section>
    );
};