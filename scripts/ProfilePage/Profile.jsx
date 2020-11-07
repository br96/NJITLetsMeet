import React from 'react'

export function Profile({ user }) {
    let content = <div/>;
    
    if(user !== null) 
    {
        content = (
            <div className="profile-overlay">
                <div className="profile-container">
                    <img src={user.profilePicture} alt="Profile Picture"/>
                    <div className="profile-info">
                        <p>Name: {user.name}</p>
                        <p>Email: {user.email}</p>
                        <p><br/></p>
                        <p>Bio</p>
                        <div className="profile-bio">{user.bio}</div>
                    </div>
                </div>
            </div>
        );
    }

    return content;
}