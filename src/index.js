
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, useHistory } from 'react-router-dom';

import { Login, Profile } from './components';
import { getUser, logout } from './api';



const App = () => {
    const [token, setToken] = useState(null); //we need to put token state here because it will be used throughout the entire app//
    const [user, setUser] = useState({
        username:""
    });                                        //we can use setToken as a prop in the navbar div because we are rendering routeProps//
    useEffect(() => {
        console.log("Mounted")
        //now we need to get the token from local storage and use it to log in
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            getUser(token, setUser);
        }
    }, [])
return ( 
<BrowserRouter>
    <div id="container">
        <div id="title">
        <Link to="/profile">STRANGERS' THINGS</Link>
        </div>

        <div id="navbar">
            <Link to="/login"> Login </Link>
            <Link to="/register"> Register </Link>
            <span 
            id="logoutbutton"
            onClick={() => {
                alert('See you next time!')
                logout(setToken);
            }} > Logout </span>
            <Link to="/profile"> Profile </Link>
            <Route path="/login" render={(routeProps) => <Login {...routeProps} setToken={setToken} setUser={setUser} />}/> 
            <Route path="/register" render={(routeProps) => <Login {...routeProps} setToken={setToken} setUser={setUser} />} />
           
            <Route path="/profile" render={(routeProps) => <Profile token={token} {...routeProps} />} />
            <Route exact path="/" render={(routeProps) => token ? <Profile token={token} {...routeProps}/> : <Login {...routeProps} setToken={setToken} />} />
        </div>

    </div>
</BrowserRouter>
)
   
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







