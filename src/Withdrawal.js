import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import backIcon from './icons/back.png';
import mypage from './icons/user.png';
import community from './icons/community.png';
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';
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

const Withdrawal = () => {
    const [password, setPassword] = useState('');
    const [nickname, setNickname] = useState('');
    const [userId, setUserId] = useState('');
    const [error, setError] = useState('');

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

    const handleWithdrawal = async () => {
        if (password !== '') {
            const isConfirmed = window.confirm('정말로 탈퇴하시겠습니까?');

            if (isConfirmed) {
                try {
                   
                    const requestData = {
                        id: userId,
                        password: password,
                    };

                    
                    const response = await axiosInstance.delete('/user', {
                        data: requestData,
                        headers: {
                            'Content-Type': 'application/json',
                            'X-AUTH-TOKEN': localStorage.getItem("jwt")
                        },
                    });

                    console.log(response.data);
                    alert('탈퇴 완료되었습니다.');

                    // 탈퇴 성공 후 로컬 스토리지 초기화 및 로그인 페이지로 이동
                    localStorage.removeItem('jwt');
                    localStorage.removeItem('userId');
                    localStorage.removeItem('nickname');
                    localStorage.removeItem('autoLogin');
                    window.location.href = '/login';
                } catch (error) {
                    console.error('탈퇴 오류:', error);
                    alert('탈퇴 중 오류가 발생했습니다. 다시 시도해주세요.');
                }
            }
        } else {
            alert('비밀번호를 입력해주세요.');
        }
    };

    return (
        <div className='backgroundWithMoveBar undraggable'>
            <div className='centerXWrapper'>
                <div className='pageNameBox'>
                    <Link to="/inform">
                        <img src={backIcon} alt="Back Icon" className="back-icon" />
                    </Link>
                    회원 탈퇴
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
                                    type="password"
                                    placeholder="비밀번호"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>
                        </div>
                        <button onClick={handleWithdrawal}>탈퇴</button>
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

export default Withdrawal;
