import React, {useState} from 'react';
import PageNameBox from "./component/PageNameBox";
import MoveBar from "./component/MoveBar";
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
            <PageNameBox to="/inform" text="닉네임 변경"></PageNameBox>
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
            <MoveBar></MoveBar>
        </div>
    );
};

export default NicknameChange;
