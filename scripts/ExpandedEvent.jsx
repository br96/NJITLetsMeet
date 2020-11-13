import * as React from 'react';

export default function ExpandedEvent({type, location, time, description }) {
    return (
        <div className="expanded-event">
            <h1>Type: {type}</h1>
            <h3>Location: {location}</h3>
            <h3>Time: {time}</h3>
            <h4>Details: {description}</h4>
        </div>
    )
}
