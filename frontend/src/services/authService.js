import axios from 'axios';

// CHANGE THIS: Localhost ko hatakar apne deployed backend ka link dalo
// Agar backend deploy nahi kiya hai, toh temporary base URL rakho
const API_URL = window.location.hostname === 'localhost' 
    ? 'http://localhost:5000/api/auth' 
    : 'https://tera-backend-render-link.onrender.com/api/auth';

export const register = async (userData) => {
    const response = await axios.post(`${API_URL}/register`, userData);
    
    if (response.data.token) {
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('role', response.data.role); 
    }
    return response.data;
};

export const login = async (userData) => {
    const response = await axios.post(`${API_URL}/login`, userData);
    if (response.data.token) {
        localStorage.setItem('token', response.data.token); 
        localStorage.setItem('role', response.data.role); 
    }
    return response.data;
};