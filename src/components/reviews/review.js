import React from 'react';
import './reviews.css'; 

export default function Reviews({ theme }) {
  return (
    <div className={`reviews ${theme}`}>
      <h2>What Our Customers Are Saying</h2>
      <div className="reviews-cards">
        <div className="reviews-card">
          <p>"Great quality and fast delivery. Highly recommend!"</p>
          <h4>- John D.</h4>
        </div>
        <div className="reviews-card">
          <p>"Amazing customer service and easy returns. Love shopping here."</p>
          <h4>- Sarah M.</h4>
        </div>
        <div className="reviews-card">
          <p>"The best online shopping experience I've ever had."</p>
          <h4>- Emily W.</h4>
        </div>
      </div>
    </div>
  );
}
