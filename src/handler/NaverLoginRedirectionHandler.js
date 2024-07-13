import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

const RedirectHandler = () => {
    const API_URL = process.env.REACT_APP_API_URL;

    const location = useLocation();
    const [data, setData] = useState('');

    useEffect(() => {
        const code = new URLSearchParams(location.search).get('code');
        if (code) {
            getNaverToken(code);
        }
    }, [location]);

    const getNaverToken = (code) => {
        console.log(code);

        fetch(`http://${API_URL}/auth/login/social/naver/code?code=${code}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        })
            .then(response => response.json())
            .then(data => {
                if (data.access_token) {
                    sendNaverToken(data.access_token);
                }
            })
            .catch(error => console.error('Error fetching Naver token:', error));
    }

    const sendNaverToken = (token) => {
        console.log('send : ' + token);
        fetch(`http://${API_URL}/auth/login/social/naver?code=${token}`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
            }
        }).then(response => response.text())
            .then(jwt => {
                setData(jwt);
            })
            .catch(error => console.error('Error fetching Naver token:', error));
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