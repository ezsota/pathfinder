// user details page: name, username, email, password, address, active rentals (make all editable)

import ProfileItems from "../components/ProfileItems.jsx";

export default function UserProfile() {
    return (
        <header>
            <h1 className="border-bottom pb-4 text-center">User Profile</h1>
            <ProfileItems />
        </header>
    );
};