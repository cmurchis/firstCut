import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { handleRegister } from "../utils/resource";

const Signup = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [email, setEmail] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username.trim() && password.trim() && email.trim()) {
            console.log(email, username, password);
            setPassword("");
            setUsername("");
            setEmail("");
        }
    };

    return (
        <main className='signup'>
            <form className='signup__form' onSubmit={handleSubmit}>
                <h2 className='signup__title'>Create an account</h2>
                <label htmlFor='email'>Email Address</label>
                <input
                    id='email'
                    name='email'
                    type='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label htmlFor='username'>Username</label>
                <input
                    id='username'
                    name='username'
                    required
                    type='text'
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                <label htmlFor='password'>Password</label>
                <input
                    id='password'
                    type='password'
                    name='password'
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className='signupButton'>REGISTER</button>
                <p style={{ textAlign: "center", marginTop: "30px" }}>
                    Already have an account?{" "}
                    <Link className='link' to='/'>
                        Sign in
                    </Link>
                </p>
            </form>
        </main>
    );
};

export default Signup;

import { handleRegister } from "../utils/resource";
import { useNavigate } from "react-router-dom";

const navigate = useNavigate();

const handleSubmit = (e) => {
    e.preventDefault();
    if (username.trim() && password.trim() && email.trim()) {
        handleRegister(email, username, password, navigate);
        setPassword("");
        setUsername("");
        setEmail("");
    }
};

export async function handleRegister(email, username, password, navigate) {
    try {
        const request = await fetch("http://localhost:4000/register", {
            method: "POST",
            body: JSON.stringify({
                email,
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
            toast.success(data.message);
            navigate("/");
        }
    } catch (err) {
        console.error(err);
        toast.error("Account creation failed");
    }
}

//👇🏻 array representing the data
const database = [];
//👇🏻 generates a random string as ID
const generateID = () => Math.random().toString(36).substring(2, 10);

app.post("/register", (req, res) => {
    const { username, email, password } = req.body;
    //👇🏻 checks if the user does not exist
    let result = database.filter(
        (user) => user.email === email || user.username === username
    );
    //👇🏻 creates the user's data structure on the server
    if (result.length === 0) {
        database.push({
            id: generateID(),
            username,
            password,
            email,
            timezone: {},
            schedule: [],
        });
        return res.json({ message: "Account created successfully!" });
    }
    //👇🏻 returns an error
    res.json({ error_message: "User already exists!" });
});
