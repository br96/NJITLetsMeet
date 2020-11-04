import React from 'react'

export default function Profile({ profilePicture, fullname, email, bio}) {
    return (
        <div className="profile-container">
            <img src="#" alt="Profile Picture"/>
            <p>Name: @Default Name@</p>
            <p>Email: @Default Email</p>
            <p>Bio: @Default Bio</p>
        </div>
    )
}
