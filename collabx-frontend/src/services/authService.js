import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth';

const authService = {
  register: async (name, email, password) => {
    const response = await axios.post(`${API_URL}/register`, {
      name,
      email,
      password
    });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify({
        email: response.data.email,
        name: response.data.name
      }));
    }
    return response.data;
  },

  login: async (email, password) => {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password
    });
    if (response.data.token) {
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('user', JSON.stringify({
        email: response.data.email,
        name: response.data.name
      }));
    }
    return response.data;
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  },

  getCurrentUser: () => {
    return JSON.parse(localStorage.getItem('user'));
  },

  isAuthenticated: () => {
    return localStorage.getItem('token') !== null;
  }
};

export default authService;