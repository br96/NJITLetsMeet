import React from 'react'
import { Socket } from './Socket';

export default function EventHistory() {
    const [events, setEvents] = React.useState([{}]);

    function getEventHistory() {
        Socket.on("emit all events", updateEventHistory)
    }

    function updateEventHistory(data) {
        console.log("Received event " + data["location"])
    }

    getEventHistory();

    return (
        <div>

        </div>
    )
}
