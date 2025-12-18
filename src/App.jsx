import { useState } from 'react';

export default function App() {


  return (
    <main>
      <h1>PATHFINDER</h1>
    </main>
  )
};

/*
=========
APP FLOW
=========
Landing:
1) Public users visit Home -> browse CraftListings -> view CraftDetails (use id) -> click CTA/Reserve Now btn

Authorization gate:
2a) User not authed? redirect to UserLogin (preserve craft id) -> redirect to NewReservation
2b) User authed ? direct to NewReservation

Creation:
3) NewReservation rendered -> Finalize then click Confirm reservation button -> create a reservation object (to be added to ReservationList)

Post-Creation:
4) redirect to UserLayout-> Reservations (ReservationsList component inside containing reservation objects)
*/