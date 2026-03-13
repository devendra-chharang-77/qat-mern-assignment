import axios from 'axios';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const [form, setForm] = useState({ name: '', email: '', password: '', role: 'user' });
    const navigate = useNavigate();

    const handleRegister = async (e) => {
        e.preventDefault();
        try {
            const res = await axios.post('http://localhost:5000/api/auth/register', form);
            localStorage.setItem('token', res.data.token); 
            localStorage.setItem('user', JSON.stringify(res.data.user));
            alert("Success!");
            navigate('/login');
        } catch (err) { alert("Error!"); }
    };

    return (
        <div className="auth-container">
            <div className="auth-card">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <input className="auth-input" placeholder="Full Name" onChange={e => setForm({...form, name: e.target.value})} />
                    <input className="auth-input" placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
                    <input className="auth-input" type="password" placeholder="Password" onChange={e => setForm({...form, password: e.target.value})} />
                    <select className="auth-input" onChange={e => setForm({...form, role: e.target.value})}>
                        <option value="user">User</option>
                        <option value="manager">Manager</option>
                        <option value="admin">Admin</option>
                    </select>
                    <button className="auth-button">Register</button>
                </form>
            </div>
        </div>
    );
};
export default Register;