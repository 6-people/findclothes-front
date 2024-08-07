import {useMediaQuery} from 'react-responsive';
import React from 'react';
import Signup from './signup';
import Login from './login';
import Inform from './inform';
import NicknameChange from './NicknameChange';
import PasswordChange from './PasswordChange';
import Withdrawal from './Withdrawal';
import Mypage from './mypage';
import Digging from './digging';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import KakaoLoginRedirectionHandler from "./handler/KakaoLoginRedirectionHandler";
import NaverLoginRedirectionHandler from "./handler/NaverLoginRedirectionHandler";
import GoogleLoginRedirectionHandler from "./handler/GoogleLoginRedirectionHandler";

function App() {
    // 임시로 화면 크기 감지 꺼둠
    // const isMobile = useMediaQuery({
    //   query: "(max-width:768px)",
    // });
    const isMobile = 1;
    console.log('isMobile:', isMobile);
    return (
        <BrowserRouter>
            <Routes>
                <>
                    {isMobile && <Route path='/' element={<Signup/>}/>}
                    {isMobile && <Route path='/digging' element={<Digging/>}/>}
                    {isMobile && <Route path='/signup' element={<Signup/>}/>}
                    {isMobile && <Route path='/login' element={<Login/>}/>}
                    {isMobile && <Route path='/inform' element={<Inform/>}/>}
                    {isMobile && <Route path='/NicknameChange' element={<NicknameChange/>}/>}
                    {isMobile && <Route path='/PasswordChange' element={<PasswordChange/>}/>}
                    {isMobile && <Route path='/Withdrawal' element={<Withdrawal/>}/>}
                    {isMobile && <Route path='/mypage' element={<Mypage/>}/>}
                    {<Route path='/auth/login/social/kakao' element={<KakaoLoginRedirectionHandler/>}/>}
                    {<Route path='/auth/login/social/naver' element={<NaverLoginRedirectionHandler/>}/>}
                    {<Route path='/auth/login/social/google' element={<GoogleLoginRedirectionHandler/>}/>}
                </>
            </Routes>
            {/*<PC>pc화면입니다.</PC>*/}
        </BrowserRouter>

    );
}

const Mobile = ({children}) => {
    const isMobile = useMediaQuery({
        query: "(max-width:768px)",
    });

    return <>{isMobile && children}</>;
};

const PC = ({children}) => {
    const isPc = useMediaQuery({
        query: "(min-width:769px)",
    });

    return <>{isPc && children}</>;
};

export default App;

