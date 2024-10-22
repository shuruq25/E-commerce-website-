import React from 'react';
import exchange from '../../assets/exchange_icon.png';
import quality from '../../assets/quality_icon.png';
import support from '../../assets/support_img.png';
import './policy.css';

const Policy = ({ theme }) => {
  return (
    <div className={`policy-container ${theme}`}>
      <div className="policy-item">
        <img src={exchange} alt="Exchange Policy" />
        <p>Easy Exchange Policy</p>
        <p>We offer a hassle-free, easy exchange policy</p>
      </div>

      <div className="policy-item">
        <img src={quality} alt="Return Policy" />
        <p>7 Days Return Policy</p>
        <p>We provide a 7-day free return policy</p>
      </div>

      <div className="policy-item">
        <img src={support} alt="Customer Support" />
        <p>Best Customer Support</p>
        <p>We provide 24/7 customer support</p>
      </div>
    </div>
  );
};

export default Policy;
