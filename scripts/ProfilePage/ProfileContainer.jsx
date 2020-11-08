import React from 'react';

export function ProfileContainer({user, onClose})
{
    return (
    <div className="profile-container">
        <button onClick={onClose} className="close-btn">&#10006;</button>
        <img src={user.profilePicture} alt="Profile Picture"/>
        <div className="profile-info">
            <p>Name: {user.name}</p>
            <p>Email: {user.email}</p>
            <p><br/></p>
            <p>Bio</p>
            <div className="profile-bio">{user.bio}</div>
        </div>
    </div>
    );
}
