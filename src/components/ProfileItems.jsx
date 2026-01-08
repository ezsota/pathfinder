import { useAuth } from "../context/AuthContext";

export default function ProfileItems() {
    console.log('components/ProfileItems.jsx loaded')

      const { user } = useAuth();
    
    return (
        <ul className="list-unstyled profile-list">
            <li><strong>Id:</strong> {user.id}</li>
            <li><strong>Email:</strong> {user.email}</li>
        </ul>
    );
};