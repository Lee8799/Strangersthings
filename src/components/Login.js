import React, { useState } from 'react';
import ReactDOM from 'react';



const Login = () => {
    
    const [userName, setUsername] = useState("enter your username");
    const [passWord, setPassword] = useState("enter your password");
    const [confirmPassword, setConfirmPassword] = useState("");

    return (
        <form
        onSubmit={(event) => {
            event.preventDefault();
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
                onChange={({target: {value}}) => setUserName(value)}
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
        <div className="container">
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
        </div>
        <div className="submit">
            <button type="submit" className="submit-button">
                Submit
            </button>
        </div>

        </form>
    )
}


export default Login;