// spacecraft data
import chiefImg from "../assets/chief.webp";
import kerbalImg from "../assets/kerbal.webp";
import tetrapodImg from "../assets/tetrapod.webp";
import aranImg from "../assets/aran.webp";
import thiraImg from "../assets/thira.webp";
import liaraImg from "../assets/liara.webp";
import novikImg from "../assets/novik.webp";
import sarenImg from "../assets/saren.webp";
import ishimuraImg from "../assets/ishimura.webp";
import iberisImg from "../assets/iberis.webp";
import spireImg from "../assets/spire.webp";
import invaderImg from "../assets/invader.webp";

export const craftData = {
    "spacecrafts": [
        {
            "id": "hl-1",
            "name": "chief",
            "category": "off-road, space",
            "size": "S",
            "max_occupancy": 6,
            "cargo": 60,
            "rating": 5,
            "reviewers": 75,
            "price": 3453,
            "features": [
                "Retractable wings for land travel",
                "Rear and underbody thrusters",
                "Multi-terrain drivetrain",
                "Rugged chassis design",
                "Modular cargo space",
                "Autonomous track and rescue software",
                "Emergency oxygen supply system",
                "Water generation system",
                "Reinforced armor plating",
                "On-board power generator",
                "Combat armor and rifle (x6)",
            ],
            "description": "A multi-purpose spacecraft, built like a warthog, and essentially indestructable no matter what you do to it.",
            "max_range": 500,
            "range_unit": "Mmi",
            "max_speed": 1,
            "image": chiefImg
        },
        {
            "id": "ksp-2",
            "name": "kerbal",
            "category": "aerial, space",
            "size": "M",
            "max_occupancy": 10,
            "cargo": 80,
            "rating": 4.63,
            "reviewers": 92,
            "price": 3500,
            "features": [
                "Emergency stealth technology",
                "Multi-spectrum sensors",
                "Observatory deck",
                "Robust communication systems",
                "Autonomous navigation capabilities",
                "Automatic take-off/landing",
                "Autonomous pilot crew"
            ],
            "description": "A medium-sized space craft, with balanced features, ideal for safe trips across civilized space.",
            "max_range": 1,
            "range_unit": "Bmi",
            "max_speed": 2,
            "image": kerbalImg
        },
        {
            "id": "dm-3",
            "name": "thira",
            "category": "soft-road, aerial, space",
            "size": "L",
            "max_occupancy": 15,
            "cargo": 120,
            "rating": 4.86,
            "reviewers": 60,
            "price": 7125,
            "features": [
                "Large cargo hold",
                "Spacious lavatories and washrooms",
                "Moderate sleeping quarters",
                "Exploration gliders (x4)",
                "Clinic with RoboMedic",
                "Research laboratory",
                "Moderately equipped armory",
                "Kitchenette with RoboChef",
                "On-board RepairBot"
            ],
            "description": "A large craft offering light-duty terrain travel outfitted with amenities to explore infinity and beyond.",
            "max_range": 3.5,
            "range_unit": "Bmi",
            "max_speed": 3,
            "image": thiraImg
        },
        {
            "id": "mp-4",
            "name": "aran",
            "category": "soft-road, aerial, space",
            "size": "L",
            "max_occupancy": 10,
            "cargo": 100,
            "rating": 4.81,
            "reviewers": 71,
            "price": 6125,
            "features": [
                "Large cargo hold",
                "Mini lavatories and washrooms",
                "Capsule sleeping quarters",
                "Moderate range with high speed",
                "Air lift suspension",
                "Auto defense system",
                "Specialized onboard computer system",
                "Ammo generation system",
                "Mini-armory"
            ],
            "description": "A long-range ground-air hybrid suited for high cargo missions over slightly uneven terrain.",
            "max_range": 3,
            "range_unit": "Bmi",
            "max_speed": 3,
            "image": aranImg
        },
        {
            "id": "sb-4",
            "name": "tetrapod",
            "category": "off-road, space",
            "size": "M",
            "max_occupancy": 5,
            "cargo": 90,
            "rating": 4.46,
            "reviewers": 48,
            "price": 4800,
            "features": [
                "Retractable 360-degree thrusters",
                "All-terrain drivetrain and components",
                "On-board RepairBot",
                "Single-person lavatory",
                "Capsule sleeping quarters",
                "Water generation system",
                "Combat ready exploration suits (x3)",
                "Long-distance, roof deployable, scout drone"
            ],
            "description": "A versatile medium craft to transport moderate cargo and personnel across rough terrain on exploratory missions.",
            "max_range": 500,
            "range_unit": "Mmi",
            "max_speed": 1,
            "image": tetrapodImg
        },
        {
            "id": "me-6",
            "name": "liara",
            "category": "liquid, aerial, space",
            "size": "S",
            "max_occupancy": 4,
            "cargo": 50,
            "rating": 5,
            "reviewers": 42,
            "price": 10200,
            "features": [
                "Sonar scanner",
                "Auto collision avoidance",
                "Phased-array telecom system",
                "Backup life-support system",
                "Climatic diving suits (x3)",
                "Climatic exploration suits (x3)",
                "Mini research laboratory",
                "Reinforced zitanium hull with insulation",
                "Advanced thermal regulation system",
                "Environment adjustable propulsion system",
                "Corrosion and frost resistant components"
            ],
            "description": "A highly engineered craft, built for extremely low temperature, high pressure, liquid exploration.",
            "max_range": 500,
            "range_unit": "Mmi",
            "max_speed": 1,
            "image": liaraImg
        },
        {
            "id": "dm-7",
            "name": "novik",
            "category": "off-road, aerial, space",
            "size": "M",
            "max_occupancy": 6,
            "cargo": 50,
            "rating": 4.89,
            "reviewers": 33,
            "price": 4050,
            "features": [
                "Autonomous hull repair",
                "Retractable autocannons",
                "Cruise speed autopilot",
                "High speed navigation assistance system",
                "Extremely long distance scanner",
                "All-terrain drivetrain"
            ],
            "description": "A space-ground hybrid equipped with autonomous features for varied terrain.",
            "max_range": 1.2,
            "range_unit": "Bmi",
            "max_speed": 3,
            "image": novikImg
        },
        {
            "id": "me-8",
            "name": "saren",
            "category": "aerial, space",
            "size": "S",
            "max_occupancy": 4,
            "cargo": 50,
            "rating": 4.94,
            "reviewers": 29,
            "price": 3050,
            "features": [
                "Extreme performance tuned engine",
                "Thrust vectoring system",
                "Reflexive steering feedback",
                "Advanced collision avoidance",
                "Reinforced Zero-G frame",
                "Low-weight components",
                "High-thrust direction changing"
            ],
            "description": "A small craft optimized for speed, agility, and high-stress maneuvers.",
            "max_range": 500,
            "range_unit": "Mmi",
            "max_speed": 3.5,
            "image": sarenImg
        },
        {
            "id": "ds-9",
            "name": "ishimura",
            "category": "soft-road, aerial, space",
            "size": "XL",
            "max_occupancy": 20,
            "cargo": 200,
            "rating": 4.83,
            "reviewers": 17,
            "price": 15500,
            "features": [
                "Highly spacious cargo and occupancy capacity",
                "Automatic combat system",
                "Guided take-off and landing system",
                "Spacious lavatories and sleeping quarters",
                "On-board clinic with RoboMedic",
                "Fully equipped research lab",
                "Extremely long-distance telecom system",
                "On-board kitchen with RoboChefs",
                "Excursion vehicles (x2)",
                "Fully equipped armory",
                "Emergency warp drive system",
                "Backup low-speed egnine",
                "Reinforced zitanium hull with insulation",
                "On-board RepairBot"
            ],
            "description": "A top-tier extra-large craft offering the most space and amenities, suited for long voyages across unexplored deep space.",
            "max_range": 4,
            "range_unit": "Bmi",
            "max_speed": 2,
            "image": ishimuraImg
        },
        {
            "id": "sb-10",
            "name": "iberis",
            "category": "off-road, space",
            "size": "L",
            "max_occupancy": 10,
            "cargo": 110,
            "rating": 4.96,
            "reviewers": 58,
            "price": 7100,
            "features": [
                "Large cargo hold",
                "Retractable flight wings",
                "Height adjustable offroad suspension",
                "Dual lavatories and washrooms",
                "Capsule sleeping quarters",
                "Compact exploration gliders (x2)",
                "On-board RoboMedic, RepairBot, and RoboSentry",
                "Mini research laboratory",
                "Moderately equipped armory",
                "Emergency power and water generator",
                "Roof deployable scout drone",
                "Temperature control system",

            ],
            "description": "A large and rugged craft offering heavy-duty terrain travel outfitted with amenities to explore off the beaten path.",
            "max_range": 2,
            "range_unit": "Bmi",
            "max_speed": 2,
            "image": iberisImg
        },
        {
            "id": "mp-11",
            "name": "spire",
            "category": "liquid, aerial, space",
            "size": "S",
            "max_occupancy": 4,
            "cargo": 50,
            "rating": 5,
            "reviewers": 28,
            "price": 10200,
            "features": [
                "Sonar scanner",
                "Auto collision avoidance",
                "Phased-array telecom system",
                "Backup life-support system",
                "Climatic survival suits (x6)",
                "Mini research laboratory",
                "Reinforced zitanium hull with insulation",
                "Advanced thermal regulation system",
                "Environment adjustable propulsion system",
                "Heat and flame resistant components"
            ],
            "description": "A highly engineered craft, built for extremely high temperature and high pressure exploration.",
            "max_range": 500,
            "range_unit": "Mmi",
            "max_speed": 1,
            "image": spireImg
        },
        {
            "id": "zim-12",
            "name": "invader",
            "category": "aerial, space",
            "size": "S",
            "max_occupancy": 4,
            "cargo": 50,
            "rating": 4.7,
            "reviewers": 166,
            "price": 1999,
            "features": [
                "Speed tuned thrusters",
                "Long-distance data antenna",
                "Moderate cargo capacity",
                "Smart steering haptics",
                "Enhanced maneuverability",
                "Razberry CraftPlay"
            ],
            "description": "A small and nimble craft with enhanced features suitable for routine trips requiring agile navigation.",
            "max_range": 500,
            "range_unit": "Mmi",
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
        "category": "(Ground, Liquid)",
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