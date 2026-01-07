// All the details

import { useParams, useNavigate } from "react-router-dom";
import { craftData } from "../data/spacecrafts.js";
import { useAuth } from "../context/AuthContext.jsx";
import imgRegular from '../assets/placeholderCraft.png';


export default function CraftDetails() {
    console.log('pages/CraftDetails.jsx loaded');


    // getParams() gets id from url (via CraftTile.jsx <Link>)
    const { id } = useParams();
    const craft = craftData.spacecrafts.find(craft => craft.id === id);
    // gets user data from custom hook useAuth in AuthContext.jsx
    const { user } = useAuth();
    // utilize useNavigate() hook to dynamically change URL and auto-route users
    const navigate = useNavigate();

    function handleReservation() {
        if (!user) {
            // send craft id state, using useLocation hook, to UserLogin.jsx (preserves users action)
            navigate("/login", { state: { craftId: id } });
        } else {
            // query string (?) used to inject craft id into URL
            navigate(`/user/reservations/new?craft=${id}`);
        }
    };

    return (
        <section>
            <h1>{craft.name}</h1>
            <p>{craft.description}</p>
            <button className="btn btn-success" onClick={handleReservation}>
                Reserve Now
            </button>
        </section>
    );
};