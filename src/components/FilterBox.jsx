//filter box (make this a rectangle with an image in the background) -> filter list of displayed crafts
// PARENT COMPONENT = pages/CraftListings.jsx

export default function FilterBox(props) {
    console.log('components/FilterBox.jsx loaded')

    // HANDLE FILTER FUNCTION -> CHANGE PROPS.FILTER STATE IN CRAFTLISTINGS.JSX

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
                    <ul className="navbar-nav space-evenly m-auto w-100 justify-content-evenly">
                        {/* DROPDOWN-1 */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Type
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Space</a></li>
                                <li><a className="dropdown-item" href="#">Ground</a></li>
                                <li><a className="dropdown-item" href="#">Liquid</a></li>
                            </ul>
                        </li>
                        {/* DROPDOWN-2 */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Size
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">Small</a></li>
                                <li><a className="dropdown-item" href="#">Medium</a></li>
                                <li><a className="dropdown-item" href="#">Large</a></li>
                                <li><a className="dropdown-item" href="#">X-Large</a></li>
                            </ul>
                        </li>
                        {/* DROPDOWN-3 */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Occupants
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">1-10</a></li>
                                <li><a className="dropdown-item" href="#">10-15</a></li>
                                <li><a className="dropdown-item" href="#">15+</a></li>
                            </ul>
                        </li>
                        {/* DROPDOWN-4 */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Cargo
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">50cbm</a></li>
                                <li><a className="dropdown-item" href="#">100cbm</a></li>
                                <li><a className="dropdown-item" href="#">150cbm</a></li>
                                <li><a className="dropdown-item" href="#">200cbm</a></li>
                            </ul>
                        </li>
                        {/* DROPDOWN-5 */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Range
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">500Mmi</a></li>
                                <li><a className="dropdown-item" href="#">1Bmi</a></li>
                                <li><a className="dropdown-item" href="#">2Bmi</a></li>
                                <li><a className="dropdown-item" href="#">3Bmi</a></li>
                                <li><a className="dropdown-item" href="#">4Bmi</a></li>
                            </ul>
                        </li>
                        {/* DROPDOWN-6 */}
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle border rounded" href="#" id="navbarDarkDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Speed
                            </a>
                            <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="navbarDarkDropdownMenuLink">
                                <li><a className="dropdown-item" href="#">1Mmph</a></li>
                                <li><a className="dropdown-item" href="#">2Mmph</a></li>
                                <li><a className="dropdown-item" href="#">3Mmph</a></li>
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav >
    );
};