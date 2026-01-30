import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import profAvatar from "../assets/profile_avatar.svg";

export default function ProfileItems() {
    console.log('components/ProfileItems.jsx loaded');

    const navigate = useNavigate();
    const { user, deleteUsr } = useAuth();

    const verifyTerm = "delete my account";
    const [usrCheck, setUsrCheck] = useState("");
    const [displayVerification, setDisplayVerification] = useState(false);

    function handleConfirmDelete() {
        if (usrCheck === verifyTerm) {
            deleteUsr();
            navigate("/");
        }
    };

    return (
        <section>
            <img src={profAvatar} className="img-thumbnail" id="prof-image" alt="User profile avatar" />
            <ul className="list-unstyled profile-list">
                <li><strong>Id:</strong> {user.id}</li>
                <li><strong>Email:</strong> {user.email}</li>
            </ul>
            <button className="btn btn-danger" onClick={() => setDisplayVerification(true)}>Delete Account</button>
            {displayVerification && (
                <aside className="mt-5 p-3 border border-danger bg-lightred" id="verify-box">
                    <p>To verify deletion, please type: <strong>delete my account</strong></p>
                    <input type="text" maxLength={17} value={usrCheck} onChange={(event) => setUsrCheck(event.target.value)}/>
                    <button className="btn btn-danger m-2" onClick={handleConfirmDelete} disabled={usrCheck !== verifyTerm}>Confirm Deletion</button>
                </aside>
            )}
        </section>

    );
};