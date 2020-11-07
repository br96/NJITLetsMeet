import React from 'react'

export function Profile({ user }) {
    let content = <div/>;
    
    if(user !== null) 
    {
        content = (
            <div className="profile-container">
                <div>
                    <img src={user.profilePicture} alt="Profile Picture"/>
                    <p>Name: {user.name}</p>
                    <p>Email: {user.email}</p>
                    <p>Bio: {user.bio}</p>
                </div>
            </div>
        );
    }

    return content;
}