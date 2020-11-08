import React from 'react';

export function ProfileInfo({user})
{
    return (
    <div className="profile-info">
        <p>Name: {user.name}</p>
        <p>Email: {user.email}</p>
        <p><br/></p>
        <p>Bio</p>
        <div className="profile-bio">{user.bio}</div>
    </div>
    );
}
