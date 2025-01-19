const API_BASE_URL = 'http://127.0.0.1:8000/api';

import axios from "axios";

export const getSettingByKey = async (key) => {
    try {
        const response = await axios.get(`/api/settings`, {
            params: { key },
        });
        const setting = response.data.data.find((item) => item.key === key);
        return setting ? setting.value : null;
    } catch (error) {
        console.error("Error fetching setting:", error);
        return null;
    }
};

export const products = async (serviceTypes) => {
    try {
        const params = serviceTypes
            .map((type) => `service_type[]=${type}`)
            .join("&");
        const response = await axios.get(`/api/products?${params}`);
        return response.data;
    } catch (error) {
        console.error("Error fetching services:", error);
        return null;
    }
};

export const navbar = async () => {
    try {
        const response = await fetch("/api/navbar"); 
        return await response.json();
    } catch (error) {
        console.error("Error fetching navbar data:", error);
        return null;
    }
};



export const googleLogin = async (token) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { token });
        return response.data;
    } catch (error) {
        throw error.response ? error.response.data : error.message;
    }
};

export const getUserDetails = async () => {
    const token = localStorage.getItem("token"); 
    if (!token) return null;

    try {
        const response = await axios.get(`${API_BASE_URL}/user`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        return response.data;
    } catch (error) {
        console.error("Error fetching user details:", error);
        return null;
    }
};

export const logout = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/logout`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
        console.log("Backend Logout Response:", response);
    } catch (error) {
        console.error("Error during API logout:", error);
    }
};

