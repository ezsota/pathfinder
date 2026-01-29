import { useAuth } from "../context/AuthContext";
import profAvatar from "../assets/profile_avatar.svg";

export default function ProfileItems() {
    console.log('components/ProfileItems.jsx loaded')

    const { user } = useAuth();

    return (
        <section>
            <img src={profAvatar} className="img-thumbnail" id="prof-image" alt="User profile avatar" />
            <ul className="list-unstyled profile-list">
                <li><strong>Id:</strong> {user.id}</li>
                <li><strong>Email:</strong> {user.email}</li>
            </ul>
        </section>

    );
};