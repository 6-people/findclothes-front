import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

const RedirectHandler = () => {
    const API_URL = process.env.REACT_APP_API_URL;
    const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;
    const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URL;

    const location = useLocation();
    const [data, setData] = useState('');

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
                }
            })
            .catch(error => console.error('Error fetching Kakao token:', error));
    }

    const sendKakaoToken = (token) => {
        fetch(`http://${API_URL}/auth/login/social/kakao?code=${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }).then(response => response.text())
            .then(jwt => {
                console.log(jwt);
                setData(jwt);
            })
            .catch(error => console.error('Error fetching Kakao token:', error));
    }

    return (
        <div>
            {data ? (
                <h2>{data}</h2>
            ) : (
                <h2>Redirecting...</h2>
            )}
        </div>
    );
}

export default RedirectHandler;