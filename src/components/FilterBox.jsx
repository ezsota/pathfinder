//filter box (make this a rectangle with an image in the background) -> filter list of displayed crafts
import { defaultFilter } from "../context/filterContext.js";
import { craftData } from "../data/spacecrafts.js";

// PROPS / PARENT COMPONENT = pages/CraftListings.jsx
export default function FilterBox(props) {
    function clearFilters() {
        props.setFilters(defaultFilter);
    };

    function updateFilter(key, value) {
        props.setFilters(prev => {
            const currentFilters = prev[key];
            let newFilters;

            if (currentFilters.includes(value)) {
                //filter is active - remove it
                newFilters = currentFilters.filter(filter_value => filter_value !== value);
            } else {
                //filter not active - add it
                newFilters = [...currentFilters, value];
            }

            return { ...prev, [key]: newFilters };
        });
    };

    // SORTED FILTER VALUES
    const categoriesSorted = [...new Set(craftData.spacecrafts.map(craft => craft.category))];
    const cargoesUniqueSorted = [...new Set(craftData.spacecrafts.map(craft => craft.cargo))].sort((acc, currVal) => acc - currVal); //sort low to high
    const rangesUniqueSorted = [...new Set( // get unique ranges
        craftData.spacecrafts.map(
            craft => craft.max_range))].sort( // sort low to high
                (acc, currVal) => (currVal > 5) - (acc > 5) || acc - currVal // 500 first then remainders
            );
    const speedsUniqueSorted = [...new Set(craftData.spacecrafts.map(craft => craft.max_speed))].sort();

    return (
        <div className="
            border rounded
            mt-3 mt-md-5 
            mb-md-3 
            mx-1 mx-md-3 mx-lg-5">
            <nav
                className="
                text-center text-white 
                navbar navbar-expand-lg navbar-dark bg-dark 
                rounded-top
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

                            {/* CATEGORIES */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle border rounded" href="#" role="button" data-bs-toggle="dropdown">Type</a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    {categoriesSorted.map(cat => (
                                        <li key={cat} className="dropdown-item">
                                            <input
                                                className="form-check-input me-1"
                                                type="checkbox"
                                                checked={props.filters.category.includes(cat)}
                                                onChange={() => updateFilter("category", cat)}
                                            />
                                            {cat.charAt(0).toUpperCase() + cat.slice(1)}
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
                                                checked={props.filters.size.includes(size)}
                                                onChange={() => updateFilter("size", size)}
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
                                    {["3-10", "10-15", "15+"].map(occs => (
                                        <li key={occs} className="dropdown-item">
                                            <input
                                                className="form-check-input me-1"
                                                type="checkbox"
                                                checked={props.filters.max_occupancy.includes(occs)}
                                                onChange={() => updateFilter("max_occupancy", occs)}
                                            />
                                            {occs}
                                        </li>
                                    ))}
                                </ul>
                            </li>

                            {/* CARGO */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle border rounded" href="#" role="button" data-bs-toggle="dropdown">Cargo</a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    {cargoesUniqueSorted.map(val => (
                                        <li key={val} className="dropdown-item">
                                            <input
                                                className="form-check-input me-1"
                                                type="checkbox"
                                                checked={props.filters.cargo.includes(val)}
                                                onChange={() => updateFilter("cargo", val)}
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
                                    {rangesUniqueSorted.map(val => {
                                        let adjVal;
                                        val > 5 ? adjVal = `${val}Mmi` : adjVal = `${val}Bmi`;

                                        return (
                                            <li key={val} className="dropdown-item">
                                                <input
                                                    className="form-check-input me-1"
                                                    type="checkbox"
                                                    checked={props.filters.max_range.includes(val)}
                                                    onChange={() => updateFilter("max_range", val)}
                                                />
                                                {adjVal}
                                            </li>
                                        )
                                    })
                                    }
                                </ul>
                            </li>

                            {/* SPEED */}
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle border rounded" href="#" role="button" data-bs-toggle="dropdown">Speed</a>
                                <ul className="dropdown-menu dropdown-menu-dark">
                                    {speedsUniqueSorted.map(val => (
                                        <li key={val} className="dropdown-item">
                                            <input
                                                className="form-check-input me-1"
                                                type="checkbox"
                                                checked={props.filters.max_speed.includes(val)}
                                                onChange={() => updateFilter("max_speed", val)}
                                            />
                                            {val}Mmi
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
            {props.activeFilters.length > 0 ? (
                <aside className="d-flex align-items-center justify-content-start">
                    <h3>Filters:</h3>
                    {props.activeFilters.map(({ key, value }) => (
                        <span key={key} className="px-3">
                            {key}: {Array.isArray(value) ? value.join(', ') : String(value)}
                        </span>
                    ))}
                </aside>
            ) : (
                <p className="text-center m-auto py-1">No Active Filters</p>
            )}
        </div>

    );
}
