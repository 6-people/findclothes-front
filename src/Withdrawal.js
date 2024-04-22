import React, {useState} from 'react';
import MoveBar from "./component/MoveBar";
import PageNameBox from "./component/PageNameBox";
import './css/common.css';

const Withdrawal = ({onWithdrawal}) => {
    const [password, setPassword] = useState('');
    const [Nickname, setNickname] = useState('닉네임1');
    const [name, setName] = useState('이름1');
    const [id, setId] = useState('아이디1');

    const handleWithdrawal = () => {
        if (password !== '') {

            const isConfirmed = window.confirm('정말로 탈퇴하시겠습니까?');

            if (isConfirmed) {

                onWithdrawal(password);

                alert('탈퇴 완료되었습니다.');
            }
        } else {
            console.log('비밀번호가 다릅니다.');
        }
    };

    return (
        <div className='backgroundWithMoveBar undraggable'>
            <PageNameBox to="/inform" text="회원 탈퇴"></PageNameBox>
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
                                    placeholder="비밀번호"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>
                        </div>
                        <button onClick={handleWithdrawal}>탈퇴</button>
                    </div>
                </div>
            </div>
            <MoveBar></MoveBar>
        </div>
    );
};

export default Withdrawal;
