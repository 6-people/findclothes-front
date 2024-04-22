import React, {useEffect, useState} from 'react';
import community from './icons/community.png';
import clothes from './icons/clothes.png';
import EmptyHeart from './icons/empty_heart.png';
import Heart from './icons/heart.png';
import ServiceNameBox from "./component/ServiceNameBox";
import MoveBar from "./component/MoveBar";
import './css/digging.css';
import './css/common.css';

const Digging = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        // 임시 데이터 설정
        const temporaryData = [
            {id: 1, name: '상품1', image: clothes, price: '20,000'},
            {id: 2, name: '상품2', image: clothes, price: '300,000'},
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
                product.id === productId ? {...product, liked: !product.liked} : product
            )
        );
    };

    return (
        <div className='backgroundWithMoveBar undraggable'>
            <ServiceNameBox to="/login"></ServiceNameBox>
            <div className='centerXWrapper'>
                <div className='clothes'>
                    {products.map(product => (
                        <div key={product.id} className="product-box">
                            <div className='good'>
                                <img
                                    src={product.liked ? Heart : EmptyHeart}
                                    alt='Heart'
                                    className="good-image"
                                    onClick={() => toggleHeart(product.id)}
                                />
                                <img src={community} alt="community" className="community-icon-digging"/>
                            </div>
                            <div className='centerXWrapper'>
                                <img src={product.image} alt={product.name} className="product-image"/>
                            </div>
                            <div className="product-info">
                                <div className='product-name'>{product.name}</div>
                                <div className='product-price'>{product.price}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <MoveBar></MoveBar>
        </div>
    );
};

export default Digging;