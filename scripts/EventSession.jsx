import * as React from 'react';

export default function EventSession( {type, location }) {

    console.log("Type: " + type)
    return (
        <div>
            <p>{type} {location}</p>
        </div>
    )
}
