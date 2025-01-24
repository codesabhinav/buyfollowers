const API_BASE_URL = 'http://127.0.0.1:8000/api';

import axios from "axios";

export const getSettingByKey = async (key) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/settings`, {
            params: { key },
        });
        const setting = response.data.data.find((item) => item.key === key);
        return setting ? setting.value : null;
    } catch (error) {
        throw error;
    }
};

export const products = async (serviceTypes) => {
    try {
        const params = serviceTypes
            .map((type) => `service_type[]=${type}`)
            .join("&");
        const response = await axios.get(`${API_BASE_URL}/products?${params}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const navbar = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/navbar`);
        return await response.json();
    } catch (error) {
        throw error;
    }
};

export const googleLogin = async (token) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, { token });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getUserDetails = async () => {
    const token = localStorage.getItem("token");
    if (!token) return null;
    try {
        const response = await axios.get(`${API_BASE_URL}/my-profile`, {
            headers: {
                Authorization: `Bearer ${token}`,
                "Content-Type": "application/json",
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/logout`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
        });
    } catch (error) {
        throw error;
    }
};

export const signup = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/signup`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const login = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/login`, data)
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const forgotPassword = async (email) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/forgot-password`, { email });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const verifyOtp = async (email, otp) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/otp-verify`, { email, otp });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const changePassword = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/change-password`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchBlogs = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/blogs`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addCart = async (productId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/products/${productId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const paymentLinks = async (title) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/payment-links?title=${title}`);
        return response.data.data[0];
    } catch (error) {
        throw error;
    }
};


export const makePayment = async (paymentData) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/payment`, paymentData, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createOrder = async (service, link, quantity) => {
    try {
        const url = await getSettingByKey("api_url");
        const token = await getSettingByKey("token");
        if (!url || !token) {
            throw new Error("API URL or token not found in settings");
        }
        const response = await axios.get(`${url}?action=add&service=${service}&link=instagram.com/${link}&quantity=${quantity}&key=${token}`);
        console.log(response.data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const storeOrder = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/order`, data, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const fetchOrderHistory = async (page) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/order?page=${page}`, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem("token")}`,
                "Content-Type": "application/json",
            },
        });
        return response.data;
    } catch (error) {
        console.error("Error fetching order history:", error);
        return { data: [], last_page: 0 };
    }
};

export const fetchOrderStatusData = async (orderId) => {
    try {
        const url = await getSettingByKey("api_url");
        const token = await getSettingByKey("token");
        if (!url || !token) {
            throw new Error("API URL or token not found in settings");
        }
        const response = await axios.get(
            `${url}?action=status&order=${orderId}&key=${token}`
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};