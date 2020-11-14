import React from 'react';

export function Profile({ user, onClose }) {
  if (user === undefined || user === null || onClose === undefined) return <div />;

  return (
    <div id={user.email} className="profile-overlay" onClick={onClose}>
      <div className="profile-container">
        <button onClick={onClose} className="close-btn">&#10006;</button>
        <img className="profile-picture" src={user.profilePicture} alt="Profile Picture" />
        <div className="profile-info">
          <p>
            Name:
            {user.name}
          </p>
          <p>
            Email:
            {user.email}
          </p>
          <p><br /></p>
          <p>Bio</p>
          <div className="profile-bio">{user.bio}</div>
        </div>
      </div>
    </div>
  );
}
