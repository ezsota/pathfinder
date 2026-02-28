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