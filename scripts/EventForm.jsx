import * as React from 'react';
import { Socket } from "./Socket"

export default function EventForm() {


    let eventTypeReference = React.useRef();
    let locationReference = React.useRef();
    let timeReference = React.useRef();

    function sendNewEvent(e) {
        console.log("Sending new event")
        console.log(eventTypeReference.current.value)
        console.log(locationReference.current.value)
        console.log(timeReference.current.value)

        Socket.emit("sending new event", {
            "type": eventTypeReference.current.value,
            "location": locationReference.current.value,
            "time": timeReference.current.value
        })

        console.log("Sent new event")
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={sendNewEvent}>
                <select name="event-type" ref={ eventTypeReference }>
                    <option value="Study">Study</option>
                    <option value="Hangout">Hangout</option>
                </select>
                <input type="text" placeholder="Enter a location..." ref={ locationReference }/>
                <input placeholder="12:00 PM" type="time" min="00:00" max="23:59" ref={ timeReference }/>
                <button type="submit-button">Submit</button>
            </form>
        </div>
    )
}
