import React from 'react';
import Contactimg from '../../src/assets/contact_img.png';

const Contact = () => {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-3xl font-bold text-center pt-10 border-t border-300">
        <h1>CONTACT US</h1>
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
        <img
          className="w-full md:max-w-[450px] rounded-lg shadow-lg object-cover"
          src={Contactimg}
          alt="Contact Us"
        />
        <div className="flex flex-col justify-center items-start gap-6 text-700">
          <p className="text-lg font-semibold">Our Store</p>
          <p className="text-lg">123 Coffee Lane, Jeddah, Saudi Arabia</p>
          <p className="text-lg">
            Tel: (998) 556-234-3456 <br />
            Email: <a href="mailto:admin@goodmood.com" className="text-orange-600 underline">admin@goodmood.com</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
