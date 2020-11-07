import * as React from 'react';
import "./App.css";
import Login from "./Login"
import Profile from "./Profile"
import EventForm from "./EventForm"
import EventHistory from "./EventHistory"
import { Socket } from './Socket';

// Chris Villamayor
// Luis Chiang
// Changjun Lee.
export function Content() {

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
        </div>
    )
}
