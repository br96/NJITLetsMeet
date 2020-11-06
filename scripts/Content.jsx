import * as React from 'react';
import "./App.css";
import Login from "./Login"
import Profile from "./Profile"
import EventForm from "./EventForm"
import EventHistory from "./EventHistory"
// Chris Villamayor
// Luis Chiang
// Changjun Lee.
export function Content() {
    return (
        <div>
            <Login />
            <EventHistory />
            <EventForm />
        </div>
    );
}
