import React from 'react';
import Aboutimg from '../../src/assets/about.jpg';

const About = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-3xl font-bold text-center pt-8 border-t border-300">
        <h1>ABOUT US</h1>
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-10">
        <img
          className="w-full md:max-w-[450px] rounded-lg shadow-lg object-cover"
          src={Aboutimg}
          alt="About Our Coffee"
        />
        <div className="flex flex-col justify-center gap-6 text-700">
          <p className="text-lg">
            Welcome to Good Mood Coffee! We believe that every cup of coffee should bring joy and comfort to your day.
          </p>
          <p className="text-lg">
            Our carefully sourced coffee beans are selected for their quality and flavor, ensuring that each brew is an experience to savor. Join us on a journey through rich aromas and delightful tastes, and discover your new favorite blend.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
