/*
    React context provides global user authentication state:
        - allows logon status
        - blocks access (ProtectedRoute)
        - filter/display reservations by user/id

    crypto.randomUUID() -> uses the "crypto" module (native JS), using the "randomUUID" method, to simulate a real world user id creation.

    {children} -> built-in React prop allowing pass/access to external nested data -> used here to pass the user data to the app for routing/rendering
    AuthProvider is wraps around <BrowserRouter> in index.jsx to allows authenticaton management logic to be accessed across the app using AuthContext below
*/

// AuthContext manages authentication state (ID Database) | ProtectedRoute manages routing decisions (Security Gatekeeper) -> separate responsibilites

import { useState, useEffect, createContext, useContext } from "react";

// Empty container for auth data:
const AuthContext = createContext(null);

export function AuthProvider({ children }) {
    console.log('AuthProvider({ children }) loaded');

    // Re-render triggered on state change -> AuthContext.Provider updates -> AuthContext updates
    const [user, setUser] = useState(null);

    useEffect(() => {
        // Check for stored user on page loads, persists on reloads
        const storedUser = localStorage.getItem("user");
        if (storedUser) {
            setUser(JSON.parse(storedUser));
        }
    }, []);

    const login = (email) => {
        // Creates/Stores user using email and crypto
        const userData = { id: crypto.randomUUID(), email };
        localStorage.setItem("user", JSON.stringify(userData));
        setUser(userData);
    };

    const logout = () => {
        localStorage.removeItem("user");
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

// Export authentication data to other components (better reusability and encapsulation):
export const useAuth = () => useContext(AuthContext);