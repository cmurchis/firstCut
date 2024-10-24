
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        if (username.trim() && password.trim()) {
            e.preventDefault();
            console.log({ username, password });
            setPassword("");
            setUsername("");
        }
    };

    return (
        <main className='login'>
            <form className='login__form' onSubmit={handleSubmit}>
                <h2 className='login__title'>Log into your account</h2>
                <label htmlFor='username'>Username</label>
                <input
                    id='username'
                    name='username'
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className='username'
                />
                <label htmlFor='password'>Password</label>
                <input
                    id='password'
                    type='password'
                    name='password'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='password'
                />
                <button className='loginButton'>LOG IN</button>
                <p style={{ textAlign: "center", marginTop: "30px" }}>
                    Don't have an account?{" "}
                    <Link className='link' to='/register'>
                        Create one
                    </Link>
                </p>
            </form>
        </main>
    );
};

export default Login;

import { handleLogin } from "../utils/resource";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

//👇🏻 The Login button function
const handleSubmit = (e) => {
    if (username.trim() && password.trim()) {
        e.preventDefault();
        //👇🏻 accepts the user's password and email
        handleLogin(username, password, navigate);
        setPassword("");
        setUsername("");
    }
};

export async function handleLogin(username, password, navigate) {
    try {
        const request = await fetch("http://localhost:4000/login", {
            method: "POST",
            body: JSON.stringify({
                username,
                password,
            }),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        });
        const data = await request.json();
        if (data.error_message) {
            toast.error(data.error_message);
        } else {
            //👇🏻If login successful
            toast.success(data.message);
            //👇🏻 saves the email and id for identification
            localStorage.setItem("_id", data.data._id);
            localStorage.setItem("_myEmail", data.data._email);
            navigate("/dashboard");
        }
    } catch (err) {
        console.error(err);
    }
  }