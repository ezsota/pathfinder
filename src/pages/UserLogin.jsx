import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx";

export default function UserLogin() {
    console.log('pages/UserLogin.jsx loaded')

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
        <form onSubmit={handleSubmit}>
            <h1>Login</h1>
            <input
                name="email"
                type="email"
                requiredvalue={email}
                onChange={event => setEmail(event.target.value)}
                autoComplete="off"
                placeholder="example@domain.com"
            />
            <button className="btn btn-primary">Login</button>
        </form>
    );
};