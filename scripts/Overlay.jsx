import React from 'react';

export function Overlay({overlayId, onClose, component})
{
    return (
    <div id={overlayId} className="overlay" onClick={onClose}>
        {component}
    </div>
    );
}
