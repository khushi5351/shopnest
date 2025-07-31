import React, { useState } from 'react';
import './Login.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { getUser } from '../../apis/handle_api';


function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // console.log(email);
    // console.log(password);
    const navigate = useNavigate()
    const submitLogin = async (e) => {
        e.preventDefault()
        const res = await getUser(email, password)
        if(res){
            navigate("/");

        }
        else{
            alert("register first")
            navigate('/Register')
        }
        //  const user = res.data;
        // console.log(user);
       

    }
    return (
        <div className="container">
            <div className="center">
                <h2>Welcome Back!Login Here.</h2>
                <form onSubmit={submitLogin}>
                    <input type="email" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button>Login</button>
                </form>
                    Don't Have An Account?
                    <NavLink to="/Register">Register Now.</NavLink>
            </div>
        </div>
    );
}

export default Login;
