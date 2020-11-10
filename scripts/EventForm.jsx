import * as React from 'react';
import { Socket } from "./Socket"

export default function EventForm() {


    let eventTypeReference = React.useRef();
    let locationReference = React.useRef();
    let timeReference = React.useRef();
    let descriptionReference = React.useRef();

    function sendNewEvent(e) {
        console.log("Sending new event")
        console.log(eventTypeReference.current.value)
        console.log(locationReference.current.value)
        console.log(timeReference.current.value)
        console.log(descriptionReference.current.value)

        Socket.emit("sending new event", {
            "type": eventTypeReference.current.value,
            "location": locationReference.current.value,
            "time": timeReference.current.value,
            "description": descriptionReference.current.value
        })

        console.log("Sent new event")
        e.preventDefault()
    }

    return (
        <div>
            <form className="event-form" onSubmit={sendNewEvent}>
                <select className="type-select-container" name="event-type" ref={ eventTypeReference }>
                    <option value="Study">Study</option>
                    <option value="Hangout">Hangout</option>
                </select>
                <input className="location-input-container" type="text" placeholder="Enter a location..." ref={ locationReference }/>
                <input className="time-input-container" placeholder="12:00 PM" type="time" min="00:00" max="23:59" ref={ timeReference }/>
                <textarea className="text-area-container" placeholder="Description: Limit to 255 characters" type="text" ref={descriptionReference}/>
                <button className="submit-button" type="submit-button">Submit</button>
            </form>
        </div>
    )
}
