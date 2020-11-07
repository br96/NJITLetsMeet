import React from 'react';

export function ShowButton({ onClick, comp })
{
    const [showProfile, setShowProfile] = React.useState(false);

    function onShowProfileClick(event)
    {
        setShowProfile( (show) => !show );
        if(onClick !== undefined) onClick(event, showProfile);
        
        event.preventDefault();
    }

    return (
    <div>
        <button onClick={onShowProfileClick}>Show Profile</button>
        {showProfile && comp}
    </div>
    );
}
