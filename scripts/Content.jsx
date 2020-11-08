import * as React from 'react';
import {Socket} from './Socket';

// Chris Villamayor
// Luis Chiang
// Changjun Lee.

import "./App.css";
import Login from "./Login"
import EventForm from "./EventForm";
import EventHistory from "./EventHistory";
import { User } from "./User";
import { Profile } from "./ProfilePage/Profile";
import { ProfileOverlay } from "./ProfilePage/ProfileOverlay";

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
        <div>
            <span><button onClick={clearEventHistory}>Clear Event History from database table</button>Refresh after clicking</span>
            <Login />
            <EventHistory />
            <EventForm />
            <button onClick={() => setShowProfile(!showProfile)}>Show Profile</button>
            {showProfile && <ProfileOverlay user={User.current} onClose={onProfileClose} />}
        </div>
    )
}
