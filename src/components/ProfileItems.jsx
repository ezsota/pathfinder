import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import profAvatar from "../assets/profile_avatar.svg";

export default function ProfileItems() {
    const navigate = useNavigate();
    const { user, deleteUsr } = useAuth();

    const verifyTerm = "delete my account";
    const [usrInput, setUsrInput] = useState("");
    const [displayVerifyBox, setDisplayVerifyBox] = useState(false);

    function handleConfirmDelete() {
        if (usrInput === verifyTerm) {
            deleteUsr();
            navigate("/");
        }
    };

    function handleCancelDelete() {
        setUsrInput("");
        setDisplayVerifyBox(false);
    };

    return (
        <section className="text-center">
            <img src={profAvatar} className="img-thumbnail" id="prof-image" alt="User profile avatar" />
            <ul className="list-unstyled profile-list">
                <li><strong>Id:</strong> {user.id}</li>
                <li><strong>Email:</strong> {user.email}</li>
            </ul>
            <button className="btn btn-danger" onClick={() => setDisplayVerifyBox(true)}>Delete Account</button>
            {displayVerifyBox && (
                <aside className="mt-5 p-3 border border-danger bg-lightred" id="verify-box">
                    <p>To confirm deletion, please type: <strong>delete my account</strong></p>
                    <input type="text" maxLength={17} value={usrInput} onChange={(event) => setUsrInput(event.target.value)}/>
                    <button className="btn btn-danger m-2" onClick={handleConfirmDelete} disabled={usrInput !== verifyTerm}>Confirm Deletion</button>
                    <button className="btn btn-success m-2" onClick={handleCancelDelete}>Cancel Deletion</button>
                </aside>
            )}
        </section>

    );
};