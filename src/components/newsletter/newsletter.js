import React from 'react';
import './newsletter.css';  

const Newsletter = ({ theme }) => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <div className={`newsletter ${theme}`}>
      <p>Subscribe now & get 20% off</p>
      <form onSubmit={onSubmitHandler}>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">SUBSCRIBE</button>
      </form>
    </div>
  );
};

export default Newsletter;
