import React, { useState, useEffect } from 'react';

import { makeHeaders, fetchPosts, getPostWithID, deletePost } from '../api';





//fetch posts using the makeHeaders function, which requires a token, and which gives this fetch call the token as authorization. 
//take that data, parse it, and let dataposts be equal to data.data.posts.
//set the state of posts using dataposts



//post component//
//requires token to be rendered, so extract that token and set the state of posts inside of the post component
const Posts = ({token, loggedIn, postID, history}) => {
    const [posts, setPosts] = useState([]);

    console.log('posts: ', posts);
    
//FETCH POSTS//
//*** makes a call for posts when token available ***//
//as a "side effect" of the token being available, fetch the posts and set those to state 
//then return the listings

useEffect(() => {
    fetchPosts(token, setPosts)
    
}, [token]);


// useEffect(() => {
    
//     getPostWithID(token, postID, match.params.postID, setPosts);
// },[token, match.params.postID]);
    
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
                                                    history.push('/posts')
                                                        }}
                                                className="deleteButton">
                                                    Delete
                                            </button>
                                        : null }
                                        
                                        </ul></div>
                                        )
                                    } 
                                        </ul>
                     </div>
                  
   )
}




export default Posts;



