// Displays: thumbnail, name, rating, price, category (displays on craftlistings.jsx)
/*

    - props come from CraftListings.jsx
    - <Link> appends craft id to URL -> CraftDetails.jsx utilizes useParams() hook to display details

*/
import { Link } from "react-router-dom";
import imgSmall from '../assets/placeholderCraft_sm.png';
import starImg from '../assets/star.svg';
import currency from '../assets/currency.svg';


export default function CraftTile(props) {
    return (
        <article className="col-md-4 mb-3">
            <div className="card">
                <header className="card-header">
                    <span>
                        <img src={imgSmall} alt="Placeholder image of a spaceship" />
                        <h3 className="card-title">{props.craft.name}</h3>
                    </span>
                    <p className="card-text">{props.craft.rating}<img src={starImg} alt="Image of a star for rating" />({props.craft.reviewers} reviews)</p>
                    <p className="card-text"><img src={currency} alt="Fake currency symbol" />{props.craft.price}/week</p>
                </header>

                <div className="card-body">
                    <p className="card-text">{props.craft.category}</p>
                    <Link to={`/listings/${props.craft.id}`} className="btn btn-primary">
                        More Details
                    </Link>
                </div>
            </div>
        </article>
    );
};

/*
===============
BOOTSTRAP NOTES
===============
    col-md-4 -> medium and higher screens occupy 4 of 12 BS column widths
    mb-# -> margin-bottom set to BS value of #
    card -> makes a responsive BS card component for relative content
    card-header -> styles/spaces header content of a BS card
    card-body -> styles/spaces main content of a BS card
    card-footer -> styles/spaces footer content of a BS card
    card-img-top / .card-img-bottom -> styles an <img> for a card on top or bottom
    .card-img-overlay -> sets text atop an <img>
    card-link -> styles a BS card link
    btn -> standard BS button srtyling
    btn-primary -> sets primary button styling ("default is blue, customize in CSS")
*/