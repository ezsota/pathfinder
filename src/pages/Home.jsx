// starting page for both public and authenticated users -> featured spacecraft
import card1 from "../assets/card1.webp";
import card2 from "../assets/card2.webp";
import card3 from "../assets/card3.webp";
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
                <div className="d-flex flex-column-reverse flex-lg-row align-items-baseline px-md-0 py-md-5 w-100 h-100 m-auto gap-0">
                    <aside className="
                    col-12
                    col-sm-11
                    col-md-10
                    col-lg-4 
                    d-flex 
                    flex-column 
                    h-75 
                    bg-darkblue-transparent
                    rounded 
                    text-center
                    m-auto
                    ms-lg-5 
                    px-2
                    justify-content-around
                    text-white
                    shadow-shrp-drkprp">
                        <h2 className="audiowide">Previous Rentals</h2>
                        <article
                            ref={carouselRef}
                            className="rounded carousel slide carousel-fade overflow-hidden"
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
                            <button className="bg-red text-white rounded darkpurple-hover py-3 fs-5 w-100 audiowide">Find your path &#8594;</button>
                        </NavLink>
                    </aside>
                    <div className="col-12 col-sm-11 col-md-10 col-lg-7 text-center p-0 mx-auto mt-lg-5 text-white">
                        <h1 className="fs-1 px-0 pt-5 m-0 txt-shadow-drkprp">Reach eternity in an instant</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};