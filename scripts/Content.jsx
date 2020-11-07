import * as React from 'react';

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

    return (
        <div>
            <Login />
            <EventHistory />
            <EventForm />
            <button onClick={onShowProfileClick}>Show Profile</button>
            {showProfile && <Profile user={User.current} />}
        </div>
    )
}
