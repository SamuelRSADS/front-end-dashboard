// lib/axios.js
import axios from 'axios';

export const axiosHttp = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Optional: Add interceptors (e.g., for auth)
axiosHttp.interceptors.request.use(
  (config) => {
    // For example: attach token from localStorage or cookies
    // const token = localStorage.getItem('token');
    // if (token) config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  (error) => Promise.reject(error)
);

axiosHttp.interceptors.response.use(
  (response) => response,
  (error) => {
    console.error('API Error:', error?.response || error.message);
    return Promise.reject(error);
  }
);
