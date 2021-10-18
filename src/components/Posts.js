import React, { useState, useEffect } from 'react';
import { makeHeaders, fetchPosts, getPostWithID, deletePost, messageUser } from '../api';
import { useHistory } from 'react-router-dom';
import SearchBar from './SearchBar';


const Posts = ({token, postsDisplay, setPostsDisplay}) => {
    const [posts, setPosts] = useState([]);
    const history = useHistory();

   

    function backtoProfile() {
        history.push("/profile");
      };

    console.log('posts: ', posts);
    


useEffect(() => {
    fetchPosts(token, setPosts)
}, [token]);




    
        return (
            <div>
                    <div>
                        <span className="searchbar">Search Listings: <SearchBar postsDisplay={postsDisplay} setPostsDisplay={setPostsDisplay} /></span>
                        
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
                                        { token? 
                                                <ul>
                                                    { post.isAuthor ? 
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
                                    </ul> : null }
                                </div>
                                            )} 
                            </ul>
                     </div>
                  
   )
}




export default Posts;



