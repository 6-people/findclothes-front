import React, { useEffect,useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; 
import backIcon from './icons/back.png';
import mypage from './icons/user.png';
import community from './icons/community.png';
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';
import './css/PasswordChange.css';
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

const PasswordChange = () => {
    const [nickname, setNickname] = useState(''); 
    const [error, setError] = useState('');
    const [userId, setUserId] = useState('');
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(false);
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

    const handlePasswordChange = () => {
        if (newPassword !== confirmPassword) {
            setPasswordMismatch(true);
            setPasswordMatch(false);
            return;
        }

        setPasswordMismatch(false);
        setPasswordMatch(true);

        const payload = {
            id: userId,
            oldPassword,
            newPassword
        };

        axiosInstance.put('/user/updatePassword', payload)
            .then(response => {
            if (response.status === 200) {  
            console.log('Password updated successfully:', response.data);
            setOldPassword('');
            setNewPassword('');
            setConfirmPassword('');
            navigate('/login'); 
        }
            })
            .catch(error => {
                console.error(error);
            });
    };

    return (
        <div className='backgroundWithMoveBar undraggable'>
            <div className='centerXWrapper'>
                <div className='pageNameBox'>
                    <Link to="/inform">
                        <img src={backIcon} alt="Back Icon" className="back-icon"/>
                    </Link>
                    비밀번호 변경
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
                                    placeholder="기존 비밀번호"
                                    value={oldPassword}
                                    onChange={(e) => setOldPassword(e.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="password"
                                    placeholder="새 비밀번호"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className='pwCheckWrapper'>
                            <label>
                                <input
                                    className='pwCheckInput'
                                    type="password"
                                    placeholder="새 비밀번호 확인"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </label>
                            {passwordMismatch && <div className="password-mismatch">NO</div>} 
                        </div>
                        <button onClick={handlePasswordChange}>변경하기</button>
                    </div>
                </div>
            </div>
            <div className='centerXWrapper'>
                <div className='move'>
                    <img src={product} alt="product" className="product-icon"/>
                    <Link to="/digging">
                    <img src={digging} alt="digging" className="digging-icon" />
                    </Link>
                    <Link to="/home">
                    <img src={home} alt="home" className="home-icon" />
                    </Link>
                    <img src={community} alt="community" className="community-icon"/>
                    <Link to="/mypage">
                        <img src={mypage} alt="mypage" className="mypage-icon"/>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PasswordChange;
