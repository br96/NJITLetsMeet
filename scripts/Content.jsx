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
import { ShowButton } from "./ShowButton";

export function Content() {
    const [showButtonComp, setShowButtonComp] = React.useState(<div/>);

    //temporary function to clear the table in EventClass
    function clearEventHistory() {
        Socket.emit("clear event history dev", "");
    }

    function onShow()
    {
        setShowButtonComp(<Profile user={User.current} />);
    }

    return (
        <div>
            <span><button onClick={clearEventHistory}>Clear Event History from database table</button>Refresh after clicking</span>
            <Login />
            <EventHistory />
            <EventForm />
            <ShowButton onClick={onShow} comp={showButtonComp} />
        </div>
    )
}
