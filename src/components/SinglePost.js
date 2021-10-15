import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { messageUser, getPostWithID } from '../api';



const SinglePost = ({token, match, onePost, setOnePost}) => {
    const {postID} = useParams();
//   const [message, setMessage] = useState('');

  

    useEffect(async() => {
    
    console.log(postID)
    const post = await getPostWithID(token, postID);
    console.log(post)
      setOnePost(post);
      
    }, [])

 
 
   return (
        <>
        <div>
            {onePost.title}
        </div>
        {/* <form
            onSubmit={async (event) => {
                event.preventDefault();
                const postID = post._id;
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
        </form> */}
   </> )
}



export default SinglePost; 