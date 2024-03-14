import React, {useState} from 'react';
import {Link} from 'react-router-dom';
import backIcon from './icons/back.png';
import mypage from './icons/user.png';
import community from './icons/community.png';
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';
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
            <div className='centerXWrapper'>
                <div className='pageNameBox'>
                    <Link to="/inform">
                        <img src={backIcon} alt="Back Icon" className="back-icon"/>
                    </Link>
                    회원 탈퇴
                    <div className='imgBlank'></div>
                </div>
            </div>

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
};

export default Withdrawal;
