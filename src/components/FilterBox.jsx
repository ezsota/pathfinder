//filter box (make this a rectangle with an image in the background) -> filter list of displayed crafts
// PARENT COMPONENT = pages/CraftListings.jsx

import { defaultFilter } from "../context/filterContext.js";

export default function FilterBox({ filters, setFilters }) {
    function clearFilters() {
        setFilters(defaultFilter);
    };

    function toggleFilter(key, value) {
        setFilters(prev => {
            const exists = prev[key].includes(value);

            return {
                ...prev,
                [key]: exists
                    ? prev[key].filter(val => val !== value)
                    : [...prev[key], value],
            };
        });
    }

    return (
        <nav
            className="
            mt-3 mt-md-5 
            mb-md-3 
            mx-1 mx-md-3 mx-lg-5 
            text-center text-white 
            navbar navbar-expand-lg navbar-dark bg-dark 
            rounded
            "
        >
            <div className="container-fluid">
                {/* HAMBURGER (MOBILE) */}
                <button
                    className="navbar-toggler border-0 m-auto w-100"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavDarkDropdown"
                    aria-controls="navbarNavDarkDropdown"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon"></span>
                </button>

                {/* DROPDOWNS */}
                <div className="collapse navbar-collapse w-100" id="navbarNavDarkDropdown">
                    <ul className="navbar-nav list-group m-auto w-100 justify-content-evenly gap-2 gap-md-0">

                        {/* TYPE */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" role="button" data-bs-toggle="dropdown">Type</a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                {["off-road", "soft-road", "liquid", "aerial", "space"].map(type => (
                                    <li key={type} className="dropdown-item">
                                        <input
                                            className="form-check-input me-1"
                                            type="checkbox"
                                            checked={filters.category.includes(type)}
                                            onChange={() => toggleFilter("category", type)}
                                        />
                                        {type.charAt(0).toUpperCase() + type.slice(1)}
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* SIZE */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" role="button" data-bs-toggle="dropdown">Size</a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                {["S", "M", "L", "XL"].map(size => (
                                    <li key={size} className="dropdown-item">
                                        <input
                                            className="form-check-input me-1"
                                            type="checkbox"
                                            checked={filters.size.includes(size)}
                                            onChange={() => toggleFilter("size", size)}
                                        />
                                        {size}
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* OCCUPANTS */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" role="button" data-bs-toggle="dropdown">Occupants</a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                {["1-10", "10-15", "15+"].map(range => (
                                    <li key={range} className="dropdown-item">
                                        <input
                                            className="form-check-input me-1"
                                            type="checkbox"
                                            checked={filters.max_occupancy.includes(range)}
                                            onChange={() => toggleFilter("max_occupancy", range)}
                                        />
                                        {range}
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* CARGO */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" role="button" data-bs-toggle="dropdown">Cargo</a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                {[50, 100, 150, 200].map(val => (
                                    <li key={val} className="dropdown-item">
                                        <input
                                            className="form-check-input me-1"
                                            type="checkbox"
                                            checked={filters.cargo.includes(val)}
                                            onChange={() => toggleFilter("cargo", val)}
                                        />
                                        {val}cbm
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* RANGE */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" role="button" data-bs-toggle="dropdown">Range</a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                {[500, 1, 2, 3, 4].map(val => (
                                    <li key={val} className="dropdown-item">
                                        <input
                                            className="form-check-input me-1"
                                            type="checkbox"
                                            checked={filters.max_range.includes(val)}
                                            onChange={() => toggleFilter("max_range", val)}
                                        />
                                        {val}
                                    </li>
                                ))}
                            </ul>
                        </li>

                        {/* SPEED */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" role="button" data-bs-toggle="dropdown">Speed</a>
                            <ul className="dropdown-menu dropdown-menu-dark">
                                {[1, 2, 3].map(val => (
                                    <li key={val} className="dropdown-item">
                                        <input
                                            className="form-check-input me-1"
                                            type="checkbox"
                                            checked={filters.max_speed.includes(val)}
                                            onChange={() => toggleFilter("max_speed", val)}
                                        />
                                        {val}
                                    </li>
                                ))}
                            </ul>
                        </li>
                    </ul>
                    {/* FILTER CLEAR */}
                    <button className="btn bg-darkred red-hover text-white m-auto w-25" id="clear-filters-btn" onClick={clearFilters}>Clear Filters</button>
                </div>
            </div>
        </nav>
    );
}
