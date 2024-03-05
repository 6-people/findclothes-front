import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './css/PasswordChange.css';
import backIcon from './icons/back.png';
import mypage from './icons/user.png';
import community from './icons/community.png';
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';

const PasswordChange = ({ onPasswordChange }) => {
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
    <div>
      <div className='password_name'>
        <Link to="/inform">
          <img src={backIcon} alt="Back Icon" className="back-icon" />
        </Link>
        <p>비밀번호 변경</p>
      </div>
      <div className='user-info-box'>
        <p className='nickname'>{Nickname}</p>
        <p className='name'>{name}</p>
        <p className='id'>{id}</p>
      </div>
      <div>
        <label>
          <input
            className='currentpassword_input'
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
            className='passwordChange_input'
            type="password"
            placeholder="새 비밀번호"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </label>
      </div>
      <div>
        <label>
          <input
            className='confirmPassword_input'
            type="password"
            placeholder="새 비밀번호 확인"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </label>
        {passwordMismatch && <p className="password-mismatch">비밀번호가 일치하지 않습니다.</p>}
      </div>
      <button className='password_change' onClick={handlePasswordChange}>
        변경하기
      </button>
      <div className='password_move' style={{ display: 'flex'}}>
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

export default PasswordChange;


