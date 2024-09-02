import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import backIcon from './icons/back.png';
import mypage from './icons/user.png';
import communityIcon from './icons/community.png'; 
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';
import './css/home.css';
import './css/common.css';
import Clothes from './icons/clothes.png';
import EmptyHeart from './icons/empty_heart.png';
import Heart from './icons/heart.png';

const Home = () => {
    const [clothes, setClothes] = useState([]);

    useEffect(() => {
        const temporaryData = [
            { id: 1, name: '상품명', image: Clothes, price: '1,000,000원'},
            { id: 2, name: '상품명', image: Clothes, price: '2,000,000원'},
            { id: 3, name: '상품명', image: Clothes, price: '3,000,000원'},
        ];
        setClothes(temporaryData);
    }, []);

    // 좋아요 선택
    const toggleHeart = (clothesId) => {
        setClothes(prevClothes =>
            prevClothes.map(clothes =>
                clothes.id === clothesId ? { ...clothes, liked: !clothes.liked } : clothes
            )
        );
    };

    return (
        <div className='backgroundWithMoveBar undraggable'>
            <div className='centerXWrapper'>
                <div className='serviceNameBox'>
                    <Link to="/login">
                        <img src={backIcon} alt="Back Icon" className="back-icon" />
                    </Link>
                    <span className="service-name">clothely</span>
                </div>
            </div>
            <div className='centerXWrapper'>
               
                <div className='product'>
                    {clothes.map(item => (
                        <div key={item.id} className="clothes-box">
                            <img src={item.image} alt={item.name} className="clothes-image"/>
                            <div className='Good'>
                                <img
                                    src={item.liked ? Heart : EmptyHeart}
                                    alt='Heart'
                                    className="Good-image"
                                    onClick={() => toggleHeart(item.id)}
                                />
                                <img src={communityIcon} alt="community" className="community-icon"/>
                            </div>
                            <div className="clothes-info">
                                <h2>{item.name}</h2>
                                <p>{item.price}</p>
                            </div>
                        </div>
                    ))}
                     <div className='see-more'>전체 보기 +</div>
                </div>
            </div>
            <div className='centerXWrapper'>
                <div className='move'>
                    <img src={product} alt="product" className="product-icon" />
                    <Link to="/digging">
                        <img src={digging} alt="digging" className="digging-icon" />
                    </Link>
                    <Link to="/home">
                        <img src={home} alt="home" className="home-icon" />
                    </Link>
                    <img src={communityIcon} alt="community" className="community-icon" />
                    <Link to="/mypage">
                        <img src={mypage} alt="mypage" className="mypage-icon" />
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default Home;