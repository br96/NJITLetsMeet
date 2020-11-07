import * as React from 'react';
import ExpandedEvent from './ExpandedEvent';

export default function EventSession({type, location, time }) {
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
        <div>
            <p className="event-session" onClick={toggleExpandedEvent}>{type} {location} {time}</p>
            {toggle ? <ExpandedEvent type={type} location={location} time={time}/>:null}
        </div>
    )
}
