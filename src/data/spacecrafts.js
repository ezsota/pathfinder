// spacecraft details.

/*
JSON Object:
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
            -small -> ~93 million miles (150 million km) (sun to earth)
            -medium -> ~889 million miles (1.4 billion km) (sun to saturn)
            -large -> ~3.7 billion miles / 5.9 billion km (39 AU) (sun to pluto),
        "max_speed": 
            -small -> ~1 million miles/hour (earth-sun in 3 days)
            -medium -> ~2 million miles/hour
            -large -> ~3 million miles/hour (mMPH) (sun-pluto in 30 days)
        }
    ]
}


{spacecrafts:
    [
        {
        "id": 1,
        "name": "shepard",
        "sub_category": "ground",
        "size": "small",
        "min_occupancy": "4",
        "max_occupancy": "6",
        "cargo": "60",
        "rating": "5",
        "price": "1,453",
        "features": ["Multi-terrain mode for travel across all weather types.", "Large restroom with shower, sink, and toilet", "Air and water filtration and generation system", "Emergency response system"],
        "description": "Shepard is a cutting-edge spacecraft engineered for versatility and adaptability across various environments. This innovative vehicle seamlessly transitions between flight and ground travel, making it ideal for a wide range of missions, from scientific expeditions to exploration of new frontiers.",
        "max_range": "90",
        "max_speed": "1"
        }
    ]
}
*/
