import React, {useState, useEffect} from 'react';
import { getUser, fetchPosts, getPostWithID } from '../api';



//when given a token, render getUser as a "side effect" of the profile component. if the token is there, return a greeting (etc), otherwise, tell the user to login into their account
//extract the token into the profile and set the state of user inside of the profile
const Profile = ({token}) => {
    const [user, setUser] = useState("");
    const [posts, setPosts] = useState([]);
    const [message, setMessage] = useState([]);

    useEffect(() => {
        getUser(token, setUser)
    }, [token])

    useEffect(() => {
        getPostWithID(token, match.params.postID, setPosts)
    }, [token, match.params.postID])

   {
        return (
            <div className="centered">
                <h1> Welcome back, {user}!</h1> 
                <h3>Your messages:</h3>
                
                </div>
            )
            }
  }

                    
                    
//         if (token) {
//                             return (
//                                 <div>
//                                     <h2>Your Listings:</h2>
//                                         <ul className="myPosts"> 
//                                             {
//                                                 posts.map((post, idx) => 
//                                                     <div key={idx}>
//                                                         <h3>{post.title}</h3>
//                                                         <p>Description: {post.description}</p>
//                                                         <li>Price: {post.price}</li>
//                                                         <li>Seller: {post.author.username}</li>
//                                                     </div>)
//                                             }
//                                         </ul>
//                                 </div>)
//                                 }
           
            
//   } 

export default Profile;