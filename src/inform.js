import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import backIcon from './icons/back.png';
import mypage from './icons/user.png';
import community from './icons/community.png';
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';
import './css/inform.css';
import './css/common.css';

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

const Inform = () => {
    const [nickname, setNickname] = useState(''); 
    const [userId, setUserId] = useState('');
    const [error, setError] = useState(''); 
    const navigate = useNavigate();
    
    const fetchNickname = async (id) => {
        try {
            const response = await axiosInstance.get(`/user/nickname`, {
                params: { id }, // URL 파라미터 전달
                responseType: 'json'
            });
    
            console.log('Server response:', response.data);
    
            if (response.data && response.data.nickname) {
                const fetchedNickname = response.data.nickname;
                setNickname(fetchedNickname);
                console.log('Fetched Nickname:', fetchedNickname);
            } else {
                setError('응답 데이터에 닉네임이 없습니다.');
            }
        } catch (error) {
            console.error('Error fetching nickname:', error);
            setError('닉네임을 가져오는 데 실패했습니다.');
        }
    };
    

    useEffect(() => {
        setAuthorizationHeader();

        const storedUserId = localStorage.getItem('userId');

        if (storedUserId) {
            setUserId(storedUserId);
            fetchNickname(storedUserId);
        } else {
            setError('사용자 ID를 찾을 수 없습니다.');
        }
    }, []);

    
    

    // 닉네임 변경 업데이트
    const handleNicknameChange = (newNickname) => {
        setNickname(newNickname);
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
                <div>
                    <div className='userInfoCard'>
                        <p className='userInfoCardNickname'>{nickname}</p>
                        <p className='userInfoCardId'>{userId}</p>
                    </div>
                    <form className='change'>
                        <div>
                            <div>
                                <Link to="/NicknameChange">
                                    <button className='nicknameChange' onClick={() => handleNicknameChange('새 닉네임')}>닉네임 변경</button>
                                </Link>
                            </div>
                            <div>
                                <Link to="/PasswordChange">
                                    <button className='passwordChange'>비밀번호 변경</button>
                                </Link>
                            </div>
                            <div>
                                <Link to="/Withdrawal">
                                    <button className='Withdrawal'>회원 탈퇴</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                    {error && <div className='error'>{error}</div>} {/* 에러 메시지 표시 */}
                </div>
            </div>
            <div className='centerXWrapper'>
                <div className='move'>
                    <img src={product} alt="product" className="product-icon" />
                    <img src={digging} alt="digging" className="digging-icon" />
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

export default Inform;
