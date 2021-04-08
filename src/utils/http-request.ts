import axios, { AxiosRequestConfig } from 'axios';

export const BASE_API_URL = 'https://www.reddit.com';
export const axiosInstance = axios.create({
    baseURL: BASE_API_URL
});

export const httpRequest = (config: AxiosRequestConfig = {}) => {
    return axiosInstance(config);
};