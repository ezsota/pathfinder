//filter box (make this a rectangle with an image in the background) -> filter list of displayed crafts
// PARENT COMPONENT = pages/CraftListings.jsx

import { craftData } from "../data/spacecrafts.js";

export default function FilterBox(props) {

    // HANDLE FILTER FUNCTION -> CHANGE PROPS.FILTER STATE IN CRAFTLISTINGS.JSX

    function handleFilter() {
        console.log('filtering');
    };

    return (
        <nav className="
                    mt-3 mt-md-5 
                    mb-md-3 
                    mx-1 mx-md-3 mx-lg-5 
                    text-center text-white
                    navbar navbar-expand-lg navbar-dark bg-dark
                    rounded
                    ">
            <div className="container-fluid">
                {/* HAMBURGER (MOBILE) */}
                <button
                    className="navbar-toggler border-0 m-auto w-100"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDarkDropdown"
                    aria-controls="navbarNavDarkDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                {/* DROPDOWNS */}
                <div className="collapse navbar-collapse" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav space-evenly list-group m-auto w-100 justify-content-evenly" aria-label="craft-filter-bar">
                        {/* DROPDOWN-1 */}
                        <li className="nav-item dropdown" aria-label="craft-terrain-dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="craft-terrain-filter">
                                Type
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink" aria-label="craft-terrain-filter">
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="space" aria-label="space" />
                                    Space
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="ground" aria-label="ground" />
                                    Ground
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="liquid" aria-label="liquid" />
                                    Liquid
                                </li>
                            </ul>
                        </li>
                        {/* DROPDOWN-2 */}
                        <li className="nav-item dropdown" aria-label="craft-size-dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="craft-size-filter">
                                Size
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink" aria-label="craft-size-filter">
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="S" aria-label="small (S)" />
                                    Small
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="M" aria-label="medium (M)" />
                                    Medium
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="L" aria-label="large (L)" />
                                    Large
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="XL" aria-label="x-large (XL)" />
                                    X-Large
                                </li>
                            </ul>
                        </li>
                        {/* DROPDOWN-3 */}
                        <li className="nav-item dropdown" aria-label="craft-occupancy-dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="craft-occupancy-filter">
                                Occupants
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink" aria-label="craft-occupancy-filter">
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="1-10" aria-label="1-10" />
                                    1-10
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="10-15" aria-label="10-15" />
                                    10-15
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="15" aria-label="15+" />
                                    15+
                                </li>
                            </ul>
                        </li>
                        {/* DROPDOWN-4 */}
                        <li className="nav-item dropdown" aria-label="craft-cargo-dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="craft-cargo-filter">
                                Cargo
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink" aria-label="craft-cargo-filter">
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="50" aria-label="50cbm" />
                                    50cbm
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="100" aria-label="100cbm" />
                                    100cbm
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="150" aria-label="150cbm" />
                                    150cbm
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="200" aria-label="200cbm" />
                                    200cbm
                                </li>
                            </ul>
                        </li>
                        {/* DROPDOWN-5 */}
                        <li className="nav-item dropdown" aria-label="craft-range-dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="craft-range-filter">
                                Range
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink" aria-label="craft-range-filter">
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="500" aria-label="500Mmi" />
                                    500Mmi
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="1" aria-label="1Bmi" />
                                    1Bmi
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="2" aria-label="2Bmi" />
                                    2Bmi
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="3" aria-label="3Bmi" />
                                    3Bmi
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="4" aria-label="4Bmi+" />
                                    4Bmi
                                </li>
                            </ul>
                        </li>
                        {/* DROPDOWN-6 */}
                        <li className="nav-item dropdown" aria-label="craft-speed-dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false" aria-label="craft-speed-filter">
                                Speed
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink" aria-label="craft-speed-filter">
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="1" aria-label="1Mmph" />
                                    1Mmph
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="2" aria-label="2Mmph" />
                                    2Mmph
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="3" aria-label="3Mmph" />
                                    3Mmph
                                </li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};