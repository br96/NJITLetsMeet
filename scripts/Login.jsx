import React from 'react'
import { GoogleLogin } from 'react-google-login';
import { Socket } from "./Socket";
import {User} from "./User";
import { useHistory } from 'react-router-dom';

export default function Login( {userID} ) {
    const history = useHistory();

    const onSuccess = (response) => {
        console.log('[Login Sucess] currentUser:', response.profileObj);
        console.log('[Login Sucess] currentUser:', response.profileObj.email);
        console.log('[Login Sucess] currentUser:', response.profileObj.imageUrl);

        Socket.emit("oauth to server", {
            "userID": {userID}.userID,
            "imgurl": response.profileObj.imageUrl,
            "name": response.profileObj.name,
            "email": response.profileObj.email,
            "socketID":  Socket.id
        });

        Socket.emit("google login", {
            token: response.getAuthResponse().id_token
        });

        let profile = response.getBasicProfile();
        User.current = new User(
            profile.getName(),
            profile.getEmail(),
            profile.getImageUrl(),
        );

        history.push("/home");
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
        <div className="google-login-page">
            <div className="login-container">
                <img className="highlander" src="https://a4.espncdn.com/combiner/i?img=%2Fi%2Fteamlogos%2Fncaa%2F500%2F2885.png" alt=""/>
                <GoogleLogin
                    clientId='163716708396-talgj01aee74s8l35iv4opmpac915v0g.apps.googleusercontent.com'
                    // clientId='338963299857-ljp88d5pm444n5g7f18ocek5k0olah9d.apps.googleusercontent.com' // Brian's
                    render={renderProps => (
                        <button className="login-button" onClick={renderProps.onClick} disabled={renderProps.disabled}>LOGIN</button>
                    )}
                    buttonText="Login"
                    onSuccess={ onSuccess }
                    onFailure={ onFailure }
                    cookiePolicy={ 'single_host_origin' }
                    isSignedIn={ true }
                    // hostedDomain="njit.edu"
                    />
            </div>
        </div>
    )
}
