// spacecraft data
import aegisImg from "../assets/aegis.png";
import kerbalImg from "../assets/kerbal.png";
import tetrapodImg from "../assets/tetrapod.png";
import aranImg from "../assets/aran.png";
import thiraImg from "../assets/thira.png";
import liaraImg from "../assets/liara.png";
import novikImg from "../assets/novik.png";
import sarenImg from "../assets/saren.png";
import ishimuraImg from "../assets/ishimura.png";
import iberisImg from "../assets/iberis.png";
import spireImg from "../assets/spire.png";
import invaderImg from "../assets/invader.png";

export const craftData = {
    "spacecrafts": [
        {
            "id": "ds-1",
            "name": "aegis-7",
            "category": "ground, aerial",
            "size": "small",
            "max_occupancy": 6,
            "cargo": 60,
            "rating": 5,
            "reviewers": 75,
            "price": 1453,
            "features": [
                "Multi-terrain mode for travel across all weather types.",
                "Small restroom with sink and toilet",
                "Oxygen and water generation system",
                "Emergency track and rescue system"
            ],
            "description": "A compact, multi-terrain vehicle that excels on both land and air, featuring retractable wings, rear and underbody propulsion thrusters, single restroom, advanced life-support amenities, and built-in emergency response capabilities.",
            "max_range": "90 million",
            "max_speed": 1,
            "image": aegisImg
        },
        {
            "id": "ksp-2",
            "name": "kerbal",
            "category": "aerial",
            "size": "medium",
            "max_occupancy": 10,
            "cargo": 80,
            "rating": 4.63,
            "reviewers": 92,
            "price": 2400,
            "features": [
                "Moderate speed and range",
                "Moderate crew and cargo capacity",
                "Aerial-only operation"
            ],
            "description": "A medium-sized aerial craft balancing speed, range, and crew capacity, ideal for missions that require moderate cargo and passenger loads without ground capability.",
            "max_range": "900 million",
            "max_speed": 2,
            "image": kerbalImg
        },
        {
            "id": "sb-3",
            "name": "tetrapod",
            "category": "ground, aerial",
            "size": "medium",
            "max_occupancy": 5,
            "cargo": 90,
            "rating": 4.46,
            "reviewers": 48,
            "price": 2800,
            "features": [
                "Above medium cargo capacity",
                "Small crew requirement",
                "Land and air capability",
                "Above moderate range",
                "Rough-terrain travel ready"
            ],
            "description": "A versatile medium craft that transports moderate cargo across rough terrain and air, featuring retractable 360-degree propulsion thrusters, supporting a small crew with extended range for exploratory missions.",
            "max_range": "1 billion",
            "max_speed": 1,
            "image": tetrapodImg
        },
        {
            "id": "mp-4",
            "name": "aran",
            "category": "ground, aerial",
            "size": "large",
            "max_occupancy": 10,
            "cargo": 100,
            "rating": 4.81,
            "reviewers": 71,
            "price": 3125,
            "features": [
                "Large cargo plus amenities",
                "Moderate speed with long range",
                "Land and air operation"
            ],
            "description": "A large, long-range ground-air hybrid with ample cargo capacity, crew spaces, onboard amenities, and air lift suspension suited for heavy-load missions over vast distances.",
            "max_range": "2 billion",
            "max_speed": 2,
            "image": aranImg
        },
        {
            "id": "dm-5",
            "name": "thira",
            "category": "ground, aerial",
            "size": "large",
            "max_occupancy": 12,
            "cargo": 120,
            "rating": 4.86,
            "reviewers": 60,
            "price": 7125,
            "features": [
                "Large cargo hold with spacious bathrooms, showers, and kitchen",
                "High speed and range",
                "Four glider bikes included",
                "Research laboratory space",
                "Medical robot included",
                "Armory container including plasma rifles and body armor (8 sets included)"
            ],
            "description": "A top-tier large craft offering light-duty terrain wheels, maximum speed, extreme range, extensive cargo, and full-service facilities including labs, medical robots, and an armory, plus four glider bikes and weaponry for off-craft exploration.",
            "max_range": "3.5 billion",
            "max_speed": 3,
            "image": thiraImg
        },
        {
            "id": "me-6",
            "name": "liara",
            "category": "aquatic, ground, aerial",
            "size": "small",
            "max_occupancy": 4,
            "cargo": 50,
            "rating": 5,
            "reviewers": 42,
            "price": 1450,
            "features": [
                "Sonar navigation system",
                "Backup life-support system with onboard life perserve suits",
                "Research laboratory space",
                "Phased-array interplanetary telecommunication system",
                "Reinforced zitanium hull"
            ],
            "description": "A small, highly engineered craft built for aquatic and smooth-terrain ground travel, featuring advanced sensors and telecommunication arrays, emergency life-support, a lab, and a zitanium-reinforced hull.",
            "max_range": "100 million",
            "max_speed": 1,
            "image": liaraImg
        },
        {
            "id": "dm-7",
            "name": "novik",
            "category": "ground, aerial",
            "size": "medium",
            "max_occupancy": 6,
            "cargo": 50,
            "rating": 4.89,
            "reviewers": 33,
            "price": 2050,
            "features": [
                "Hull self-repair system",
                "Automatic long-range turret system",
                "Long-distance scanning and autopilot"
            ],
            "description": "A medium aerial-ground hybrid equipped with autonomous self-repair, a retractable defensive turret, and scanning autopilot for quick trips across varied terrain.",
            "max_range": "1.2 billion",
            "max_speed": 3,
            "image": novikImg
        },
        {
            "id": "me-8",
            "name": "saren",
            "category": "aerial",
            "size": "small",
            "max_occupancy": 4,
            "cargo": 50,
            "rating": 4.94,
            "reviewers": 29,
            "price": 3050,
            "features": [
                "Speed-tuned engine",
                "Thrust vectoring for extreme aerial maneuvers",
                "Advanced flight control system",
                "Advanced collision avoidance system",
                "Reinforced frame for extreme structural stress",
                "Low-weight, high-thrust design for rapid direction changes"
            ],
            "description": "A nimble small aerial craft optimized for speed and agility, with thrust vectoring, robust collision avoidance, and a reinforced frame for high-stress maneuvers. Must have special qualifications to rent.",
            "max_range": "50 million",
            "max_speed": 3.5,
            "image": sarenImg
        },
        {
            "id": "ds-9",
            "name": "ishimura",
            "category": "ground, aerial",
            "size": "x-large",
            "max_occupancy": 20,
            "cargo": 180,
            "rating": 4.83,
            "reviewers": 17,
            "price": 15500,
            "features": [
                "Maximum cargo and occupancy",
                "Auto-defense shields and turrets",
                "Spacious bathrooms and bed racks",
                "Auto take-off and landing system",
                "Medical room",
                "Research lab",
                "Long-distance telecommunications",
                "Robochef and kitchenette",
                "Two excursion vehicles (holds 2 persons, 2 scout drones, and small storage)",
                "Armory includes plasma rifles, body armor, and long-range scout drones (10 each)",
                "Specialized warp drive system for emergency use (1 time use)",
                "Backup emergency engine (reduces travel speed and power to amenities while in use)",
                "Reinforced zitanium hull"
            ],
            "description": "An extra-large aerial platform offering the highest cargo and passenger capacity, complete with defensive systems, medical and research facilities, autonomous landing, light-duty terrain travel, onboard excursion vehicles and more. Perfect for long voyages in dangerous areas.",
            "max_range": "4 billion",
            "max_speed": 2,
            "image": ishimuraImg
        },
        {
            "id": "sb-10",
            "name": "iberis",
            "category": "aerial",
            "size": "small",
            "max_occupancy": 5,
            "cargo": 50,
            "rating": 4.5,
            "reviewers": 106,
            "price": 1299,
            "features": [
                "Pretty average honestly."
            ],
            "description": "A modest small aerial craft with average performance across speed, range, and cargo, suitable for routine navigation.",
            "max_range": "1 billion",
            "max_speed": 1,
            "image": iberisImg
        },
        {
            "id": "mp-11",
            "name": "spire",
            "category": "liquid, ground, aerial",
            "size": "small",
            "max_occupancy": 4,
            "cargo": 50,
            "rating": 5,
            "reviewers": 28,
            "price": 10200,
            "features": [
                "Sonar navigation system",
                "Backup life-support system with onboard life perserve suits",
                "Research laboratory space",
                "Phased-array interplanetary telecommunication system",
                "Reinforced insulated zitanium hull",
                "Extreme temperature suppression system",
                "Specialized propulsion system",
                "Melt and fire resistance components"
            ],
            "description": "A small, highly engineered craft built for extremely high temperature terrain, featuring advanced sensors and telecommunication arrays, emergency life-support, a lab, and a zitanium-reinforced insulated hull with temperature management.",
            "max_range": "100 million",
            "max_speed": 1,
            "image": spireImg
        },
        {
            "id": "zim-12",
            "name": "invader",
            "category": "aerial",
            "size": "small",
            "max_occupancy": 5,
            "cargo": 50,
            "rating": 4.7,
            "reviewers": 166,
            "price": 1999,
            "features": [
                "Moderate range and speed performance upgrades"
            ],
            "description": "A nimble small aerial craft with above average performance across speed, range, and cargo, suitable for simple but routine but agile navigation.",
            "max_range": "900 million",
            "max_speed": 2,
            "image": invaderImg
        }
    ]
};

