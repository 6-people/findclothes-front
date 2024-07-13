import React, {useEffect, useState} from 'react';
import {useLocation} from 'react-router-dom';

const RedirectHandler = () => {
    const location = useLocation();
    const [data, setData] = useState('');

    useEffect(() => {
        const code = new URLSearchParams(location.search).get('code');
        if (code) {
            console.log(code);
        }
    }, [location]);

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