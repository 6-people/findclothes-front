import React, {useState} from 'react'
import {Link} from "react-router-dom";
import backIcon from './icons/back.png';
import mypage from './icons/user.png';
import community from './icons/community.png';
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';
import './css/mypage.css';
import './css/common.css';

const Mypage = () => {
    const [nickname, setNickname] = useState('닉네임1'); // 기본 닉네임 설정
    const [id, setId] = useState('아이디1'); //변경되 닉네임 업데이트


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
                <div className='userInfoCard mypageCard'>
                    <div>
                        <p className='userInfoCardNickname'>{nickname}</p>
                        <p className='userInfoCardId'>{id}</p>
                    </div>
                    <div className='inform_select'>
                        <Link to="/inform" className="inform">
                            <p>계정정보</p>
                        </Link>
                        <p className='logout'>로그아웃</p>
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

}

export default Mypage;