/*
TEMPLATE
{spacecrafts:
    [
        {
        "id": 1,
        "name": "NameHere",
        "category": "(Ground, Aquatic)",
        "size": "(small/medium/large)",
        "occupancy":
            -small  -> 4-6 persons (4-6 people, basic supplies, and a small bathroom)
            -medium -> 6-10 persons (6-10 people, more cargo, larger restroom, and additional equipment)
            -large -> 10-12 persons (10-15 people, substantial cargo space, multiple restrooms, and extensive supplies/equipment),
        "cargo": 
            -small  -> 60 cubic meters
            -medium -> 80 cubic meters
            -large -> 100 cubic meters,
        "rating": (1-5 stars),
        "price": ($$/month),
        "features": ["feature one", "feature two", "feature three"],
        "description": "Description here",
        "max_range": 
            -short -> ~93 million miles (150 million km) (sun to earth)
            -moderate -> ~889 million miles (1.4 billion km) (sun to saturn)
            -far -> ~3.7 billion miles / 5.9 billion km (39 AU) (sun to pluto),
        "max_speed": 
            -slow -> ~1 million miles/hour (earth-sun in 3 days)
            -moderate -> ~2 million miles/hour
            -fast -> ~3 million miles/hour (mMPH) (sun-pluto in 30 days)
        }
    ]
}
*/