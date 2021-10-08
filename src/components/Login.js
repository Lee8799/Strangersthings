import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BASE_URL } from '../constants';

async function login(userName, passWord, setToken) {
    //pass these to API, and get back a token
    //save token in user's browser
    //update state 
const response = await fetch(BASE_URL + 'users/login', {
    method: "POST",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    user: {
        username: userName,
        password: passWord
          }
        })
    })
      
        const result = await response.json();
        console.log(result);
        const token = result.data.token;
        setToken(token);
        localStorage.setItem("token", token);
}


async function register(setToken, userName, passWord, confirmPassword) {
if (passWord !== confirmPassword) {
    alert("Passwords don't match");
    return;
    }
        const response = await fetch(BASE_URL + 'users/register', {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            user: {
            username: userName,
            password: passWord
            }
        })
        })  
        const result = await response.json();
        console.log(result);
        const token = result.data.token;
        setToken(token);
        localStorage.setItem("token", token);
        
}

//match here is a variable of routeProps, and setToken is a prop that we added//
const Login = ({ setToken, match }) => {
    
    const [userName, setUsername] = useState("your username");
    const [passWord, setPassword] = useState("your password");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <form
        onSubmit={(event) => {
            event.preventDefault();
            if (match.url === "/register") register(setToken, userName, passWord, confirmPassword)
            if (match.url === "/login") login(userName, passWord, setToken)
            
        }}
        >
            {/*USERNAME*/}
        <div className="container">
            <label className="form-label">
                Username
            </label>
            <input
                type="text"
                value={userName}
                onChange={({target: {value}}) => setUsername(value)}
                className="form-control"
                id="usernameInput"
                placeholder="your username here"
                />
        </div>
            {/*PASSWORD*/}
        <div className="container">
            <label className="form-label">
                Password
            </label>
            <input
                type="password"
                value={passWord}
                onChange={({target: {value}}) => setPassword(value)}
                className="form-control"
                id="passwordInput"
                placeholder="your password here"
            />
        </div>
            {/*CONFIRM PASSWORD*/}
            {/* To Do: ONLY RENDER IF /register */}
        {match.url === "/register" ?    
        (<div className="container">
            <label className="form-label">
                Confirm Password
            </label>
            <input
                type="password" 
                onChange={({target: {value}}) => setConfirmPassword(value)}
                value={confirmPassword}
                className="form-control"
                id="setConfirmPasswordInput"
                placeholder=""
            />
        </div>) : null}

            {/*SUBMIT BUTTON*/}
        <div className="submit">
            <button type="submit" className="submit-button">
                Submit
            </button>
            {/* Link to login and register*/}
            {
                match.url === "/register" ?
                <Link to="/login"> Already have an account? </Link>
                : <Link to="/register"> Don't have an account?</Link>

            }
        </div>

        </form>
    )
}




export default Login;
