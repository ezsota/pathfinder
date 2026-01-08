// user details page: name, username, email, password, address, active rentals (make all editable)

import ProfileItems from "../components/ProfileItems.jsx";

export default function UserProfile() {
    console.log('pages/UserProfile.jsx loaded')

    return (
        <header>
            <h1 className="border-bottom pb-4">User Profile</h1>
            <ProfileItems />
        </header>
    );
};