import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import backIcon from './icons/back.png';
import mypage from './icons/user.png';
import community from './icons/community.png';
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';
import './css/common.css';

const NicknameChange = () => {
    const [currentNickname, setCurrentNickname] = useState('닉네임1'); 
    const [newNickname, setNewNickname] = useState(''); 
    const [name, setName] = useState('이름1');
    const [id, setId] = useState('아이디1');

    const handleNicknameChange = () => {
        setCurrentNickname(newNickname);
        setNewNickname('');
    };

    return (
        <div className='backgroundWithMoveBar undraggable'>
            <div className='centerXWrapper'>
                <div className='pageNameBox'>
                    <Link to="/inform">
                        <img src={backIcon} alt="Back Icon" className="back-icon" />
                    </Link>
                    닉네임 변경
                    <div className='imgBlank'></div>
                </div>
            </div>
            <div className='centerXWrapper'>
                <div>
                    <div className='userInfoCard'>
                        <p className='userInfoCardNickname'>{newNickname || currentNickname}</p>
                        <p className='userInfoCardId'>{id}</p>
                    </div>
                    <div className='userInfoInput'>
                        <div>
                            <label>
                                <input
                                    type="text"
                                    placeholder="닉네임"
                                    onChange={(e) => setNewNickname(e.target.value)}
                                    value={newNickname}
                                />
                            </label>
                        </div>
                        <button onClick={handleNicknameChange}>변경하기</button>
                    </div>
                </div>
            </div>
            <div className='centerXWrapper'>
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
        </div>
    );
};

export default NicknameChange;
