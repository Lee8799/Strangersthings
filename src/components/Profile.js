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

  if (token) {
        return (
            <div className="centered">
                <h1> Welcome back, {user}!</h1> 
            </div>)
  } else {
      return (
          <h1>Please login to view profile</h1>
      )
  }
        
};

export default Profile;