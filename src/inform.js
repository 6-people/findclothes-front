import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import ServiceNameBox from "./component/ServiceNameBox";
import MoveBar from "./component/MoveBar";
import './css/inform.css';
import './css/common.css';

const Inform = () => {
    const [nickname, setNickname] = useState('닉네임1'); // 기본 닉네임 설정
    const [id, setId] = useState('아이디1');
    //변경되 닉네임 업데이트
    const handleNicknameChange = (newNickname) => {
        setNickname(newNickname);
    };

    return (
        <div className='backgroundWithMoveBar undraggable'>
            <ServiceNameBox to="/login"></ServiceNameBox>
            <div className='centerXWrapper'>
                <div>
                    <div className='userInfoCard'>
                        <p className='userInfoCardNickname'>{nickname}</p>
                        <p className='userInfoCardId'>{id}</p>
                    </div>
                    <form className='change'>
                        <div>
                            <div>
                                <Link to="/NicknameChange">
                                    <button className='nicknameChange' onNicknameChange={handleNicknameChange}>닉네임 변경
                                    </button>
                                </Link>
                            </div>
                            <div>
                                <Link to="/PasswordChange">
                                    <button className='passwordChange'>비밀번호 변경</button>
                                </Link>
                            </div>
                            <div>
                                <Link to="/Withdrawal">
                                    <button className='Withdrawal'>회원 탈퇴</button>
                                </Link>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            <MoveBar></MoveBar>
        </div>
    );
}
export default Inform;