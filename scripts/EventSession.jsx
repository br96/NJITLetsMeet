import * as React from 'react';

export default function EventSession( {type, location, time }) {

    console.log("Type: " + type)
    return (
        <div>
            <p>{type} {location} {time}</p>
        </div>
    )
}
