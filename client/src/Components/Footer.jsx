import React from 'react';
import { assets } from '../assets/assets';

const Footer = () => {
  return (
    <footer className="bg-[#e7eafb] text-gray-700">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

        {/* Logo and Description */}
        <div className='md:col-span-2'>
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <img src={assets.logo} alt="logo" className="w-6 h-6" />
            QuckiBlogg
          </h2>
          <p className="mt-4 text-sm text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
            quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
            quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum unde
            quaerat eveniet cumque accusamus atque qui error quo enim fugiat?
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Dashboard</a></li>
            <li><a href="#" className="hover:underline">Blogs</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
            <li><a href="#" className="hover:underline">About Us</a></li>
          </ul>
        </div>


        {/* Follow Us */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <img src={assets.facebook_icon} alt="Facebook" className="w-7 h-7" />
              Facebook
            </li>
            <li className="flex items-center gap-2">
              <img src={assets.googleplus_icon} alt="Google Plus" className="w-7 h-7" />
              Google Plus
            </li>
            <li className="flex items-center gap-2">
              <img src={assets.twitter_icon} alt="Twitter" className="w-7 h-7" />
              Twitter
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-gray-300 text-center text-sm py-4 px-4 text-gray-500">
        &copy; {new Date().getFullYear()} QuckiBlogg. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
