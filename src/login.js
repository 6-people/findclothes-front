import React, { useState, useCallback } from 'react'
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';
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

const Login = ({ setIsLogIn }) => {
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');
    const [autoLogin, setAutoLogin] = useState(false);
    const navigate = useNavigate();
    const navigateToSignup = () => {
        navigate("/signup");
      };

    const onChangeId = useCallback((e) => {
        setId(e.target.value);
    }, []);

    const onChangePw = useCallback((e) => {
        setPw(e.target.value);
    }, []);

    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        setIsLogIn(true);
    }, [id, pw, setIsLogIn]);

    const onAutoLoginChange = useCallback(() => {
        setAutoLogin(!autoLogin);
    }, [autoLogin]);

    return (
        <div>
            <div className='input_signup_name'>
                <img src={backIcon} alt="Back Icon" className="back-icon" />
                서비스명
            </div>
            <form onSubmit={onSubmitForm} className='input_login'>
                <div>
                    <input
                        type="text"
                        name="id"
                        value={id}
                        onChange={onChangeId}
                        placeholder='아이디'
                    />
                </div>
                <div>
                    <input
                        type="password"
                        name="Password"
                        value={pw}
                        onChange={onChangePw}
                        placeholder='비밀번호'
                    />
                </div>
                <button type="submit">
                    로그인
                </button>
            </form>
            <label className='autoLogin'>
              <input
                type="radio"
                name="autoLogin"
                checked={autoLogin}
                onChange={onAutoLoginChange}
                />
                자동 로그인
            </label>
            <div className='find'>
            <label className='fingId'>
                아이디 찾기
            </label>
            <label className='or'>|</label>
            <label className='findPw'>
                비밀번호 찾기
            </label>
            </div>
            <form className='socialLogin'>
            <button type="submit" className='kakao'>
            <img src={kakao} alt="kakao" className="kakao-icon" />
                   카카오 로그인
            </button>
            <button type="submit" className='naver'>
            <img src={naver} alt="naver" className="naver-icon" />
                  네이버 로그인
            </button>
            <button type="submit" className='google'>
            <img src={google} alt="google" className="google-icon" />
                   구글 로그인
            </button>
            <button type="submit" className='email' onClick={navigateToSignup}>
                   이메일 로그인
            </button>
            </form>
            <div className='move'>
      <img src={product} alt="product" className="product-icon" />
      <img src={digging} alt="digging" className="digging-icon" />
      <img src={home} alt="home" className="home-icon" />
      <img src={community} alt="community" className="community-icon" />
      <Link to="/mypage">
      <img src={mypage} alt="mypage" className="mypage-icon" />
      </Link>
      </div>

        </div>
    );
};

export default Login;