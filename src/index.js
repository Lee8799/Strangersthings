
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom';

import { Login, Profile } from './components';






const App = () => {
    const [token, setToken] = useState(null); //we need to put token state here because it will be used throughout the entire app//
                                            //we can use setToken as a prop in the navbar div because we are rendering routeProps//
    useEffect(() => {
        console.log("Mounted")
        //now we need to get the token from local storage and use it to log in
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
        }
    }, [])
return ( 
<BrowserRouter>
    <div id="container">

        <div id="navbar">
            <Link to="/login"> Login </Link>
            <Link to="/register"> Register </Link>
            <Link to="/profile">Your Profile</Link>
            <Route path="/login" render={(routeProps) => <Login {...routeProps} setToken={setToken} />}/> 
            <Route path="/register" render={(routeProps) => <Login {...routeProps} setToken={setToken} />} />
            <Route path="/profile" render={(routeProps) => <Profile token={token} {...routeProps} />} />
        </div>

    </div>
</BrowserRouter>
)
    // useState pairs here//
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);

// const App = () => {
//     const [posts, setPosts] = useState([]);
//     console.log('posts: ', posts);

//     useEffect(() => {
//         const fetchPosts = async () => {
//             const response = await fetch('https://strangers-things.herokuapp.com/api/2107-CSU-RM-WEB-PT/posts');
//             const data = await response.json();
//             setPosts(data.data.posts);
//             console.log('data: ', data.data.posts);
//         }
//         fetchPosts();
//     }, [])

//     return <>
//     <div>
//         Hello World
//     </div>

//     {
//         posts.map((post, idx) => <div key={idx}>
//             <h3>{post.title}</h3>
//             <p>Description: {post.description}</p>
//             <li>Price: {post.price}</li>
//             <li>Seller: {post.author.username}</li>
//         </div>)
//     }
//     </>
// }







