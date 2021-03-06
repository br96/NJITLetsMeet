import * as React from 'react';
import EventForm from './EventForm';
import EventHistory from './EventHistory';
import { User } from './User';
import { ProfileOverlay } from './ProfilePage/ProfileOverlay';
import NavBar from './NavBar';
import './App.css';
import Landing from "./Landing"

export function Content() {
  const [showProfile, setShowProfile] = React.useState(false);

  function onProfileClose() {
    setShowProfile(false);
  }

  return (
    <div className="content-container">
      <NavBar />
      <button type="button" className="profile-button" onClick={() => setShowProfile(!showProfile)}>Show Profile</button>
      {showProfile && <ProfileOverlay user={User.current} onClose={onProfileClose} />}
      <div className="event-content-container">
        <EventHistory />
        <EventForm />
      </div>
    </div>
  );
}
