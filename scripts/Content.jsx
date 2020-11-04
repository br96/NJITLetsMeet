import * as React from 'react';
import "./App.css";
import Login from "./Login"
import Profile from "./Profile"

export function Content() {
    return (
        <div>
            <Login />
            <Profile />
        </div>
    );
}
