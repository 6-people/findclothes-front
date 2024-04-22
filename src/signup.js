import React, {useState} from 'react';
import MoveBar from './component/MoveBar';
import ServiceNameBox from './component/ServiceNameBox';
import './css/signup.css';
import './css/common.css';

const Signup = () => {
    const [formData, setFormData] = useState({
        id: '',
        password: '',
        confirmPassword: '',
        name: '',
        nickname: '',
        email: '',
    });
    const [isIdDuplicate, setIsIdDuplicate] = useState(false);
    const [isNicknameDuplicate, setIsNicknameDuplicate] = useState(false);
    const [isEmailDuplicate, setIsEmailDuplicate] = useState(false);
    const [isPasswordMatch, setIsPasswordMatch] = useState(true);
    const [idCheckDone, setIdCheckDone] = useState(false);
    const [nicknameCheckDone, setNicknameCheckDone] = useState(false);
    const [emailCheckDone, setEmailCheckDone] = useState(false);

    const handleDuplicateCheck = (type) => {
        const existingIds = ['Id1', 'Id2', 'Id3'];
        const existingNicknames = ['Nickname1', 'Nickname2', 'Nickname3'];
        const existingEmails = ['Email1@example.com', 'Email2@example.com', 'Email3@example.com'];

        if (type === 'id') {
            const isDuplicate = existingIds.includes(formData.id);
            // 아이디 중복 여부를 나타내는 상태에 저장
            setIsIdDuplicate(isDuplicate);
            //중복 확인 완료
            setIdCheckDone(true);
        } else if (type === 'nickname') {
            const isDuplicate = existingNicknames.includes(formData.nickname);
            setIsNicknameDuplicate(isDuplicate);
            setNicknameCheckDone(true);
        } else if (type === 'email') {
            const isDuplicate = existingEmails.includes(formData.email);
            setIsEmailDuplicate(isDuplicate);
            setEmailCheckDone(true);
        }
    };

    const handlePasswordMatch = () => {
        if (formData.confirmPassword === '') {
            setIsPasswordMatch(true);
        } else if (formData.password === formData.confirmPassword) {
            setIsPasswordMatch(true);
        } else {
            setIsPasswordMatch(false);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.password !== formData.confirmPassword) {
            setIsPasswordMatch(false);
            return;
        }
        console.log('회원 가입 정보:', formData);
    };

    function handleChange(e) {
        const {name, value} = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });

        if (name === 'password' || name === 'confirmPassword') {
            setIsPasswordMatch();
        } else if (name === 'id') {
            setIsIdDuplicate(false);
            setIdCheckDone(false);
        } else if (name === 'nickname') {
            setIsNicknameDuplicate(false);
            setNicknameCheckDone(false);
        } else if (name === 'email') {
            setIsEmailDuplicate(false);
            setEmailCheckDone(false);
        }
    }

    return (
        <div className='backgroundWithMoveBar undraggable'>
            <ServiceNameBox to="/login"></ServiceNameBox>
            <div className='centerXWrapper'>
                <div>
                    <form onSubmit={handleSubmit} className='userInfoInput'>
                        <div className='duplicateWrapper'>
                            <input
                                className='duplicateInput'
                                type="text"
                                name="id"
                                value={formData.id}
                                onChange={handleChange}
                                placeholder='아이디'
                            />
                            {!idCheckDone && (
                                <div className='duplicateButton' onClick={() => handleDuplicateCheck('id')}>
                                    중복 확인
                                </div>
                            )}
                            {idCheckDone && isIdDuplicate && (
                                <div className='duplicate-id afterCheck'>
                                    NO
                                </div>
                            )}
                            {idCheckDone && !isIdDuplicate && (
                                <div className='available-id afterCheck'>
                                    OK
                                </div>
                            )}
                        </div>
                        <div>
                            <input type="password" name="password" value={formData.password} onChange={handleChange}
                                   placeholder='비밀번호'/>
                        </div>
                        <div className='duplicateWrapper'>
                            <input
                                className='duplicateInput'
                                type="password"
                                name="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                placeholder='비밀번호 재입력'
                                onBlur={handlePasswordMatch}
                            />
                            {!isPasswordMatch && (
                                <div className='password-match afterCheck'>
                                    NO
                                </div>
                            )}
                            {isPasswordMatch && formData.confirmPassword && (
                                <div className='available-password afterCheck'>
                                    OK
                                </div>
                            )}
                        </div>
                        <div>
                            <input type="text" name="name" value={formData.name} onChange={handleChange}
                                   placeholder='이름'/>
                        </div>
                        <div className='duplicateWrapper'>
                            <input
                                className='duplicateInput'
                                type="text"
                                name="nickname"
                                value={formData.nickname}
                                onChange={handleChange}
                                placeholder='닉네임'
                            />
                            {!nicknameCheckDone && (
                                <div className='duplicateButton' onClick={() => handleDuplicateCheck('nickname')}>
                                    중복 확인
                                </div>
                            )}
                            {nicknameCheckDone && isNicknameDuplicate && (
                                <div className='duplicate-nickname afterCheck'>
                                    NO
                                </div>
                            )}
                            {nicknameCheckDone && !isNicknameDuplicate && (
                                <div className='available-nickname afterCheck'>
                                    OK
                                </div>
                            )}
                        </div>
                        <div className='duplicateWrapper'>
                            <input
                                className='duplicateInput'
                                type="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder='이메일'
                            />
                            {!emailCheckDone && (
                                <div className='duplicateButton' onClick={() => handleDuplicateCheck('email')}>
                                    중복 확인
                                </div>
                            )}
                            {emailCheckDone && isEmailDuplicate && (
                                <div className='duplicate-email afterCheck'>
                                    NO
                                </div>
                            )}
                            {emailCheckDone && !isEmailDuplicate && (
                                <div className='available-email afterCheck'>
                                    OK
                                </div>
                            )}
                        </div>
                        <button type="submit">가입하기</button>
                    </form>
                </div>
            </div>
            <MoveBar></MoveBar>
        </div>
    );
};

export default Signup;
