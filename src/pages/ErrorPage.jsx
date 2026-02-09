// display general 'page not found'

import errorBot from "../assets/not_found.webp"
import { Link } from "react-router-dom"

export default function ErrorPage() {
    console.log('ErrorPage.jsx loaded')

    return (
        <div className="
        d-flex 
        flex-column 
        justify-content-center 
        align-items-center 
        min-vh-100
        bg-darkblue">
            <main className="text-center">
                <img src={errorBot} alt="Page not found error mascot" className="img-fluid" />
                <h1 className="w-100 text-center text-red">Page Not Found</h1>
                <Link to="/" className="d-grid gap-2 mt-2 no-underline">
                    <button className="btn text-white bg-purple darkpurple-hover mx-5">Phone Home</button>
                </Link>
            </main>
        </div>
    );
};