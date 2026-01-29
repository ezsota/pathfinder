// All the details

import { useParams, useNavigate } from "react-router-dom";
import { craftData } from "../data/spacecrafts.js";
import { useAuth } from "../context/AuthContext.jsx";


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
            navigate("/login", { state: { craftName: craft.name, craftId: id } });
        } else {
            // query string (?) used to inject craft id into URL
            navigate(`/user/reservations/new?craft=${id}`, { state: { craftName: craft.name } });
        }
    };

    function handleBackNav() {
        navigate(-1);
    };

    return (
        <section>
            <h1>{craft.name.toUpperCase()}</h1>
            <img src={craft.image} className="img-fluid" alt={`Image of spacecraft ${craft.name}`} />
            <p>{craft.description}</p>
            <ul>
                {craft.features.map((feat, index) => (
                    <li key={`${craft.id}-feature-${index}`}>{feat}</li>
                ))}
            </ul>
            <button className="btn btn-primary" onClick={handleBackNav}>&#8592; Back</button>
            <button className="btn btn-success" onClick={handleReservation}>
                Reserve Now
            </button>
        </section>
    );
};