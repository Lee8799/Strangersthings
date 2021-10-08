import React, {useState, useEffect} from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import { getUser } from '../api';

const Profile = ({token, history}) => {
    const [user, setUser] = useState(token);

    useEffect(() => {
        if(token){
            getUser(token, setUser);
        }

    }, [token])

    if(token){
        return (
            <div className="centered">
                <h1> Welcome back, {user}! </h1> 
            </div>)
        

} else {
    return (
            <h2>
            Please login to see your profile
            </h2>
    )
}
};

export default Profile;