// All the details
import { useParams, useNavigate } from "react-router-dom";
import { craftData } from "../data/spacecrafts.js";
import { useAuth } from "../context/AuthContext.jsx";
import starImg from '../assets/star.svg';
import currencyImg from '../assets/currency.svg';


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
        <article className="container">
            <div className="row g-3 align-items-stretch">
                {/* LEFT PANEL */}
                <div className="col-12 col-md-6 d-flex">
                    <div className="d-flex flex-column w-100 border rounded p-3 text-center justify-content-evenly">
                        <header>
                            <h1>{craft.name.toUpperCase()}</h1>
                            <p>Category: {craft.category}</p>
                            <img src={craft.image} className="img-fluid rounded" alt={`Image of spacecraft ${craft.name}`} />
                        </header>
                        <section className="bg-midgray my-2 rounded p-2">
                            <ul className="list-unstyled d-flex justify-content-center gap-3 mb-1">
                                <li>Size: {craft.size}</li>
                                <li>Occupancy: {craft.max_occupancy}</li>
                                <li>Cargo: {craft.cargo}cbm</li>
                            </ul>
                            <ul className="list-unstyled d-flex justify-content-center gap-3 mb-0">
                                <li>Range: {craft.max_range} miles</li>
                                <li>Speed: {craft.max_speed} Mmph</li>
                            </ul>
                        </section>
                    </div>
                </div>
                {/* RIGHT PANEL */}
                <div className="col-12 col-md-6 d-flex">
                    <div className="d-flex flex-column w-100 border rounded p-3">
                        <section className="flex-grow-1">
                            <h2 className="text-center">Features</h2>
                            <p>{craft.description}</p>
                            <ul className="li-deco-inside">
                                {craft.features.map((feat, index) => (
                                    <li key={`${craft.id}-feature-${index}`}>{feat}</li>
                                ))}
                            </ul>
                        </section>
                        <span className="d-flex flex-row justify-content-center w-100 gap-4">
                            <p>
                                Rating:
                                {craft.rating}/5
                                <img src={starImg} alt="Rating star image" />
                            </p>
                            <p>
                                Price:
                                <img src={currencyImg} alt="Currency image" />
                                {craft.price}/week
                            </p>
                        </span>
                        <footer className="d-flex gap-2 mt-auto">
                            <button className="btn btn-primary w-50" onClick={handleBackNav}>← Back</button>
                            <button className="btn btn-success w-50" onClick={handleReservation}>Reserve →</button>
                        </footer>
                    </div>
                </div>
            </div>
        </article>
    );

};