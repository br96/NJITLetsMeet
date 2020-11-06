import * as React from 'react';
import { Socket } from './Socket';
import EventSession from "./EventSession"

export default function EventHistory() {
    const [eventTypes, setEventTypes] = React.useState([]);
    const [eventLocations, setEventLocations] = React.useState([]);
    const [eventTimes, setEventTimes] = React.useState([]);

    function getEventHistory() {
        Socket.on("emit all events", updateEventHistory);
        return () => {
            Socket.off("emit all events", updateEventHistory)
        }
    }

    function updateEventHistory(data) {
        setEventTypes(data["all_event_types"])
        setEventLocations(data["all_event_locations"])
        setEventTimes(data["all_event_times"])
    }

    getEventHistory();

    return (
        <div>
            { eventTypes.map((eventType, index) => (
                <EventSession key={index} type={ eventType } location={ eventLocations[index]} time={ eventTimes[index]} />
                // console.log(event.location)
                // <p>{event.type} {event.location}</p>
            ))}
        </div>
    )
}
