import * as React from 'react';
import "./App.css";
import Login from "./Login"
import Profile from "./Profile"
import EventForm from "./EventForm"
import EventHistory from "./EventHistory"

export function Content() {
    return (
        <div>
            <Login />
            <EventForm />
            <EventHistory />
        </div>
    );
}
