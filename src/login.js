import React, {useCallback, useState} from 'react'
import {useNavigate} from "react-router-dom";
import kakao from './icons/kakao.png';
import google from './icons/google.png';
import naver from './icons/naver.png';
import ServiceNameBox from "./component/ServiceNameBox";
import MoveBar from "./component/MoveBar";
import './css/login.css';
import './css/common.css';

const Login = ({setIsLogIn}) => {
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
        <div className='backgroundWithMoveBar undraggable'>
            <ServiceNameBox to="/login"></ServiceNameBox>
            <div className='centerXWrapper'>
                <div>
                    <form onSubmit={onSubmitForm} className='userInfoInput'>
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
                        <button type="submit" className='kakao'>
                            <img src={kakao} alt="kakao" className="kakao-icon"/>
                            카카오 로그인
                        </button>
                        <button type="submit" className='naver'>
                            <img src={naver} alt="naver" className="naver-icon"/>
                            네이버 로그인
                        </button>
                        <button type="submit" className='google'>
                            <img src={google} alt="google" className="google-icon"/>
                            구글 로그인
                        </button>
                        <button type="submit" className='email' onClick={navigateToSignup}>
                            이메일 로그인
                        </button>
                    </form>
                </div>
            </div>
            <MoveBar></MoveBar>
        </div>
    );
};

export default Login;