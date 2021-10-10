
import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link, useHistory } from 'react-router-dom';

import { Login, Profile, Posts } from './components';
import { getUser, logout } from './api';



const App = () => {
    const [token, setToken] = useState(null); //we need to put token state here because it will be used throughout the entire app//
    const [user, setUser] = useState({});
    
    //we can use setToken as a prop in the navbar div because we are rendering routeProps//

    //*** checks to see if there is token in local storage ***//
    useEffect(() => {
        console.log("Mounted")
        //now we need to get the token from local storage and use it to log in
        const storedToken = localStorage.getItem("token");
        if (storedToken) {
            setToken(storedToken);
            getUser(storedToken, setUser);
        }
    }, [token])


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
            <p>
            <Link to="/profile"> Profile </Link>
            <Link to="/posts"> Current Listings </Link>
            </p>
        </div>  
            <Route path="/posts" render={(routeProps) => <Posts {...routeProps} setToken={setToken} />}/>
            <Route path="/login" render={(routeProps) => <Login {...routeProps} setToken={setToken} setUser={setUser} />}/> 
            <Route path="/register" render={(routeProps) => <Login {...routeProps} setToken={setToken} setUser={setUser} />} />
            
            <Route path="/profile" render={(routeProps) => <Profile token={token} {...routeProps} />} />
            <Route exact path="/" render={(routeProps) => token ? <Profile token={token} {...routeProps}/> : <Login {...routeProps} setToken={setToken} />} />
        

    </div>
</BrowserRouter>
)
   
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
);









