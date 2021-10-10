import React, {useState, useEffect} from 'react';
import { getUser } from '../api';


// async function getUserName(token, setUser) {
//     if(token){
//         const userdata = await getUser(token);
//         console.log(userdata);
//         // setUser(userdata);
//      }
// };

const Profile = ({token}) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        getUser(token, setUser)
    }, [token])

  
        return (
            <div className="centered">
                <h1> Welcome back, {user}!</h1> 
            </div>)
        
};

export default Profile;