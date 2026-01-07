// Public Layout: The site layout before users are authorized. -> restricted/hidden features

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function PublicLayout() {
    console.log('layouts/PublicLayout.jsx loaded');

    return (
        <>
            <Navbar />
            <main className="container mt-4">
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

/*
===================
REACT ROUTER NOTES:
===================
    <Outlet> is used to reference where a child routes' content is to be rendered within the parent route. Allows dynamic rendering.


===================
BOOTSTRAP NOTES:
===================
    container -> responsive centering and width
    mt-4 -> margin-top set to BS value of 4 (~24px)
*/