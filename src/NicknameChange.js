<<<<<<< HEAD
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
=======
import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
>>>>>>> 7833f41aaa87d86056b2db23b44b309751b2978d
import backIcon from './icons/back.png';
import mypage from './icons/user.png';
import community from './icons/community.png';
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';
import './css/common.css';

<<<<<<< HEAD
const NicknameChange = () => {
    const [currentNickname, setCurrentNickname] = useState('닉네임1'); 
    const [newNickname, setNewNickname] = useState(''); 
=======
const NicknameChange = ({currentNickname, onNicknameChange}) => {
    const [newNickname, setNewNickname] = useState('닉네임1');
>>>>>>> 7833f41aaa87d86056b2db23b44b309751b2978d
    const [name, setName] = useState('이름1');
    const [id, setId] = useState('아이디1');

    const handleNicknameChange = () => {
<<<<<<< HEAD
        setCurrentNickname(newNickname);
=======
        onNicknameChange(newNickname);
>>>>>>> 7833f41aaa87d86056b2db23b44b309751b2978d
        setNewNickname('');
    };

    return (
        <div className='backgroundWithMoveBar undraggable'>
            <div className='centerXWrapper'>
                <div className='pageNameBox'>
                    <Link to="/inform">
<<<<<<< HEAD
                        <img src={backIcon} alt="Back Icon" className="back-icon" />
=======
                        <img src={backIcon} alt="Back Icon" className="back-icon"/>
>>>>>>> 7833f41aaa87d86056b2db23b44b309751b2978d
                    </Link>
                    닉네임 변경
                    <div className='imgBlank'></div>
                </div>
            </div>
            <div className='centerXWrapper'>
                <div>
                    <div className='userInfoCard'>
<<<<<<< HEAD
                        <p className='userInfoCardNickname'>{newNickname || currentNickname}</p>
=======
                        <p className='userInfoCardNickname'>{newNickname}</p>
>>>>>>> 7833f41aaa87d86056b2db23b44b309751b2978d
                        <p className='userInfoCardId'>{id}</p>
                    </div>
                    <div className='userInfoInput'>
                        <div>
                            <label>
                                <input
                                    type="text"
<<<<<<< HEAD
                                    placeholder="닉네임"
                                    onChange={(e) => setNewNickname(e.target.value)}
                                    value={newNickname}
=======
                                    placeholder="기존 닉네임"
                                    onChange={(e) => setNewNickname(e.target.value)}
>>>>>>> 7833f41aaa87d86056b2db23b44b309751b2978d
                                />
                            </label>
                        </div>
                        <button onClick={handleNicknameChange}>변경하기</button>
                    </div>
                </div>
            </div>
            <div className='centerXWrapper'>
                <div className='move'>
<<<<<<< HEAD
                    <img src={product} alt="product" className="product-icon" />
                    <img src={digging} alt="digging" className="digging-icon" />
                    <img src={home} alt="home" className="home-icon" />
                    <img src={community} alt="community" className="community-icon" />
                    <Link to="/mypage">
                        <img src={mypage} alt="mypage" className="mypage-icon" />
=======
                    <img src={product} alt="product" className="product-icon"/>
                    <img src={digging} alt="digging" className="digging-icon"/>
                    <img src={home} alt="home" className="home-icon"/>
                    <img src={community} alt="community" className="community-icon"/>
                    <Link to="/mypage">
                        <img src={mypage} alt="mypage" className="mypage-icon"/>
>>>>>>> 7833f41aaa87d86056b2db23b44b309751b2978d
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default NicknameChange;
<<<<<<< HEAD
=======

// TODO : 닉네임 입력란을 다 지우면 유저 정보에서 닉네임 공간이 사라짐
// TODO : js와 css 파일명을 카멜케이스, 파스칼케이스 둘 다 쓰고 있는데 명명규칙 서치 후 통일
>>>>>>> 7833f41aaa87d86056b2db23b44b309751b2978d
