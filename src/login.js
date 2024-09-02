import React, { useCallback, useState } from 'react';
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import backIcon from './icons/back.png';
import mypage from './icons/user.png';
import community from './icons/community.png';
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';
import kakao from './icons/kakao.png';
import google from './icons/google.png';
import naver from './icons/naver.png';
import './css/login.css';
import './css/common.css';

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8080',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Accept': '*/*',
    },
    withCredentials: true,
});


const Login = () => {
    const [loginUser, setLoginUser] = useState({ id: '', password: '' });
    const [autoLogin, setAutoLogin] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const onSubmitForm = async (e) => {
        e.preventDefault();
        const { id, password } = loginUser;
    
        try {
            const response = await axiosInstance.post('/auth/login', { id, password });
            console.log('Login Response:', response);  // 디버깅용 로그
    
            if (response.status === 200) {
                // response.data 전체를 출력하여 실제 구조를 확인
                console.log('Response data:', response.data);
    
                // 토큰이 response.data에 직접 있는 경우
                const token = response.data;
                
                // 토큰이 유효한지 확인
                if (typeof token === 'string' && token.startsWith('eyJ')) {
                    console.log('Stored JWT Token:', token);  // 디버깅용 로그
                    localStorage.setItem('jwt', token);
                    localStorage.setItem('userId', id);
                    localStorage.setItem('userPassword', password);
    
                    if (autoLogin) {
                        localStorage.setItem('autoLogin', 'true');
                    } else {
                        localStorage.removeItem('autoLogin');
                    }
                    navigate('/');
                } else {
                    setError('유효하지 않은 토큰 형식입니다.');
                }
            } else {
                setError('로그인 실패! 아이디와 비밀번호를 다시 확인해주세요.');
            }
        } catch (error) {
            setError('로그인 중 오류가 발생했습니다. 다시 시도해주세요.');
            console.error('로그인 오류:', error);
        }
       
    };

    const onAutoLoginChange = useCallback(() => {
        const newAutoLogin = !autoLogin;
        setAutoLogin(newAutoLogin);
        localStorage.setItem('autoLogin', newAutoLogin.toString()); // 변경된 타입 저장
    }, [autoLogin]);

    const handleInputChange = useCallback((e) => {
        const { name, value } = e.target;
        setLoginUser((prev) => ({ ...prev, [name]: value }));
    }, []);

    const navigateToSignup = () => {
        navigate("/signup");
    };

    const loginWithKakao = () => {
        const KAKAO_KEY = process.env.REACT_APP_KAKAO_KEY;
        const KAKAO_REDIRECT_URI = process.env.REACT_APP_KAKAO_REDIRECT_URL;
        window.location.href = `https://kauth.kakao.com/oauth/authorize?client_id=${KAKAO_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}&response_type=code`;
        
    };

    const loginWithNaver = () => {
        const NAVER_KEY = process.env.REACT_APP_NAVER_KEY;
        const NAVER_REDIRECT_URI = process.env.REACT_APP_NAVER_REDIRECT_URL;
        const NAVER_STATE = process.env.REACT_APP_NAVER_STATE;
        window.location.href = `https://nid.naver.com/oauth2.0/authorize?client_id=${NAVER_KEY}&redirect_uri=${NAVER_REDIRECT_URI}&state=${NAVER_STATE}&response_type=code`;
    };

    const loginWithGoogle = () => {
        const GOOGLE_KEY = process.env.REACT_APP_GOOGLE_KEY;
        const GOOGLE_REDIRECT_URI = process.env.REACT_APP_GOOGLE_REDIRECT_URL;
        window.location.href = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_KEY}&redirect_uri=${GOOGLE_REDIRECT_URI}&scope=https://www.googleapis.com/auth/userinfo.profile&response_type=code`;
    }

    return (
        <div className='backgroundWithMoveBar undraggable'>
            <div className='centerXWrapper'>
                <div className='serviceNameBox'>
                    <img src={backIcon} alt="Back Icon" className="back-icon" />
                    clothely
                </div>
            </div>
            <div className='centerXWrapper'>
                <div>
                    <form onSubmit={onSubmitForm} className='userInfoInput'>
                        <div>
                            <input
                                type="text"
                                name="id"
                                value={loginUser.id}
                                placeholder='아이디'
                                onChange={handleInputChange}
                            />
                        </div>
                        <div>
                            <input
                                type="password"
                                name="password"
                                value={loginUser.password}
                                placeholder='비밀번호'
                                onChange={handleInputChange}
                            />
                        </div>
                        {error && <div className='error'>{error}</div>}
                        <button type="submit">로그인</button>
                    </form>
                    <div className='loginUtils'>
                        <div>
                            <label className='autoLogin'>
                                <input
                                    type="checkbox"
                                    name="autoLogin"
                                    checked={autoLogin}
                                    onChange={onAutoLoginChange}
                                />
                                자동 로그인
                            </label>
                        </div>
                        <div className='find'>
                            <label className='findId'>
                                아이디 찾기
                            </label>
                            <label className='or'>|</label>
                            <label className='findPw'>
                                비밀번호 찾기
                            </label>
                        </div>
                    </div>
                    <form className='socialLogin'>
                        <button type="button" className='kakao' onClick={loginWithKakao}>
                            <img src={kakao} alt="kakao" className="kakao-icon"/>
                            카카오 로그인
                        </button>
                        <button type="button" className='naver' onClick={loginWithNaver}>
                            <img src={naver} alt="naver" className="naver-icon"/>
                            네이버 로그인
                        </button>
                        <button type="button" className='google' onClick={loginWithGoogle}>
                            <img src={google} alt="google" className="google-icon"/>
                            구글 로그인
                        </button>
                        <button type="submit" className='email' onClick={navigateToSignup}>
                            이메일 회원가입
                        </button>
                    </form>
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

export default Login;