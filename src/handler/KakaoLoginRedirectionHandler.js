import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';


const RedirectHandler = () => {
    const API_URL = process.env.REACT_APP_API_URL;
    const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;
    const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URL;
    const [data, setData] = useState('');
    const location = useLocation();
    const navigate = useNavigate();  
    const [error, setError] = useState('');

    useEffect(() => {
        const code = new URLSearchParams(location.search).get('code');
        if (code) {
            getKakaoToken(code);
        }
    }, [location]);

    const getKakaoToken = (code) => {
        fetch('https://kauth.kakao.com/oauth/token', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            },
            body: `grant_type=authorization_code&client_id=${KAKAO_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&code=${code}`
        })
        .then(response => response.json())
        .then(data => {
            if (data.access_token) {
                sendKakaoToken(data.access_token);
            } else {
                setError('Failed to retrieve Kakao token.');
            }
        })
        .catch(error => {
            console.error('Error fetching Kakao token:', error);
            setError('Failed to retrieve Kakao token.');
        });
    }

    const sendKakaoToken = (token) => {
        fetch(`http://${API_URL}/auth/login/social/kakao?code=${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
        .then(response => response.text())
        .then(jwt => {
            if (jwt) {
                const decodedToken = jwtDecode(jwt);
                const userId = decodedToken.id || decodedToken.userId || decodedToken.sub; // 필드명을 확인하여 수정
                const nickname = decodedToken.nickname || decodedToken.name || decodedToken.sub;; // 필드명을 확인하여 수정
                localStorage.setItem('jwt', jwt);
                localStorage.setItem('userId', userId);
                
                setData(jwt);
                navigate('/');
            } else {
                setError('Failed to login with Kakao.');
            }
        })
        .catch(error => {
            console.error('Error during Kakao login:', error);
            setError('Failed to login with Kakao.');
        });
    }
    
    
    return (
        <div>
            {error ? (
                <h2>{error}</h2>
            ) : (
                <h2>Redirecting...</h2>
            )}
        </div>
    );
}

export default RedirectHandler;
