import React from 'react';
import us from '../src/assets/US.png';
import img from '../src/assets/Vector.svg';  // Instagram
import img2 from '../src/assets/ash.svg';      // LinkedIn
import google from '../src/assets/google.png';
import master from '../src/assets/master.png';
import paypal from '../src/assets/payp.png';
import amex from '../src/assets/amex.png';
import app from '../src/assets/app.png';
import pay from '../src/assets/pay.png';
import arrow from '../src/assets/arrow-right.png';


function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      <div className="max-w-screen-xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Newsletter */}
        <div>
          <h2 className="text-2xl font-bold mb-3 uppercase">Be the first to know</h2>
          <p className="text-sm text-white hidden md:block">
            Sign up for updates from mettā muse.
          </p>
          <p className="text-sm text-white block md:hidden">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry. This is simply dummy text.
          </p>
          <div className="flex mt-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="p-2 border border-gray-300 bg-white text-[#BFC8CD] mr-4 rounded-md"
            />
            <button className="border-[#BFC8CD] border text-[#BFC8CD] px-4 py-2 rounded-md">Subscribe</button>
          </div>
        </div>

        {/* Contact Info */}
        <div>
          <div className='border-t border-white mt-2 mb-6 block md:hidden '></div>
          <h3 className="text-lg font-semibold mb-3 uppercase block md:hidden ">call us</h3>
          <h3 className="text-lg font-semibold mb-3 hidden md:block ">CONTACT US</h3>
          <ul className="space-y-2 text-sm text-gray-400">
          <div className="flex flex-col lg:flex-col sm:flex-row  sm:space-x-4">
          <li className="text-white text-sm">+44 221 133 5360</li>
          <li className="text-white text-sm">customercare@mettamuse.com</li>
        </div>

            <div className='border-t border-white mt-6 mb-6 block md:hidden '></div>
            <li className="text-white text-lg uppercase font-semibold mt-4">Currency</li>
            <div className="flex items-center space-x-2">
              <img src={us} alt="US Flag" className="w-6 h-6" />
              <span className="text-white text-[10px] relative top-[1px]">◆</span>

              <li className="text-white text-sm">USD</li>
            </div>
            <li className="text-white text-sm hidden md:block">
              Transactions will be completed in Euros and a currency reference is available on hover.
            </li>
          </ul>
        </div>
      </div>

      {/* Footer Links */}
      <div className="lg:border-t lg:border-gray-600 lg:mt-8 lg:mx-20">
        <div className="max-w-screen-xl mx-auto px-4 lg:py-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 lg:gap-6">
          {/* Column 1 */}
          <div>
          <div className='border-t-2 border-white mt-2 mb-2 block md:hidden '></div>
          <div className="flex justify-between items-center mb-4 mt-3 md:mb-3">
  <h3 className="text-lg font-semibold">mettā muse</h3>
  <img src={arrow} alt="arrow" className="h-4 w-4 block md:hidden" />
</div>

            <div className='border-b border-white mt-2 mb-2 block md:hidden '></div>
            <ul className="space-y-2 text-sm text-gray-400 hidden md:block">
              <li className="text-white cursor-pointer">About Us</li>
              <li className="text-white cursor-pointer">Stories</li>
              <li className="text-white cursor-pointer">Artisans</li>
              <li className="text-white cursor-pointer">Boutiques</li>
              <li className="text-white cursor-pointer">Contact Us</li>
              <li className="text-white cursor-pointer">EU Compliances Docs</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
          <div className="flex justify-between items-center mb-4 mt-3 md:mb-3">
  <h3 className="text-lg font-semibold">Quick Links</h3>
  <img src={arrow} alt="arrow" className="h-4 w-4 block md:hidden" />
</div>

            <div className='border-b border-white mt-2 mb-2 block md:hidden '></div>
            <ul className="space-y-2 text-sm text-gray-400 hidden md:block">
              <li className="text-white cursor-pointer">Orders & Shipping</li>
              <li className="text-white cursor-pointer">Join/Login as a Seller</li>
              <li className="text-white cursor-pointer">Return & Refunds</li>
              <li className="text-white cursor-pointer">FAQs</li>
              <li className="text-white cursor-pointer">Privacy Policy</li>
              <li className="text-white cursor-pointer">Terms & Conditions</li>
            </ul>
          </div>

          {/* Column 3 - Social */}
          <div>
            <div className="mt-4">
            <div className="flex justify-between items-center mb-4 md:mb-2">
  <h1 className="text-white font-semibold uppercase">Follow Us</h1>
  <img src={arrow} alt="arrow" className="h-4 w-4 block md:hidden" />
</div>

                <div className='border-b border-white mt-2 block md:hidden '></div>
                <div className="lg:flex space-x-4 hidden md:block">
                <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <div className="border rounded-full p-2 hover:bg-gray-700 transition">
                    <img src={img2} alt="LinkedIn" className="w-5 h-5 cursor-pointer" />
                    </div>
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                    <div className="border rounded-full p-2 hover:bg-gray-700 transition">
                    <img src={img} alt="Instagram" className="w-5 h-5 cursor-pointer" />
                    </div>
                </a>
                </div>
            </div>

            <div className="mt-6">
                <h1 className="mb-2 text-white font-semibold">mettā muse ACCEPTS</h1>
                <div className="flex flex-wrap gap-4">
                <div className="bg-white rounded-md p-2 shadow-md">
                    <img src={google} alt="Google Pay" className="h-4" />
                </div>
                <div className="bg-white rounded-md p-2 shadow-md">
                    <img src={master} alt="MasterCard" className="h-4" />
                </div>
                <div className="bg-white rounded-md p-2 shadow-md">
                    <img src={paypal} alt="PayPal" className="h-4" />
                </div>
                <div className="bg-[#006FCF] rounded-md p-2 shadow-md">
                    <img src={amex} alt="American Express" className="h-4" />
                </div>
                <div className="bg-white rounded-md p-2 shadow-md">
                    <img src={app} alt="Apple Pay" className="h-4" />
                </div>
                <div className="bg-[#5A31F4] rounded-md p-2 shadow-md">
                    <img src={pay} alt="Paytm" className="h-4" />
                </div>
                </div>
            </div>
            </div>
        </div>
  </div>
      <div className="mt-6 text-center text-sm text-gray-400">
  <h1>Copyright © 2023 mettamuse. All rights reserved.</h1>
</div>
    </footer>
  );
}

export default Footer;
