// All the details
import { useParams, useNavigate } from "react-router-dom";
import { craftData } from "../data/spacecrafts.js";
import { useAuth } from "../context/AuthContext.jsx";
import starImg from '../assets/star.svg';
import currencyImg from '../assets/currency.svg';


export default function CraftDetails() {
    // get auth user data
    const { user } = useAuth();

    // getParams() gets id from url
    const { id } = useParams();

    // get craft data using 'id'
    const craft = craftData.spacecrafts.find(craft => craft.id === id);

    // dynamically change URL and auto-route users in handlerReservation()
    const navigate = useNavigate();

    function handleReservation() {
        if (!user) {
            // send craft id state, using useLocation hook, to UserLogin.jsx (preserves un-authed users action)
            navigate("/login", { state: { craftName: craft.name, craftId: id } });
        } else {
            // send id (URL param) and location state to NewReservation.jsx (preserves authed users action)
            navigate(`/user/reservations/new?craft=${id}`, { state: { craftName: craft.name } });
        }
    };

    function handleBackNav() {
        navigate(-1);
    };

    return (
        <article className="container my-2">
            <header className="text-center my-2 my-md-3 my-lg-4">
                <h1>Details</h1>
            </header>
            <div className="row g-3 align-items-stretch justify-content-center">
                {/* LEFT PANEL */}
                <div className="col-12 col-xl-6 d-flex">
                    <div className="d-flex flex-column w-100 border rounded p-3 text-center justify-content-evenly">
                        <header>
                            <h2 className="fs-3 audiowide">{craft.name.toUpperCase()}</h2>
                            <h3 className="fs-6">Type: {craft.category}</h3>
                            <img src={craft.image} className="w-100 rounded" alt={`Image of spacecraft ${craft.name}`} />
                        </header>
                        <section className=" my-2 rounded p-0 w-100">
                            <div className="table-responsive">
                                <table className="table table-sm table-secondary table-striped rounded-table">
                                    <thead>
                                        <tr>
                                            <th className="vertical-header text-wrap">Size</th>
                                            <th className="vertical-header text-wrap">Crew</th>
                                            <th className="vertical-header text-wrap">Cargo</th>
                                            <th className="vertical-header text-wrap">Range</th>
                                            <th className="vertical-header text-wrap">Speed</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>{craft.size}</td>
                                            <td>{craft.max_occupancy}</td>
                                            <td>{craft.cargo}cbm</td>
                                            <td>{craft.max_range}{craft.range_unit}</td>
                                            <td>{craft.max_speed}Mmph</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </section>
                    </div>
                </div>
                {/* RIGHT PANEL */}
                <div className="col-12 col-xl-6 d-flex">
                    <div className="d-flex flex-column w-100 border rounded p-3">
                        <section className="flex-grow-1">
                            <h2 className="text-center">Features</h2>
                            <p className="text-center">{craft.description}</p>
                            <ul className="li-deco-inside text-center">
                                {craft.features.map((feat, index) => (
                                    <li key={`${craft.id}-feature-${index}`}>{feat}</li>
                                ))}
                            </ul>
                        </section>
                        <span className="d-flex flex-row justify-content-center w-100 gap-4">
                            <p>
                                Rating: {craft.rating}/5
                                <img src={starImg} alt="Rating star image" />
                            </p>
                            <p>
                                Price: <img src={currencyImg} alt="Currency image" />
                                {craft.price}/week
                            </p>
                        </span>
                        <footer className="d-flex gap-2 my-auto">
                            <button className="btn btn-primary w-50" onClick={handleBackNav}>← Back</button>
                            <button className="btn btn-success w-50" onClick={handleReservation}>Reserve →</button>
                        </footer>
                    </div>
                </div>
            </div>
        </article>
    );

};