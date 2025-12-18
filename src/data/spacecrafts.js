// spacecraft data
const data = {
    "spacecrafts": [
        {
            "id": 1,
            "name": "shepard",
            "sub_category": "ground",
            "size": "small",
            "max_occupancy": 6,
            "cargo": 60,
            "rating": 5,
            "price": 1453,
            "features": [
                "Multi-terrain mode for travel across all weather types.",
                "Small restroom with sink and toilet",
                "Oxygen and water generation system",
                "Emergency track and rescue system"
            ],
            "description": "A compact, multi-terrain vehicle that excels on both land and air, offering necessary restroom facilities, advanced life-support amenities, and built-in emergency capabilities.",
            "max_range": "90 million",
            "max_speed": 1
        },
        {
            "id": 2,
            "name": "aegis 7",
            "sub_category": "none",
            "size": "medium",
            "max_occupancy": 10,
            "cargo": 80,
            "rating": 4.63,
            "price": 2400,
            "features": [
                "Moderate speed and range",
                "Moderate crew and cargo capacity",
                "Aerial-only operation"
            ],
            "description": "A medium-sized aerial craft balancing speed, range, and crew capacity, ideal for missions that require moderate cargo and passenger loads without ground capability.",
            "max_range": "900 million",
            "max_speed": 2
        },
        {
            "id": 3,
            "name": "tetrapod",
            "sub_category": "ground",
            "size": "medium",
            "max_occupancy": 5,
            "cargo": 90,
            "rating": 4.46,
            "price": 2800,
            "features": [
                "Above medium cargo capacity",
                "Small crew requirement",
                "Land and air capability",
                "Above moderate range",
                "Rough-terrain travel ready"
            ],
            "description": "A versatile medium craft that transports moderate cargo across rough terrain and air, supporting a small crew with extended range for exploratory missions.",
            "max_range": "1 billion",
            "max_speed": 1
        },
        {
            "id": 4,
            "name": "novik",
            "sub_category": "ground",
            "size": "large",
            "max_occupancy": 10,
            "cargo": 100,
            "rating": 4.81,
            "price": 3125,
            "features": [
                "Large cargo plus amenities",
                "Moderate speed with long range",
                "Land and air operation"
            ],
            "description": "A large, long-range ground-air hybrid with ample cargo and crew spaces and onboard amenities, suited for heavy-load missions over vast distances.",
            "max_range": "2 billion",
            "max_speed": 2
        },
        {
            "id": 5,
            "name": "thira",
            "sub_category": "none",
            "size": "large",
            "max_occupancy": 12,
            "cargo": 120,
            "rating": 4.86,
            "price": 7125,
            "features": [
                "Large cargo hold with spacious bathrooms, showers, and kitchen",
                "High speed and range",
                "Four glider bikes included",
                "Research laboratory space",
                "Medical robot included",
                "Armory container including plasma rifles and body armor (8 sets included)"
            ],
            "description": "A top-tier large vessel offering maximum speed, extreme range, extensive cargo, and full-service facilities including labs, medical robots, and an armory, plus four glider bikes and weaponry for off-craft exploration.",
            "max_range": "3.5 billion",
            "max_speed": 3
        },
        {
            "id": 6,
            "name": "liari",
            "sub_category": "aquatic, ground",
            "size": "small",
            "max_occupancy": 4,
            "cargo": 50,
            "rating": 5,
            "price": 1450,
            "features": [
                "Sonar navigation system",
                "Backup life-support system with onboard life perserve suits",
                "Research laboratory space",
                "Phased-array interplanetary telecommunication system",
                "Reinforced zitanium hull"
            ],
            "description": "A small, highly engineered craft built for aquatic and smooth-terrain ground travel, featuring advanced sensing and telecommunication arrays, emergencylife-support, a lab, and a zitanium-reinforced hull.",
            "max_range": "100 million",
            "max_speed": 1
        },
        {
            "id": 7,
            "name": "garrus",
            "sub_category": "aerial, ground",
            "size": "medium",
            "max_occupancy": 6,
            "cargo": 50,
            "rating": 4.89,
            "price": 2050,
            "features": [
                "Hull self-repair system",
                "Automatic long-range turret system",
                "Long-distance scanning and autopilot"
            ],
            "description": "A medium aerial-ground hybrid equipped with autonomous self-repair, a defensive turret, and scanning autopilot for quick, protected trips across varied terrain.",
            "max_range": "1.2 billion",
            "max_speed": 3
        },
        {
            "id": 8,
            "name": "saren",
            "sub_category": "aerial",
            "size": "small",
            "max_occupancy": 4,
            "cargo": 50,
            "rating": 4.94,
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
            "max_speed": 3.5
        },
        {
            "id": 9,
            "name": "ishimaru",
            "sub_category": "aerial",
            "size": "x-large",
            "max_occupancy": 20,
            "cargo": 180,
            "rating": 4.83,
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
            "description": "An extra-large aerial platform offering the highest cargo and passenger capacity, complete with defensive systems, medical and research facilities, autonomous landing, onboard excursion vehicles and more. Perfect for long voyages in dangerous areas.",
            "max_range": "4 billion",
            "max_speed": 2
        },
        {
            "id": 10,
            "name": "naytiba",
            "sub_category": "aerial",
            "size": "small",
            "max_occupancy": 5,
            "cargo": 50,
            "rating": 4.5,
            "price": 1299,
            "features": [
                "Pretty average honestly."
            ],
            "description": "A modest small aerial craft with average performance across speed, range, and cargo, suitable for routine missions.",
            "max_range": "1 billion",
            "max_speed": 1
        }
    ]
}

/*
TEMPLATE
{spacecrafts:
    [
        {
        "id": 1,
        "name": "NameHere",
        "sub_category": "(Ground, Aquatic)",
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