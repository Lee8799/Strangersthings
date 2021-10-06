import React, {useState, useEffect} from 'react';
import { getUser } from '../api';

const Profile = ({token}) => {
    const [user, setUser] = useState({});

    useEffect(() => {
        if(token){
            getUser(token, setUser);
        }

    }, [token])

}

export default Profile;