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
                    <ul className="navbar-nav space-evenly list-group m-auto w-100 justify-content-evenly">
                        {/* DROPDOWN-1 */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Type
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    Space
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    Ground
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    Liquid
                                </li>
                            </ul>
                        </li>
                        {/* DROPDOWN-2 */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Size
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    Small
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    Medium
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    Large
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    X-Large
                                </li>
                            </ul>
                        </li>
                        {/* DROPDOWN-3 */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Occupants
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    1-10
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    10-15
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    15+
                                </li>
                            </ul>
                        </li>
                        {/* DROPDOWN-4 */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cargo
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    50cbm
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    100cbm
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    150cbm
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    200cbm
                                </li>
                            </ul>
                        </li>
                        {/* DROPDOWN-5 */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Range
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    500Mmi
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    1Bmi
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    2Bmi
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    3Bmi
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    4Bmi
                                </li>
                            </ul>
                        </li>
                        {/* DROPDOWN-6 */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Speed
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    1Mmph
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
                                    2Mmph
                                </li>
                                <li className="dropdown-item">
                                    <input className="form-check-input me-1" type="checkbox" value="" aria-label="..." />
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