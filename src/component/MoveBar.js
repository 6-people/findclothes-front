import React from 'react';
import {Link} from 'react-router-dom';
import mypage from '../icons/user.png';
import community from '../icons/community.png';
import digging from '../icons/digging.png';
import home from '../icons/home.png';
import product from '../icons/product.png';
import '../css/signup.css';
import '../css/common.css';

function MoveBar() {
    return (
        <div className='centerXWrapper'>
            <div className='move'>
                <img src={product} alt="product" className="product-icon"/>
                <Link to="/digging">
                    <img src={digging} alt="digging" className="digging-icon" />
                </Link>
                <img src={home} alt="home" className="home-icon"/>
                <img src={community} alt="community" className="community-icon"/>
                <Link to="/mypage">
                    <img src={mypage} alt="mypage" className="mypage-icon"/>
                </Link>
            </div>
        </div>
    );
}

export default MoveBar;