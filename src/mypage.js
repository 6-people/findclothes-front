import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import backIcon from './icons/back.png';
import mypage from './icons/user.png';
import community from './icons/community.png';
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';
import './css/mypage.css';
import './css/common.css';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080', 
    withCredentials: true, 
});

const setAuthorizationHeader = () => {
    const token = localStorage.getItem('jwt');
    if (token) {
        axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
        delete axiosInstance.defaults.headers.common['Authorization'];
    }
};

const Mypage = () => {
    const [nickname, setNickname] = useState(''); // 기본 닉네임 설정
    const [userId, setUserId] = useState(''); 
    const [error, setError] = useState('');
    const navigate = useNavigate();

    useEffect(() => {
        setAuthorizationHeader();  

        const storedUserId = localStorage.getItem('userId');
        const storedNickname = localStorage.getItem('nickname');

        if (storedUserId) {
            setUserId(storedUserId);
        } else {
            setError('사용자 ID를 찾을 수 없습니다.');
        }

        if (storedNickname) {
            setNickname(storedNickname);
        } else {
            setError('닉네임을 찾을 수 없습니다.');
        }
    }, []);

    const handleLogout = async () => {
        if (window.confirm('로그아웃 하시겠습니까?')) {
            try {
                const response = await fetch('/auth/logout', {
                    method: 'POST',
                    headers: {
                        'X-AUTH-TOKEN': localStorage.getItem('jwt')
                    }
                });
        
                if (response.ok) {
                    localStorage.removeItem('jwt');
                    localStorage.removeItem('userId');
                    navigate('/login');
                } else {
                    console.log('로그아웃 실패');
                }
            } catch (error) {
                console.error('Logout failed:', error);
                alert('로그아웃에 실패했습니다. 다시 시도해주세요.');
            }
        }
    };

    return (
        <div className='backgroundWithMoveBar undraggable'>
            <div className='centerXWrapper'>
                <div className='serviceNameBox'>
                    <Link to="/login">
                        <img src={backIcon} alt="Back Icon" className="back-icon" />
                    </Link>
                    clothely
                </div>
            </div>
            <div className='centerXWrapper'>
                <div className='userInfoCard mypageCard'>
                    <div>
                        <p className='userInfoCardNickname'>{nickname}</p>
                        <p className='userInfoCardId'>{userId}</p>
                    </div>
                    <div className='inform_select'>
                        <Link to="/inform" className="inform">
                            <p>계정정보</p>
                        </Link>
                        <p className='logout' onClick={handleLogout}>로그아웃</p>
                    </div>
                </div>
            </div>
            <div className='centerXWrapper'>
                <div className='move'>
                    <img src={product} alt="product" className="product-icon" />
                    <Link to="/digging">
                        <img src={digging} alt="digging" className="digging-icon" />
                    </Link>
                    <Link to="/home">
                        <img src={home} alt="home" className="home-icon" />
                    </Link>
                    <img src={community} alt="community" className="community-icon" />
                    <Link to="/mypage">
                        <img src={mypage} alt="mypage" className="mypage-icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Mypage;
