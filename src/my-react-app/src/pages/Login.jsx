import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        localStorage.setItem('token', 'test-token');
        navigate('/profile');
    };

    return (
        <div>
            <h1>Login</h1>
            <button onClick={handleLogin}>Log in</button>
        </div>
    );
};

export default Login;