import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import backIcon from './icons/back.png';
import mypage from './icons/user.png';
import community from './icons/community.png';
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';
import './css/signup.css';
import './css/common.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        confirmPassword: '',
        name: '',
        nickname: '',
        email: '',
    });
    const [isIdDuplicate, setIsIdDuplicate] = useState(false);
    const [isNicknameDuplicate, setIsNicknameDuplicate] = useState(false);
    const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);

    function handleChange(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });

        setIsIdDuplicate(false);
        setIsNicknameDuplicate(false);
        setIsEmailDuplicate(false);

        if (e.target.name === 'password' || e.target.name === 'confirmPassword') {
            setIsPasswordMatch(true);
        }
    }

    const handleDuplicateCheck = () => {
        const existingIds = ['Id1', 'Id2', 'Id3'];
        const existingNicknames = ['Nickname1', 'Nickname2', 'Nickname3'];
        const existingEmails = ['Email1@example.com', 'Email2@example.com', 'Email3@example.com'];

        setIsIdDuplicate(existingIds.includes(formData.id));
        setIsNicknameDuplicate(existingNicknames.includes(formData.nickname));
        setIsEmailDuplicate(existingEmails.includes(formData.email));
    };

    const handlePasswordMatch = () => {
        setIsPasswordMatch(formData.password === formData.confirmPassword);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setIsPasswordMatch(false);
            return;
        }
        console.log('회원 가입 정보:', formData);
    };

    return (
        <div className='backgroundWithMoveBar undraggable'>
            <div className='centerXWrapper'>
                <div className='serviceNameBox'>
                    <Link to="/login">
                        <img src={backIcon} alt="Back Icon" className="back-icon"/>
                    </Link>
                    서비스명
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
                                onBlur={handleDuplicateCheck}
                                placeholder='아이디'
                            />
                            <div className='duplicateButton'>
                                중복 확인
                            </div>
                            {isIdDuplicate && (
                                <div className='duplicate-id afterCheck'>
                                    NO
                                </div>
                            )}
                            {!isIdDuplicate && formData.id && (
                                <div className='available-id afterCheck'>
                                    OK
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
                        <div>
                            <input type="text" name="name" value={formData.name} onChange={handleChange}
                                   placeholder='이름'/>
                        </div>
                        <div className='duplicateWrapper'>
                            <input
                                className='duplicateInput'
                                type="text"
                                name="nickname"
                                value={formData.nickname}
                                onChange={handleChange}
                                onBlur={handleDuplicateCheck}
                                placeholder='닉네임'
                            />
                            <div className='duplicateButton'>
                                중복 확인
                            </div>
                            {isNicknameDuplicate && (
                                <div className='duplicate-nickname afterCheck'>
                                    NO
                                </div>
                            )}
                            {!isNicknameDuplicate && formData.nickname && (
                                <div className='available-nickname afterCheck'>
                                    OK
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
                                onBlur={handleDuplicateCheck}
                                placeholder='이메일'
                            />
                            <div className='duplicateButton'>
                                중복 확인
                            </div>
                            {isEmailDuplicate && (
                                <div className='duplicate-email afterCheck'>
                                    NO
                                </div>
                            )}
                            {!isEmailDuplicate && formData.email && (
                                <div className='available-email afterCheck'>
                                    OK
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
                    <img src={digging} alt="digging" className="digging-icon"/>
                    <img src={home} alt="home" className="home-icon"/>
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

// TODO : 중복 확인 후 OK, NO 나오도록 하기
