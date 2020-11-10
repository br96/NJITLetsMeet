import * as React from 'react';
import ExpandedEvent from './ExpandedEvent';

export default function EventSession({owner, title, type, location, time, description }) {
    const [toggle, setToggle] = React.useState(false);

    function toggleExpandedEvent() {
        if (toggle) {
            setToggle(false);
        }
        else {
            setToggle(true);
        }
    }

    return (
        <div className="event-session-container">
            <div className="event-session" onClick={toggleExpandedEvent}>
                {/* <p className="event-type">Type: {type}</p>
                <p className="event-location">Where: {location} </p>
                <p className="event-time">When: {time}</p> */}
                <p>Owner: {owner}</p>
                <p>Title: {title}</p>
            </div>
            {toggle ? <ExpandedEvent type={type} location={location} time={time} description={description}/>:null}
        </div>
    )
}
