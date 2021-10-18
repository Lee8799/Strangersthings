import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { messageUser, getPostWithID } from '../api';



const SinglePost = ({token, match, onePost, setOnePost}) => {
    const {postID} = useParams();
    const [message, setMessage] = useState('');
//   const [message, setMessage] = useState('');

  

    useEffect(async() => {
    
    console.log(postID)
    const post = await getPostWithID(token, postID);
    console.log('this is the post:', post)
      setOnePost(post);
      
    }, [])

    
 
   return (
        <>
   
        <div>
            <h3>{onePost.title}</h3>
            {/* <h4>{onePost.author.username}</h4> */}
            <h5>{onePost.description}</h5>
            <h4>{onePost.price}</h4>
            
        </div>
                    {token ?
                    <form
                        onSubmit={async (event) => {
                            event.preventDefault();
                            const result = await messageUser(token, postID, message);
                            alert(`Message ${result.success ? 'sent' : 'not sent'}`);
                            setMessage('');
                        }}>
                        <textarea
                            type="text"
                            placeholder='your message here'
                            autoFocus
                            required
                            id="message"
                            value={message}
                            onChange={({ target: { value } }) => setMessage(value)
                            } />
                        <p><button
                            className="sendMessage">
                            Send Message
                        </button></p>
                    </form>
                    : <h3>Please login or create an account to message seller.</h3> }

   </> )
}



export default SinglePost; 