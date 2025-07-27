import React, { useState } from 'react';
import './Register.css';
import { NavLink, useNavigate } from 'react-router-dom';
import { addUser } from '../../apis/handle_api';


function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const navigate = useNavigate();

    async function submitRegister(e) {
        e.preventDefault();

        if (password !== cpassword) {
            alert("Passwords do not match");
            return;
        }
            const success = await addUser({ username, email, password });
            if(success){
            navigate('/Login');
            }
    }

    return (
        <div className="container">
            <div className="centerr">
                <h2>WelCome! Register Here:</h2>
                <form onSubmit={submitRegister}>
                    <input className="input" type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} required />
                    <input className="input" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input className="input" type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <input className="input" type="password" placeholder="Confirm Password" value={cpassword} onChange={(e) => setCpassword(e.target.value)} required />
                    <button type="submit">Register</button>
                </form>Already have an account?
                <NavLink to="/Login">Login now.</NavLink>
                <h2>&nbsp;</h2>
            </div>
        </div>
    );
}

export default Register;
