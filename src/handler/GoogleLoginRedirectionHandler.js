import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

const RedirectHandler = () => {
    const API_URL = process.env.REACT_APP_API_URL;
    const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY;
    const GOOGLE_SECRET = process.env.REACT_APP_GOOGLE_SECRET;
    const GOOGLE_REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URL;

    const location = useLocation();
    const [data, setData] = useState('');

    useEffect(() => {
        const code = new URLSearchParams(location.search).get('code');
        if (code) {
            getGoogleToken(code);
        }
    }, [location]);

    const getGoogleToken = (code) => {
        fetch(`https://oauth2.googleapis.com/token?client_id=${GOOGLE_KEY}&client_secret=${GOOGLE_SECRET}&redirect_uri=${GOOGLE_REDIRECT_URI}&grant_type=authorization_code&code=${code}&`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.access_token) {
                    sendGoogleToken(data.access_token);
                }
            })
            .catch(error => console.error('Error fetching Kakao token:', error));
    }

    const sendGoogleToken = (token) => {
        fetch(`http://${API_URL}/auth/login/social/google?code=${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }).then(response => response.text())
            .then(jwt => {
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