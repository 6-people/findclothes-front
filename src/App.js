
import { useMediaQuery } from 'react-responsive';
import React from 'react';
import Signup from './signup';
import Login from './login';
import Inform from './inform';
import NicknameChange from './NicknameChange';
import PasswordChange from './PasswordChange';
import Withdrawal from './Withdrawal';
import Mypage from './mypage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });
  console.log('isMobile:', isMobile);
  return (
    <BrowserRouter>
      <Routes>
        <>
          {isMobile && <Route path='/' element={<Signup/>} />}
          {isMobile && <Route path='/signup' element={<Signup/>} />}
          {isMobile && <Route path='/login' element={<Login/>} />}
          {isMobile && <Route path='/inform' element={<Inform/>} />}
          {isMobile && <Route path='/NicknameChange' element={<NicknameChange/>} />}
          {isMobile && <Route path='/PasswordChange' element={<PasswordChange/>} />}
          {isMobile && <Route path='/Withdrawal' element={<Withdrawal/>} />}
          {isMobile && <Route path='/mypage' element={<Mypage/>} />}
        </>
      </Routes>
      <PC>pc화면입니다.</PC>
    </BrowserRouter>
   
  );
}

const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({
    query: "(max-width:768px)",
  });

  return <>{isMobile && children}</>;
};

const PC = ({ children }) => {
  const isPc = useMediaQuery({
    query: "(min-width:769px)",
  });

  return <>{isPc && children}</>;
};

export default App;

