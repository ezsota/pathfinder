import { useState, useMemo, useEffect } from "react";
import { craftData } from "../data/spacecrafts.js";
import FilterBox from "../components/FilterBox.jsx";
import CraftTile from "../components/CraftTile.jsx";
import { defaultFilter } from "../context/filterContext.js";

export default function CraftListings() {
    const [filters, setFilters] = useState(defaultFilter);

    const [activeFilters, setActiveFilters] = useState([]);
    console.log(activeFilters);

    // Active Filters (no re-render)
    useEffect(() => {
        const newFilters = Object.entries(filters)
            .map(([key, value]) => {
                if (
                    (Array.isArray(value) && value.length > 0) ||
                    (typeof value === 'string' && value.trim() !== '') ||
                    (typeof value === 'number' && value > 0)
                ) {
                    return { key, value };
                }
                return null;
            })
            .filter(Boolean); // remove null/undef values

        setActiveFilters(newFilters);
    }, [filters]);


    const filteredCrafts = useMemo(() => {
        return craftData.spacecrafts.filter(craft => {
            // CATEGORY
            if (
                filters.category.length &&
                !filters.category.some(cat =>
                    craft.category.includes(cat)
                )
            ) {
                return false;
            }

            // SIZE
            if (
                filters.size.length &&
                !filters.size.includes(craft.size)
            ) {
                return false;
            }

            // OCCUPANCY
            if (filters.max_occupancy.length) {
                const matches = filters.max_occupancy.some(occ => {
                    if (occ === "15+") return craft.max_occupancy >= 15;
                    const [min, max] = occ.split("-").map(Number);
                    return craft.max_occupancy >= min && craft.max_occupancy <= max;
                });
                if (!matches) return false;
            }

            // CARGO
            if (
                filters.cargo.length &&
                !filters.cargo.includes(craft.cargo)
            ) {
                return false;
            }

            // RANGE
            if (
                filters.max_range.length &&
                !filters.max_range.includes(craft.max_range)
            ) {
                return false;
            }

            // SPEED
            if (
                filters.max_speed.length &&
                !filters.max_speed.includes(craft.max_speed)
            ) {
                return false;
            }

            return true;
        });
    }, [filters]);

    return (
        <section>
            <h1 className="mt-4 text-center">Available Spacecraft Rentals</h1>

            <FilterBox filters={filters} setFilters={setFilters} activeFilters={activeFilters} />

            <div className="row m-auto px-1 px-md-3 px-lg-5 py-3">
                {filteredCrafts.map(craft => (
                    <CraftTile key={craft.id} craft={craft} />
                ))}
            </div>
        </section>
    );
}
