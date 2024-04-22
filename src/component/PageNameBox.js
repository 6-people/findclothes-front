import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../icons/back.png';

const PageNameBox = ({ to, text }) => {
    return (
        <div className='centerXWrapper'>
            <div className='pageNameBox'>
                <Link to={to}>
                    <img src={backIcon} alt="Back Icon" className="back-icon" />
                </Link>
                {text}
                <div className='imgBlank'></div>
            </div>
        </div>
    );
};

export default PageNameBox;
