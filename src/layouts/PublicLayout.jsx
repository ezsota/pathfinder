// Public Layout: The site layout before users are authorized. -> restricted/hidden features

import { Outlet } from "react-router-dom";
import Banner from "../components/Banner.jsx"
import Navbar from "../components/Navbar.jsx";
import Footer from "../components/Footer.jsx";

export default function PublicLayout() {
    console.log('PublicLayout.jsx loaded');

    return (
        <div className="d-flex flex-column min-vh-100">
            <Banner />
            <Navbar />
            <main className="container-fluid bg-lightgray flex-fill p-0 m-0">
                <Outlet />
            </main>
            <Footer />
        </div>
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
    container-fluid -> full width container
    mt-4 -> margin-top set to BS value of 4 (~24px)
    d-flex -> makes div container a flex container (similar to 'display: flex;' in CSS)
    flex-fill -> makes element fill up space not used by other elements (similar to 'flex: 1;' in CSS)
*/