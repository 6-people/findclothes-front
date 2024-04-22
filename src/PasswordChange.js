import React, {useState} from 'react';
import PageNameBox from "./component/PageNameBox";
import MoveBar from "./component/MoveBar";
import './css/passwordChange.css';
import './css/common.css';

const PasswordChange = ({onPasswordChange}) => {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [Password, setPassword] = useState('');
    const [Nickname, setNickname] = useState('닉네임1');
    const [name, setName] = useState('이름1');
    const [id, setId] = useState('아이디1');
    const [passwordMismatch, setPasswordMismatch] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(false); 

    const handlePasswordChange = () => {

        if (newPassword !== confirmPassword) {
            setPasswordMismatch(true);
            setPasswordMatch(false); 
            return;
        }

        setPasswordMismatch(false);
        setPasswordMatch(true); 

        onPasswordChange(newPassword);

        setNewPassword('');
        setConfirmPassword('');
    };

    return (
        <div className='backgroundWithMoveBar undraggable'>
            <PageNameBox to="/inform" text="비밀번호 변경"></PageNameBox>
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
                                    placeholder="기존 비밀번호"
                                    value={Password}
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </label>
                        </div>
                        <div>
                            <label>
                                <input
                                    type="password"
                                    placeholder="새 비밀번호"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                />
                            </label>
                        </div>
                        <div className='pwCheckWrapper'>
                            <label>
                                <input
                                    className='pwCheckInput'
                                    type="password"
                                    placeholder="새 비밀번호 확인"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                />
                            </label>
                            {passwordMismatch && <div className="password-mismatch">NO</div>} 
                        </div>
                        <button onClick={handlePasswordChange}>변경하기</button>
                    </div>
                </div>
            </div>
            <MoveBar></MoveBar>
        </div>
    );
}; 


export default PasswordChange;

