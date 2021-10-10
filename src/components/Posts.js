import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { makeHeaders } from '../api';



//fetch posts using the makeHeaders function, which requires a token, and which gives this fetch call the token as authorization. 
//take that data, parse it, and let dataposts be equal to data.data.posts.
//set the state of posts using dataposts

async function fetchPosts(token, setPosts) {
    try{
        const response = await fetch('https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts', {
            headers: makeHeaders(token)
        }) 
    const data = await response.json();
    const dataposts = data.data.posts;
    setPosts(dataposts);
    console.log('data: ', data.data.posts);
}catch (error){
    console.error(error)
}
}

//post component//
//requires token to be rendered, so extract that token and set the state of posts inside of the post component
const Posts = ({token}) => {
    const [posts, setPosts] = useState([]);

    console.log('posts: ', posts);
    
//FETCH POSTS//
//*** makes a call for posts when token available ***//
//as a "side effect" of the token being available, fetch the posts and set those to state 
//then return the listings

useEffect(() => {
    fetchPosts(token, setPosts)
}, [token]);

    return (<>
    <div>
        <h2>Current Listings</h2>
        
    </div>

    {
        posts.map((post, idx) => <div key={idx}>
            <h3>{post.title}</h3>
            <p>Description: {post.description}</p>
            <li>Price: {post.price}</li>
            <li>Seller: {post.author.username}</li>
        </div>)
    }
    </>
    )
}

export default Posts;



