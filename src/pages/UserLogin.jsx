import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import IconLrg from "../assets/icon_lrg.svg";

export default function UserLogin() {
    //email state
    const [email, setEmail] = useState("");

    // get auth user info
    const { login } = useAuth();

    // assign useNavigate() function
    const navigate = useNavigate();

    // get info from location state (from CraftDetails.jsx)
    const location = useLocation();
    const { craftName, craftId } = location.state;

    function handleSubmit(event) {
        event.preventDefault();
        // use login function from useAuth custom hook
        login(email);
        // (from CraftDetails.jsx) persist URL & location state to NewReservation.jsx (preserves un-authed users action
        navigate(
            craftId ? `/user/reservations/new?craft=${craftId}` : "/user/reservations", { state: { craftName: craftName } }
        );
    };

    // Used a form since the main action is a submit:
    return (
        <div className="
        d-flex 
        flex-column 
        justify-content-center 
        align-items-center 
        min-vh-100
        bg-darkblue">
            <main className="p-5 rounded bg-midgray">
                <header className="text-center pb-5">
                    <Link to="/">
                        <img src={IconLrg} alt="Image of red space ship" />
                    </Link>
                    <h1>PATHFINDER</h1>
                </header>
                <form className="text-center mt-5" onSubmit={handleSubmit}>
                    <h5 className="text-black">Email:</h5>
                    <input
                        className="bg-lightgray form-control mb-3"
                        name="email"
                        type="email"
                        value={email}
                        onChange={event => setEmail(event.target.value)}
                        autoComplete="off"
                        placeholder="example@domain.com"
                        minLength={5}
                        maxLength={30}
                        required
                    />
                    <div className="d-grid gap-2 mt-5">
                        <button className="btn text-white bg-red mt-5 darkred-hover">Login</button>
                    </div>
                </form>
                <Link to="/" className="d-grid gap-2 mt-2 no-underline">
                    <button className="btn text-white bg-purple darkpurple-hover">Home</button>
                </Link>
            </main>
        </div>
    );
};