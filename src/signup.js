import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import backIcon from './icons/back.png';
import mypage from './icons/user.png';
import community from './icons/community.png';
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';
import './css/signup.css';
import './css/common.css';

// 기본 axios 인스턴스 생성
const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080'
});

const Signup = () => {
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        confirmPassword: '',
        nickname: '',
        email: '',
    });
    const [isIdDuplicate, setIsIdDuplicate] = useState(false);
    const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);
    const [isNicknameDuplicate, setIsNicknameDuplicate] = useState(false);
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [idCheckDone, setIdCheckDone] = useState(false);
    const [emailCheckDone, setEmailCheckDone] = useState(false);
    const [nicknameCheckDone, setNicknameCheckDone] = useState(false);
    const navigate = useNavigate();

    const handleDuplicateCheck = async (type) => {
        try {
            let response;
            if (type === 'id') {
                response = await axiosInstance.get('/register/isDuplicatedId', {
                    params: { id: formData.id }
                });
                setIsIdDuplicate(response.data.isDuplicate);
                setIdCheckDone(true);
            } else if (type === 'email') {
                response = await axiosInstance.get('/register/isDuplicatedEmail', {
                    params: { email: formData.email }
                });
                setIsEmailDuplicate(response.data.isDuplicate);
                setEmailCheckDone(true);
            } else if (type === 'nickname') {
                response = await axiosInstance.get('/register/isDuplicatedNickname', {
                    params: { nickname: formData.nickname }
                });
                setIsNicknameDuplicate(response.data.isDuplicate);
                setNicknameCheckDone(true);
            }
        } catch (error) {
            console.error('중복 확인 실패:', error);
        }
    };

    const handlePasswordMatch = () => {
        if (formData.confirmPassword === '') {
            setIsPasswordMatch(true);
        } else if (formData.password === formData.confirmPassword) {
            setIsPasswordMatch(true);
        } else {
            setIsPasswordMatch(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axiosInstance.post('/register', formData);
            console.log('회원 가입 성공:', response.data);

            // 닉네임을 localStorage에 저장
            localStorage.setItem('nickname', formData.nickname);

            // 회원가입이 완료되면 로그인 페이지로 이동
            navigate('/login');
        } catch (error) {
            console.error('회원 가입 실패:', error);
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'password' || name === 'confirmPassword') {
            setIsPasswordMatch(formData.password === value);
        } else if (name === 'id') {
            setIsIdDuplicate(false);
            setIdCheckDone(false);
        } else if (name === 'email') {
            setIsEmailDuplicate(false);
            setEmailCheckDone(false);
        } else if (name === 'nickname') {
            setIsNicknameDuplicate(false);
            setNicknameCheckDone(false);
        }
    };

    return (
        <div className='backgroundWithMoveBar undraggable'>
            <div className='centerXWrapper'>
                <div className='serviceNameBox'>
                    <Link to="/login">
                        <img src={backIcon} alt="Back Icon" className="back-icon"/>
                    </Link>
                    clothely
                </div>
            </div>
            <div className='centerXWrapper'>
                <div>
                    <form onSubmit={handleSubmit} className='userInfoInput'>
                        <div className='duplicateWrapper'>
                            <input
                                className='duplicateInput'
                                type="text"
                                name="id"
                                value={formData.id}
                                onChange={handleChange}
                                placeholder='아이디'
                            />
                            {!idCheckDone && (
                                <div className='duplicateButton' onClick={() => handleDuplicateCheck('id')}>
                                    중복 확인
                                </div>
                            )}
                            {idCheckDone && (
                                <div className={`afterCheck ${isIdDuplicate ? 'duplicate-id' : 'available-id'}`}>
                                    {isIdDuplicate ? 'NO' : 'OK'}
                                </div>
                            )}
                        </div>
                        <div>
                            <input type="password" name="password" value={formData.password} onChange={handleChange}
                                   placeholder='비밀번호'/>
                        </div>
                        <div className='duplicateWrapper'>
                            <input
                                className='duplicateInput'
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder='비밀번호 재입력'
                                onBlur={handlePasswordMatch}
                            />
                            {!isPasswordMatch && (
                                <div className='password-match afterCheck'>
                                    NO
                                </div>
                            )}
                            {isPasswordMatch && formData.confirmPassword && (
                                <div className='available-password afterCheck'>
                                    OK
                                </div>
                            )}
                        </div>
                        <div className='duplicateWrapper'>
                            <input
                                className='duplicateInput'
                                type="text"
                                name="nickname"
                                value={formData.nickname}
                                onChange={handleChange}
                                placeholder='닉네임'
                            />
                            {!nicknameCheckDone && (
                                <div className='duplicateButton' onClick={() => handleDuplicateCheck('nickname')}>
                                    중복 확인
                                </div>
                            )}
                            {nicknameCheckDone && (
                                <div className={`afterCheck ${isNicknameDuplicate ? 'duplicate-nickname' : 'available-nickname'}`}>
                                    {isNicknameDuplicate ? 'NO' : 'OK'}
                                </div>
                            )}
                        </div>
                        <div className='duplicateWrapper'>
                            <input
                                className='duplicateInput'
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='이메일'
                            />
                            {!emailCheckDone && (
                                <div className='duplicateButton' onClick={() => handleDuplicateCheck('email')}>
                                    중복 확인
                                </div>
                            )}
                            {emailCheckDone && (
                                <div className={`afterCheck ${isEmailDuplicate ? 'duplicate-email' : 'available-email'}`}>
                                    {isEmailDuplicate ? 'NO' : 'OK'}
                                </div>
                            )}
                        </div>
                        <button type="submit">가입하기</button>
                    </form>
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

export default Signup;
