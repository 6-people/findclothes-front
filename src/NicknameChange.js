import React, { useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import './css/NicknameChange.css';
import backIcon from './icons/back.png';
import mypage from './icons/user.png';
import community from './icons/community.png';
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';

const NicknameChange= ({ currentNickname, onNicknameChange }) => {
    const [newNickname, setNewNickname] = useState('닉네임1');
    const [name, setName] = useState('이름1');
    const [id, setId] = useState('아이디1');

    const handleNicknameChange = () => {
      onNicknameChange(newNickname);
      setNewNickname('');
    };
  
    return (
      <div>
        <div className='nickname_name'>
        <Link to="/inform">
          <img src={backIcon} alt="Back Icon" className="back-icon" />
          </Link>
          <p>닉네임 변경</p>
        </div>
        <div className='user-info-box'>
        <p className='nickname'>{newNickname}</p>
        <p className='name'>{name}</p>
        <p className='id'>{id}</p>
        </div>
        <div>
        <label>
          <input
            className='NicknameChange_input'
            type="text"
            placeholder="기존 닉네임"
            onChange={(e) => setNewNickname(e.target.value)}
          />
        </label>
        </div>
        <button className='nickname_change' onClick={handleNicknameChange}>변경하기</button>
        <div className='nickname_move' style={{ display: 'flex' }}>
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
  
  export default NicknameChange;