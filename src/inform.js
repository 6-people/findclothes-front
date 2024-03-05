import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import backIcon from './icons/back.png';
import './css/inform.css';
import mypage from './icons/user.png';
import community from './icons/community.png';
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';

const Inform=()=>{
    const [nickname, setNickname] = useState('닉네임1'); // 기본 닉네임 설정
    const [id, setId] = useState('아이디1');
    //변경되 닉네임 업데이트
    const handleNicknameChange = (newNickname) => {
      setNickname(newNickname);
    };

    return(
        <div>
        <div className='inform_name'>
        <Link to="/login">
          <img src={backIcon} alt="Back Icon" className="back-icon" />
          </Link>
          서비스명
        </div>
        <div className='user-info-box'>
        <p className='nickname'>{nickname}</p>
        <p className='id'>{id}</p>
        </div>
        <form className='change'>
        <div>
        <Link to="/NicknameChange">
        <button className='nicknameChange' onNicknameChange={handleNicknameChange}>닉네임 변경</button>
       </Link>
       <Link to="/PasswordChange">
        <button className='passwordChange'>비밀번호 변경</button>
        </Link>
        <Link to="/Withdrawal">
        <button className='Withdrawal'>회원 탈퇴</button>
        </Link>
      </div>
      </form>
        <div className='inform_move' style={{ display: 'flex' }}>
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
}
export default Inform;