import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { Socket } from "./Socket";

import {User} from "./User";

export default function Login( {userID} ) {
    const onSuccess = (response) => {
        console.log('[Login Sucess] currentUser:', response.profileObj);
        console.log('[Login Sucess] currentUser:', response.profileObj.email);
        console.log('[Login Sucess] currentUser:', response.profileObj.imageUrl);

        Socket.emit("oauth to server", {
            "userID": {userID}.userID,
            "imgurl": response.profileObj.imageUrl,
            "name": response.profileObj.email,
        });

        Socket.emit("google login", {
            token: response.getAuthResponse().id_token
        });
    }

    React.useEffect(() => {
        Socket.on("successful login", (data) => {
            User.current = new User(
                data.name,
                data.email,
                data.profile_picture,
                data.bio
            );
        });
    }, []);

    const onFailure = (response) => {
        console.log('[Login Failed] response:', response);
    }

    return (
        <div className="google-login">
            <GoogleLogin
                clientId='163716708396-talgj01aee74s8l35iv4opmpac915v0g.apps.googleusercontent.com'
                render={renderProps => (
                    <button onClick={renderProps.onClick} disabled={renderProps.disabled}>LOGIN</button>
                  )}
                buttonText="Login"
                onSuccess={ onSuccess }
                onFailure={ onFailure }
                cookiePolicy={ 'single_host_origin' }
                isSignedIn={ false }
                hostedDomain="njit.edu"
            />
        </div>
    )
}
