/*
=============================
Mental Model for localStorage
==============================
localStorage = {
  users: { [email]: user },
  reservations: Reservation[],
  currentUserEmail: string
}
*/
import { useState, useEffect, createContext, useContext } from "react";

// Auth data container
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    console.log('AuthProvider({ children }) loaded');

    // Authed user state
    const [user, setUser] = useState(null);
    // Historic users container || fallback
    const users = JSON.parse(localStorage.getItem(("users")) || "{}");

    // Check if account exists (email)
    useEffect(() => {
        // Get current email string
        const sessionEmail = localStorage.getItem("currentUserEmail");
        //if emails match set to historic user || fallback^
        if (sessionEmail && users[sessionEmail]) {
            setUser(users[sessionEmail]);
        }
    }, []);

    const login = (email) => {
        let userData;

        if (users[email]) {
            userData = users[email];
        } else {
            userData = { id: crypto.randomUUID(), email };
            users[email] = userData;
            localStorage.setItem("users", JSON.stringify(users));
        }

        localStorage.setItem("currentUserEmail", email);
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("currentUserEmail");
        setUser(null);
    };

    const deleteUsr = () => {
        if (!user) return;
        const email = user.email;
        // User
        const users = JSON.parse(localStorage.getItem("users")) || {};
        delete users[email];
        localStorage.setItem("users", JSON.stringify(users));
        // User Reservation
        const storedReservations = JSON.parse(localStorage.getItem("reservations")) || [];
        const updatedReservations = storedReservations.filter(res => res.email !== user.email);
        localStorage.setItem("reservations", JSON.stringify(updatedReservations));
        // End session
        logout();

        //logs
        console.log(email);
        console.log(users);
        console.log(storedReservations);
        console.log(updatedReservations);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, deleteUsr }}>
            {children}
        </AuthContext.Provider>
    );
};

// Export authentication data to other components (better reusability and encapsulation):
export const useAuth = () => useContext(AuthContext);


/*
==================
REACT/ROUTER NOTES
===================
    React context provides global user authentication state:
        - allows logon status
        - blocks access (ProtectedRoute)
        - filter/display reservations by user/id

    -crypto.randomUUID() -> uses the "crypto" module (native JS), using the "randomUUID" method, to simulate a real world user id creation.
    -{children} -> built-in React prop allowing pass/access to external nested data -> used here to pass the user data to the app for routing/rendering
    -AuthProvider wraps around <BrowserRouter> in index.jsx to allows authenticaton management logic to be accessed across the app using AuthContext
    -AuthContext manages authentication state (ID Database) | ProtectedRoute manages routing decisions (Security Gatekeeper) -> separate responsibilites
    -usrData change triggers re-render -> AuthContext.Provider/AuthContext update
*/