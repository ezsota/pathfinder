// ** Browsing is public. Booking is authenticated.
import { useSearchParams, useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import { craftData } from "../data/spacecrafts.js";

export default function NewReservation() {
    // get user auth info
    const { user } = useAuth();

    // assign useNavigate() to var
    const navigate = useNavigate();

    // destructure url param for id value -> assign ?craft=XXX to craftId
    const [params] = useSearchParams();
    const craftId = params.get("craft");

    // get craft name (useLocation):
    const location = useLocation();
    const { craftName } = location.state || 'craftName';
    const formattedCraftName = craftName.charAt(0).toUpperCase() + craftName.slice(1);

    // get craft image using craft id
    const craftInCart = craftData.spacecrafts.find(craft => craft.id === craftId);
    const resrvationImg = craftInCart.image;

    function handleReservation() {
        // assign reservations to anything stored, OR set reservations to empty array
        const reservations = JSON.parse(localStorage.getItem("reservations")) || [];
        console.log('Stored Reservations:', reservations);

        // Timestamp
        const timeData = Date.now();
        const timestamp = new Date(timeData).toLocaleString();

        // add new reservation to reservations variable
        reservations.push({
            id: crypto.randomUUID(),// "reservation number" for UserReservations.jsx
            userId: user.id,
            email: user.email,
            craftId,
            craftName,
            createdAt: timestamp
        });

        //update reservations in localStorage with current data
        localStorage.setItem("reservations", JSON.stringify(reservations));

        // re-direct user to reservations page
        navigate("/user/reservations");
    };

    return (
        <section className="h-100 d-flex">
            <div className="text-center m-auto p-5 bg-darkblue shadow-shrp-blk text-white rounded">
                <header>
                    <p>Almost Launch Time!</p>
                    <h1 className="py-1 fs-3">Confirm Your Reservation</h1>
                    <img src={resrvationImg} className="rounded img-fluid" alt={`Image of ${formattedCraftName}`} />
                </header>
                <ul className="list-unstyled py-1">
                    <li className="py-1"><strong>Craft:</strong> {formattedCraftName}</li>
                    <li className="py-1"><strong>Craft ID:</strong> {craftId}</li>
                    <li className="py-1"><strong>Price:</strong> {craftInCart.price}/week</li>
                </ul>
                <button className="btn btn-success w-100 px-0 px-md-3 py-0 py-md-2 fs-4" onClick={handleReservation}>
                    Reserve Now
                </button>
            </div>
        </section>
    );
};