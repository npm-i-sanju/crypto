import axios from "axios";

const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_COINGECKO_API_URL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json',
    }
})

axiosInstance.interceptors.request.use(
    (config) => {
        const apiKey = import.meta.env.VITE_COINGECKO_API_KEY;
        if (apiKey) {
            config.headers['x-cg-demo-api-key'] = apiKey;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
)

axiosInstance.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 429) {
            console.log("Rate limit exceeded. Please try again later.");
        } else if (error.response?.status === 404) {
            console.log("Resource not found.");
        } else if (error.code === 'ECONNABORTED') {
            console.log("Request timed out. Please try again.");
        }
        return Promise.reject(error);
    }
)

export default axiosInstance;