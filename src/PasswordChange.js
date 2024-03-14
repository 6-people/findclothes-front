import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import backIcon from './icons/back.png';
import mypage from './icons/user.png';
import community from './icons/community.png';
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';
import './css/PasswordChange.css';
import './css/common.css';

const PasswordChange = ({onPasswordChange}) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [Password, setPassword] = useState('');
    const [Nickname, setNickname] = useState('닉네임1');
    const [name, setName] = useState('이름1');
    const [id, setId] = useState('아이디1');
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const handlePasswordChange = () => {

        if (newPassword !== confirmPassword) {
            setPasswordMismatch(true);
            return;
        }

        setPasswordMismatch(false);

        onPasswordChange(newPassword);

        setNewPassword('');
        setConfirmPassword('');
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
                        <p className='userInfoCardNickname'>{Nickname}</p>
                        <p className='userInfoCardId'>{id}</p>
                    </div>
                    <div className='userInfoInput'>
                        <div>
                            <label>
                                <input
                                    type="password"
                                    placeholder="기존 비밀번호"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
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
                            {passwordMismatch && <div className="password-mismatch">!</div>}
                        </div>
                        <button onClick={handlePasswordChange}>변경하기</button>
                    </div>
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

export default PasswordChange;

// TODO : password mismatch 확인 안 됨
