import React, {useState, useEffect} from 'react';
import { getUser } from '../api';


//when given a token, render getUser as a "side effect" of the profile component. if the token is there, return a greeting (etc), otherwise, tell the user to login into their account
//extract the token into the profile and set the state of user inside of the profile
const Profile = ({token}) => {
    const [user, setUser] = useState("");

    useEffect(() => {
        getUser(token, setUser)
    }, [token])

  if (token) {
        return (
            <div className="centered">
                <h1> Welcome back, {user}!</h1> 

                <h2>Messages:</h2>
            </div>)
  } else {
      return (
          <h1>Please login to view profile.</h1>
      )
  }
        
};

export default Profile;