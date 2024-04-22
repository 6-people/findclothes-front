import React, {useState} from 'react'
import {Link} from "react-router-dom";
import ServiceNameBox from "./component/ServiceNameBox";
import MoveBar from "./component/MoveBar";
import './css/mypage.css';
import './css/common.css';

const Mypage = () => {
    const [nickname, setNickname] = useState('닉네임1'); // 기본 닉네임 설정
    const [id, setId] = useState('아이디1'); //변경되 닉네임 업데이트


    return (
        <div className='backgroundWithMoveBar undraggable'>
            <ServiceNameBox to="/login"></ServiceNameBox>
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
            <MoveBar></MoveBar>
        </div>
    );

}

export default Mypage;