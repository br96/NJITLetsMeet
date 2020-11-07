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

export function Content() {
    const [showProfile, setShowProfile] = React.useState(false);

    function onShowProfileClick(event)
    {
        setShowProfile( (show) => !show );
        event.preventDefault();
    }

    //temporary function to clear the table in EventClass
    function clearEventHistory() {
        Socket.emit("clear event history dev", "");
    }

    return (
        <div>
            <span><button onClick={clearEventHistory}>Clear Event History from database table</button>Refresh after clicking</span>
            <Login />
            <EventHistory />
            <EventForm />
            <button onClick={onShowProfileClick}>Show Profile</button>
            {showProfile && <Profile user={User.current} />}
        </div>
    )
}
