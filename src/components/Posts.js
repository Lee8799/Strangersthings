import React, { useState, useEffect } from 'react';
import { makeHeaders, fetchPosts, getPostWithID, deletePost, messageUser } from '../api';
import { useHistory } from 'react-router-dom';


const Posts = ({token}) => {
    const [posts, setPosts] = useState([]);
    const history = useHistory();
   

    function backtoProfile() {
        history.push("/profile");
      };

    console.log('posts: ', posts);
    


useEffect(() => {
    fetchPosts(token, setPosts)

}, [token]);


// useEffect(() => {
    
//     getPostWithID(token, postID, setPost)
// },[token, postID, setPost]);
    
        return (
            <div>
                    <div>
                        <h2>Current Listings</h2>
                    </div>
                            <ul className="otherPosts">
                                {
                                    posts.map((post, idx) => 
                                    <div key={idx}>
                                        <h3>{post.title}</h3>
                                        <p>Description: {post.description}</p>
                                        <li>Price: {post.price}</li>
                                        <li>Seller: {post.author.username}</li> 
                                        <ul> { post.isAuthor ? 
                                            <button
                                                onClick={async () => {
                                                    const postID = post._id;
                                                    const result = await deletePost(token, post._id);
                                                    alert(`Delete ${result.success? 'successful!' : 'unsuccessful - try again!'}`);
                                                    backToProfile();
                                                        }}
                                                className="deleteButton">
                                                    Delete
                                            </button>
                                                :   
                                            
                                            <button
                                                onClick={async () => {
                                                    history.push(`/singlepost/${post._id}`);
                                                }}
                                                className="toSinglePost">
                                                Send Message
                                            </button>
                                     }
                                        </ul>
                                        </div>
                                        )
                                    } 
                                        </ul>
                     </div>
                  
   )
}




export default Posts;



