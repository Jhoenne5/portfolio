import React from 'react';
import {AiFillFacebook, AiFillTwitterCircle, 
  AiFillLinkedin} from "react-icons/ai";



export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto flex flex-col items-center">
        {/* Contact Information */}
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold mb-2">Contact Me</h2>
          <p className="text-gray-400">
          Need A JavaScript Developer?
          </p>
          <p className="text-gray-400">
            Feel free to reach out:
          </p>
        </div>

        {/* Contact Icons and Information */}
        <div className="flex justify-center space-x-4 mb-6">
          <a href="https://www.facebook.com/jawnjawnjawnjawnjawn" className="text-gray-400 hover:text-blue-400" target='blank'>
            <AiFillFacebook style={{ width: '30px', height: '30px' }}/>
            <span className="sr-only">Email</span>
          </a>


          <a href="https://www.linkedin.com/in/jhoenne-estrecho-70a958234/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
           <AiFillLinkedin style={{ width: '30px', height: '30px' }}/>
            <span className="sr-only">LinkedIn</span>
          </a>



          <a href="https://twitter.com/home" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
          <AiFillTwitterCircle style={{ width: '30px', height: '30px' }}/>
            <span className="sr-only">Twitter</span>
          </a>
        </div>

        {/* Footer Design Element */}
        <div className="bg-gray-600 h-px w-2/3 mb-6"></div>

        {/* Copyright */}
        <p className="text-gray-400 text-sm">
          &copy; 2023 Jhoenne Estrecho. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};


