import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [form, setForm] = useState({ email: '', password: '' });
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/login', form);
            localStorage.setItem('token', res.data.token); // Token storage 
            localStorage.setItem('user', JSON.stringify(res.data.user)); 
            alert("Login Successful!");
            navigate('/admin'); 
        } catch (err) { alert("Invalid Credentials"); }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Login</h2>
                <form onSubmit={handleLogin}>
                    <input className="auth-input" placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
                    <input className="auth-input" type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
                    <button className="auth-button" style={{backgroundColor: '#2563eb'}}>Login</button>
                </form>
            </div>
        </div>
    );
};
export default Login;