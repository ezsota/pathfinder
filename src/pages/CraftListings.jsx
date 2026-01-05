// Displays CraftTile per crafts in craftData.js

import { craftData } from "../data/spacecrafts.js";
import CraftTile from "../components/CraftTile.jsx";

export default function CraftListings() {
    return (
        <section>
            <header>
                <h1>Available Spacecraft Rentals</h1>
            </header>
            <div className="row">
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