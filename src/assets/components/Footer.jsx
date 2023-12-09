import React from 'react'
// import footerLogo from '../../../public/images/FooterLogo.png'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';
const Footer = () => {
  return (
    <footer className="bg-[#F3F3F3] pt-14">
      <div className="container p-6 mx-auto">
        <div className="lg:flex">
          <div className="w-full -mx-6 lg:w-2/5">
            <div className="px-6">
              <h3 className="text-black1 font-semibold text-xl"> Newsletter </h3>
              <p className="max-w-sm mt-3 text-black2 text-base font-normal">
                Subscribe now to receive monthly news & personalised offers!
              </p>
              <button className='py-1 hover:bg-hoverColor mt-4 duration-300 hover:text-white px-6 border border-primery rounded-full font-normal text-lg '>Subscribe</button>
              <div className="flex mt-6 gap-x-3">
                
                <div className='w-8 h-8 border border-primery rounded-full flex justify-center items-center bg-none'>
                  <FaFacebookF className='text-primery cursor-pointer text-lg '></FaFacebookF>
                </div>
                <div className='w-8 h-8 border border-primery rounded-full flex justify-center items-center bg-none'>
                  <FaLinkedinIn className='text-primery cursor-pointer text-lg '></FaLinkedinIn>
                </div>
                <div className='w-8 h-8 border border-primery rounded-full flex justify-center items-center bg-none'>
                  <FaTwitter className='text-primery cursor-pointer text-lg '></FaTwitter>
                </div>
                <div className='w-8 h-8 border border-primery rounded-full flex justify-center items-center bg-none'>
                  <FaGithub className='text-primery cursor-pointer text-lg '></FaGithub>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 lg:mt-0 lg:flex-1">

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              <div>
                <h3 className="text-black1 font-semibold text-xl">Company</h3>
                <Link to='/' className="block mt-2 text-lg text-gray1 font-normal hover:underline">
                  About Us
                </Link>
                <Link to='/about' className="block mt-2 text-lg text-gray1 font-normal hover:underline">
                  Careers
                </Link>
                <Link to='' className="block mt-2 text-lg text-gray1 font-normal hover:underline">
                  Store Locator
                </Link>

                <Link to='/contact' className="block mt-2 text-lg text-gray1 font-normal hover:underline">
                  Contact Us
                </Link>
              </div>

              <div>
                <h3 className="text-black1 font-semibold text-xl">Customer Care</h3>
                <Link to='/' className="block mt-2 text-lg text-gray1 font-normal hover:underline">
                  Size Guide
                </Link>
                <Link to='/about' className="block mt-2 text-lg text-gray1 font-normal hover:underline">
                  Help & FAQs
                </Link>
                <Link to='' className="block mt-2 text-lg text-gray1 font-normal hover:underline">
                  Store Locator
                </Link>

                <Link to='/contact' className="block mt-2 text-lg text-gray1 font-normal hover:underline">

                  Refer A Friend
                </Link>
              </div>

              <div>
                <h3 className="text-black1 font-semibold text-xl">Quick Links</h3>
                <Link to='/' className="block mt-2 text-lg text-gray1 font-normal hover:underline">
                  Duties & Taxes

                </Link>
                <Link to='/about' className="block mt-2 text-lg text-gray1 font-normal hover:underline">
                  Shipping Info
                </Link>
                <Link to='' className="block mt-2 text-lg text-gray1 font-normal hover:underline">
                  Privacy Policy
                </Link>

                <Link to='/contact' className="block mt-2 text-lg text-gray1 font-normal hover:underline">
                  Term Conditions
                </Link>
              </div>
              <div>
                <h3 className="text-black1 font-semibold text-xl">Follow Us</h3>
                <Link to='/' className="block mt-2 text-lg text-gray1 font-normal hover:underline">
                  Instagram

                </Link>
                <Link to='/about' className="block mt-2 text-lg text-gray1 font-normal hover:underline">
                  Facebook
                </Link>
                <Link to='' className="block mt-2 text-lg text-gray1 font-normal hover:underline">
                  Pinterest
                </Link>

                <Link to='/contact' className="block mt-2 text-lg text-gray1 font-normal hover:underline">
                  Tiktok
                </Link>
              </div>

            </div>
          </div>
        </div>
        <hr className="h-px my-6 bg-[#CECECE] border-none" />
        <div>
          <p className="text-center text-gray1 text-lg font-normal">© MyStore 2023 - All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
