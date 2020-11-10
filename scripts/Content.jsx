import * as React from 'react';
import {Socket} from './Socket';
import "./style.css"
import Login from "./Login"
import EventForm from "./EventForm";
import EventHistory from "./EventHistory";
import { User } from "./User";
import { Profile } from "./ProfilePage/Profile";
import { ProfileOverlay } from "./ProfilePage/ProfileOverlay";
import NavBar from "./NavBar";

export function Content() {
    const [showProfile, setShowProfile] = React.useState(false);

    //temporary function to clear the table in EventClass
    function clearEventHistory() {
        Socket.emit("clear event history dev", "");
    }

    function onProfileClose()
    {
        setShowProfile(false);
    }

    return (
        <div className="content-container">
            <NavBar />
            <button className="profile-button" onClick={() => setShowProfile(!showProfile)}>Show Profile</button>
            {showProfile && <ProfileOverlay user={User.current} onClose={onProfileClose} />}
            <div className="event-content-container">
                <EventHistory />
                <EventForm />
            </div>
        </div>
    )
}
