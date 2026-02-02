import { useState } from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";
import IconLrg from "../assets/icon_lrg.svg";

export default function UserLogin() {

    const [email, setEmail] = useState("");
    // get login from custom hook in AuthContext.jsx
    const { login } = useAuth();
    const navigate = useNavigate();
    // useLocation() used to inspect and get info from the current URL (location)
    const location = useLocation();
    // Optional chaining to get id from state, if undefined then id will be set to undefined for error handling
    const craftId = location.state?.craftId;

    function handleSubmit(event) {
        event.preventDefault();
        // use login function from useAuth custom hook
        login(email);
        navigate(
            craftId ? `/user/reservations/new?craft=${craftId}` : "/user/reservations"
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