import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import backIcon from './icons/back.png';
import mypage from './icons/user.png';
import community from './icons/community.png';
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';
import './css/common.css';
import axios from 'axios';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': '*/*',
    },
    withCredentials: true,
});

const setAuthorizationHeader = () => {
    const token = localStorage.getItem('jwt');
    console.log('Stored JWT Token:', token); // 확인용 로그
    if (token) {
        axiosInstance.defaults.headers.common['X-AUTH-TOKEN'] = token;
    }
};

const NicknameChange = () => {
    const [newNickname, setNewNickname] = useState('');
    const [nickname, setNickname] = useState(''); 
    const [error, setError] = useState('');
    const [userId, setUserId] = useState('');
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

    const handleNicknameChange = async () => {
        try {
            const response = await axiosInstance.put('/user/updateNickname', { 
                id: userId,
                newNickname: newNickname 
            });
            if (response.status === 200) {
                setNickname(newNickname);
                localStorage.setItem('nickname', newNickname);
                setNewNickname('');
                setError('');
                navigate('/mypage'); 
            } else {
                setError('닉네임 변경에 실패했습니다.');
            }
        } catch (error) {
            setError('닉네임 변경 중 오류가 발생했습니다.');
            console.error('Nickname change error:', error);
        }
    };

    return (
        <div className='backgroundWithMoveBar undraggable'>
            <div className='centerXWrapper'>
                <div className='pageNameBox'>
                    <Link to="/inform">
                        <img src={backIcon} alt="Back Icon" className="back-icon" />
                    </Link>
                    닉네임 변경
                    <div className='imgBlank'></div>
                </div>
            </div>
            <div className='centerXWrapper'>
                <div>
                    <div className='userInfoCard'>
                        <p className='userInfoCardNickname'>{nickname}</p> 
                        <p className='userInfoCardId'>{userId}</p>
                    </div>
                    <div className='userInfoInput'>
                        <div>
                            <label>
                                <input
                                    type="text"
                                    placeholder="새 닉네임"
                                    onChange={(e) => setNewNickname(e.target.value)}
                                    value={newNickname}
                                />
                            </label>
                        </div>
                        <button onClick={handleNicknameChange}>변경하기</button>
                        {error && <p className='error'>{error}</p>}
                    </div>
                </div>
            </div>
            <div className='centerXWrapper'>
                <div className='move'>
                    <Link to="/product">
                        <img src={product} alt="product" className="product-icon" />
                    </Link>
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

export default NicknameChange;
