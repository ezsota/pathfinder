// Displays CraftTile per crafts in craftData.js

import { craftData } from "../data/spacecrafts.js";
import CraftTile from "../components/CraftTile.jsx";

export default function CraftListings() {
    console.log('pages/CraftListings.jsx loaded');

    return (
        <section>
            <header>
                <h1>Available Spacecraft Rentals</h1>
            </header>
            <div className="row px-1 px-md-3 px-lg-5 py-3">
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