import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './LifeStyleCard.css';
const LifeStyleCard = ({ item }) => {
    const { name, price, productImage1, img1, img2 } = item;
    return (
        <Col>
            <div className='lifeStyleCard mb-4'>
                <img className='lifeStyleCardImg1' src={img1} alt="" style={{ width: '100%', height: '400px' }} />
                <img className='lifeStyleCardImg2' src={img2} alt="" style={{ width: '100%', height: '400px' }} />
                {/* <span className='lifeStyleCardPrice'></span> */}
            </div>
        </Col>
    );
};

export default LifeStyleCard;