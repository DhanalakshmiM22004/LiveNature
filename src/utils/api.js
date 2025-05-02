import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/auth';

export const signup = async (fullName, email, password) => {
    const response = await axios.post(`${API_BASE_URL}/signup`, { fullName, email, password });
    return response.data;
};

export const signin = async (email, password) => {
    const response = await axios.post(`${API_BASE_URL}/signin`, { email, password });
    return response.data;
};

export const signout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('fullName');
    window.location.href = "/";
};
