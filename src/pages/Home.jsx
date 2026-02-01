// starting page for both public and authenticated users -> featured spacecraft
import card1 from "../assets/card1.png";
import card2 from "../assets/card2.png";
import card3 from "../assets/card3.png";
import { NavLink } from "react-router-dom";
import { Carousel } from "bootstrap"; // For BSCarousel init on render
import { useEffect, useRef } from "react"; // For BSCarousel init on render

export default function Home() {

    const carouselRef = useRef(null); // For BSCarousel init on render
    useEffect (() => {
        // Avoid init before component mount
        if (!carouselRef.current) return;

        // init carouselRef on component mount
        const carousel = new Carousel(carouselRef.current, {
            interval: 2300,
            ride: "carousel",
        });

        // Avoid memory leak on component unmount
        return () => carousel.dispose();
    },[]);

    // Page transition on click
    function handleCtaClick() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div id="welcome-banner">
            <div className="container-fluid h-100">
                <div className="row px-md-0 py-md-5 w-100 h-100 m-auto gap-5">
                    <aside className="
                    col-12
                    col-sm-10
                    col-md-8 
                    col-lg-4 
                    d-flex 
                    flex-column 
                    h-75 
                    bg-darkblue-transparent
                    rounded 
                    text-center
                    m-auto 
                    ms-lg-5 
                    my-auto 
                    justify-content-around
                    text-white
                    shadow-shrp-drkprp">
                        <h2>Explore our rentals.</h2>
                        <article
                            ref={carouselRef}
                            className="border rounded carousel slide carousel-fade overflow-hidden"
                            data-bs-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active" data-bs-interval="2300">
                                    <img src={card1} alt="Image of featured rental" className="d-block w-100" />
                                </div>
                                <div className="carousel-item" data-bs-interval="2300">
                                    <img src={card2} alt="Image of featured rental" className="d-block w-100" />
                                </div>
                                <div className="carousel-item" data-bs-interval="2300">
                                    <img src={card3} alt="Image of featured rental" className="d-block w-100" />
                                </div>
                            </div>
                        </article>
                        <NavLink to="/listings" onClick={handleCtaClick}>
                            <button className="bg-red text-white rounded darkpurple-hover py-3 fs-5 w-100">Available Rentals</button>
                        </NavLink>
                    </aside>
                    {/* <div className="col-12 col-md-7"></div> */}
                </div>
            </div>
        </div>
    );
};