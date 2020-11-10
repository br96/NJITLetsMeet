import React from 'react';

import {Overlay} from "../Overlay"; 
import {ProfileContainer} from "./ProfileContainer";
export function ProfileOverlay({user, onClose})
{
    const comp = <ProfileContainer user={user} onClose={onClose} />;

    return (
    <Overlay overlayId={user.email} onClose={onClose} component={comp} />
    );
}
