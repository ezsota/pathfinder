// view your reservations from user profile
// Browsing is public. Booking is authenticated.

export default function ReservationsList(props) {
    console.log('components/ReservationsList.jsx loaded')

    return (
        <section>
            <ul>
                {props.reservations.map(reservation => (
                    <li key={reservation.id}>{reservation.craftName}{reservation.craftId}</li>
                ))}
            </ul>
        </section>
    );
};