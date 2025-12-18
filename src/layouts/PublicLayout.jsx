// site layout before users log-in -> restricted/hidden features

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";

export default function PublicLayout() {
    return (
        <>
            <Navbar />
            <main>
                <h1>site layout before users are authed</h1>
                <Outlet />
            </main>
        </>
    );
};

/*
===================
REACT ROUTER NOTES:
===================
<Outlet> is used to reference where a child routes content is to be rendered within the parent route. Allows dynamic rendering.

*/