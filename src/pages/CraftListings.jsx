// Displays CraftTile per crafts in craftData.js

import { craftData } from "../data/spacecrafts.js";
import FilterBox from "../components/FilterBox.jsx";
import CraftTile from "../components/CraftTile.jsx";

export default function CraftListings() {

    // FILTER STATE GOES HERE

    return (
        <section>
            <header>
                <h1 className="mt-4 text-center">Available Spacecraft Rentals</h1>
            </header>
            {/* PASS FILTER STATE TO FILTERBOX */}
            <FilterBox />
            <div className="row px-1 px-md-3 px-lg-5 py-3">
                
                {/* Display Filtered */}
                {/* Filter logic goes here */}

                {/* Display All */}
                {craftData.spacecrafts.map(craft => (
                    <CraftTile
                        key={craft.id}
                        craft={craft}
                    />
                ))}
            </div>
        </section>
    );
};