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
        if(token) {
       const userdata = await getUser(token, setUser);
       console.log('userdata.data', userdata.data)
       setUser(userdata.data)
       setMessage(userdata.data.messages)
    }
       
    }, [token])

  

  if(token) {
        return (
            <>
        
            <div className="centered">
                <h1> Welcome back, {user.username}!</h1>
                <h3>Inbox:</h3>
                

                {
                    message.map((message, index) => {
                        if (user.username !== message.fromUser.username) {
                        return (
                                <div key={index}>
                                    <ul >
                                        <ul><h4>Post: {message.post.title}</h4></ul>
                                        <ul>Sender: {message.fromUser.username}</ul>
                                        <ul>Message: {message.content}</ul>
                                    </ul>
                                </div> 
                                )}
                                
                              }
                            )
                }        
            </div>

            <div>
                <h3>Sent Messages: </h3>
                {
                    message.map((message, index) => {
                        if (user.username === message.fromUser.username) {
                        return (
                                <div key={index}>
                                    <ul >
                                        <ul><h4>Post: {message.post.title}</h4></ul>
                                        <ul>Sender: Me </ul>
                                        <ul>Message: {message.content}</ul>
                                    </ul>
                                </div> 
                                )}
                                
                              }
                            )
                }        
            </div>
            
            </>
            )} else {
                return(
                    <h3>Please login to view your profile</h3>
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