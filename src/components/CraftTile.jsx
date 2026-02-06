// Displays: thumbnail, name, rating, price, category (displays on craftlistings.jsx)
/*

    - props come from CraftListings.jsx
    - <Link> appends craft id to URL -> CraftDetails.jsx utilizes useParams() hook to display details

*/
import { Link } from "react-router-dom";
import starImg from '../assets/star.svg';
import currency from '../assets/currency.svg';

export default function CraftTile(props) {
    return (
        <article className="col-md-4 mb-3">
            <div className="card">
                {/* CARD TOP */}
                <header className="card-header">
                    <span className="text-center">
                        <h2 className="card-title m-auto py-1 audiowide">{props.craft.name.charAt(0).toUpperCase() + props.craft.name.slice(1)}</h2>
                        <p className="card-text">Type: {props.craft.category}</p>
                        <img src={props.craft.image} loading="lazy" className="w-100" alt={`Image of the spacecraft ${props.craft.name}`} />
                    </span>
                </header>
                {/* CARD BOTTOM */}
                <div className="card-body d-flex flex-column">
                    {/* TABLE */}
                    <section className="my-2 rounded p-0 w-100">
                        <div className="table-responsive">
                            <table className="table table-sm table-secondary table-striped rounded-table">
                                <thead>
                                    <tr>
                                        <th className="vertical-header text-wrap">Size</th>
                                        <th className="vertical-header text-wrap">Crew</th>
                                        <th className="vertical-header text-wrap">Cargo</th>
                                        <th className="vertical-header text-wrap">Range</th>
                                        <th className="vertical-header text-wrap">Speed</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>{props.craft.size}</td>
                                        <td>{props.craft.max_occupancy}</td>
                                        <td>{props.craft.cargo}cbm</td>
                                        <td>{props.craft.max_range}{props.craft.range_unit}</td>
                                        <td>{props.craft.max_speed}Mmph</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </section>
                    {/* FOOTER */}
                    <footer className="d-flex align-content-center justify-content-evenly flex-wrap">
                        <p className="card-text">{props.craft.rating}<img src={starImg} alt="Image of a star for rating" />({props.craft.reviewers} reviews)</p>
                        <p className="card-text"><img src={currency} alt="Fake currency symbol" />{props.craft.price}/week</p>
                        <Link to={`/listings/${props.craft.id}`} className="btn btn-primary">
                            More Details
                        </Link>
                    </footer>
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