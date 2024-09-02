// src/api/axiosInstance.js
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'https://api.clothely.store', // API 기본 URL 설정
    headers: {
        'Content-Type': 'application/json',
    },
    withCredentials: true, // 쿠키 전송을 위한 설정
});

// Authorization 헤더 설정 함수
export const setAuthorizationHeader = (token) => {
    axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export default axiosInstance;
