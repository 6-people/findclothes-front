import React, { useState, useEffect } from 'react';
import axios from 'axios'; // 또는 fetch 등의 라이브러리 사용 가능
import {Link} from 'react-router-dom';
import backIcon from './icons/back.png';
import mypage from './icons/user.png';
import community from './icons/community.png';
import digging from './icons/digging.png';
import home from './icons/home.png';
import product from './icons/product.png';
import clothes from './icons/clothes.png';
import EmptyHeart from './icons/empty_heart.png';
import Heart from './icons/heart.png';
import './css/digging.css';
import './css/common.css';

const Digging = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
  // 임시 데이터 설정
  const temporaryData = [
    { id: 1, name: '상품1', image: clothes, price: '20,000' },
    { id: 2, name: '상품2', image: clothes, price: '300,000' },
  ];
  setProducts(temporaryData);

    /* 
    const fetchProducts = async () => {
       
     try {
        const response = await axios.get('백엔드 url');
        setProducts(response.data);
      } catch (error) {
        console.error('데이터 가져오기 실패: ', error);
      }
      
    };

    fetchProducts();
    */
  }, []);

  //좋아요 선택
  const toggleHeart = (productId) => {
    setProducts(prevProducts =>
      prevProducts.map(product =>
        product.id === productId ? { ...product, liked: !product.liked } : product
      )
    );
  };

  return (
    <div className='backgroundWithMoveBar undraggable'>
      <div className='centerXWrapper'>
                <div className='serviceNameBox'>
                    <Link to="/login">
                        <img src={backIcon} alt="Back Icon" className="back-icon"/>
                    </Link>
                    clothely
                </div>
            </div>
      <div className='centerXWrapper'>
        <div className='clothes'>
        {products.map(product => (
          <div key={product.id} className="product-box">
             <img src={product.image} alt={product.name} className="product-image"/>
             <div className='good'>
              <img
                src={product.liked ? Heart : EmptyHeart}
                alt='Heart'
                className="good-image"
                onClick={() => toggleHeart(product.id)}
              />
             <img src={community} alt="community" className="community-icon"/>
             </div>
            <div className="product-info">
            <h2>{product.name}</h2>
            <p>{product.price}</p>
            </div>
          </div>
        ))}
      </div>
      </div>
      <div className='centerXWrapper'>
                <div className='move'>
                    <img src={product} alt="product" className="product-icon"/>
                    <Link to="/digging">
                    <img src={digging} alt="digging" className="digging-icon" />
                    </Link>
                    <Link to="/home">
                    <img src={home} alt="home" className="home-icon" />
                    </Link>
                    <img src={community} alt="community" className="community-icon"/>
                    <Link to="/mypage">
                        <img src={mypage} alt="mypage" className="mypage-icon"/>
                    </Link>
                </div>
            </div>
      
    </div>
  );
};

export default Digging;