import React from 'react';

import {ProfileInfo} from "./ProfileInfo";
export function ProfileContainer({user, onClose})
{
    return (
    <div className="profile-container">
        <div className="profile-content-container">
            <button onClick={onClose} className="close-btn">&#10006;</button>
            <img className="profile-picture" src={user.profilePicture} alt="Profile Picture"/>
            <ProfileInfo user={user} />
        </div>
    </div>
    );
}
