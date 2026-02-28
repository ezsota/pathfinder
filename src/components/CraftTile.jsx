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
                        <img src={props.craft.image} loading="lazy" className="w-100 rounded" alt={`Image of the spacecraft ${props.craft.name}`} />
                    </span>
                </header>
                {/* CARD BOTTOM */}
                <div className="card-body d-flex flex-column">
                    {/* TABLE */}
                    <section className="my-2 rounded p-0 w-100 text-center">
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
                    <footer className="d-flex align-content-center justify-content-evenly flex-wrap gap-2 gap-md-0">
                        <p className="card-text my-auto">{props.craft.rating}<img src={starImg} alt="Image of a star for rating" />({props.craft.reviewers} reviews)</p>
                        <p className="card-text my-auto"><img src={currency} alt="Fake currency symbol" />{props.craft.price}/week</p>
                        <Link to={`/listings/${props.craft.id}`} className="btn btn-primary">
                            More Details
                        </Link>
                    </footer>
                </div>
            </div>
        </article>
    );
};