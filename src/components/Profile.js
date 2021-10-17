import React, {useState, useEffect} from 'react';
import { getUser } from '../api';



//when given a token, render getUser as a "side effect" of the profile component. if the token is there, return a greeting (etc), otherwise, tell the user to login into their account
//extract the token into the profile and set the state of user inside of the profile
const Profile = ({token}) => {
    const [user, setUser] = useState([]);
    const [message, setMessage] = useState([])

    // const [messages, setMessages] = useState('');
    // const [userMessages, setUserMessages] = useState('');
    
   

    useEffect(async () => {
        
       const userdata = await getUser(token, setUser);
       console.log('messages:', userdata.data)
       setUser(userdata.data)
       setMessage(userdata.data.messages)
       
       
    }, [token])

  

  
        return (
            <div className="centered">
                <h1> Welcome back, {user.username}!</h1>
                <h3>Inbox:</h3>
                

                {
                    message.map((message, index) => {
                        return (
                                <div key={index}>
                                    <ul >
                                        <li><h3>Post: {message.title}</h3></li>
                                        
                                        <li>Message: {message.content}</li>
                                    </ul>
                                </div> )}
                            )
                        }
                    
        
            </div>
            )
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