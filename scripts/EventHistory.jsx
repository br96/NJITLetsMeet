import * as React from 'react';
import { Socket } from './Socket';
import EventSession from "./EventSession"

export default function EventHistory() {
    const [events, setEvents] = React.useState([
        {
            "type": "Study",
            "location": "Library"
        },
        {
            "type": "Hangout",
            "location": "Ramen Gami Rip"
        }]);

    function getEventHistory() {
        Socket.on("emit all events", updateEventHistory);
        return () => {
            Socket.off("emit all events", updateEventHistory)
        }
    }

    function updateEventHistory(data) {
        console.log("Received event " + data["location"])
        console.log(events);
    }

    getEventHistory();

    return (
        <div>
            { events.map((event, index) => (
                <EventSession key={index} type={ event.type } location={ event.location } />
                // console.log(event.location)
                // <p>{event.type} {event.location}</p>
            ))}
        </div>
    )
}
