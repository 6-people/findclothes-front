import {Link} from "react-router-dom";
import React from "react";
import backIcon from "../icons/back.png";
import '../css/common.css';

const ServiceNameBox = ({ to }) => {
    return (
        <div className='centerXWrapper'>
            <div className='serviceNameBox'>
                <Link to={to}>
                    <img src={backIcon} alt="Back Icon" className="back-icon"/>
                </Link>
                clothely
            </div>
        </div>
    );
};

export default ServiceNameBox;