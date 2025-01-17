import axios from 'axios';

export const getSettingByKey = async (key) => {
    try {
        const response = await axios.get(`/api/settings`, {
            params: { key },
        });
        const setting = response.data.data.find(item => item.key === key);
        return setting ? setting.value : null;
    } catch (error) {
        console.error('Error fetching setting:', error);
        return null;
    }
};

export const products = async (serviceTypes) => {
    try {
        
        const params = serviceTypes.map(type => `service_type[]=${type}`).join('&');
        const response = await axios.get(`/api/products?${params}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching services:', error);
        return null;
    }
};

