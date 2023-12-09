import React, { useContext, useEffect, useState } from 'react';
// import Logo from '../../../public/images/logo.png'
import { Link, NavLink } from "react-router-dom";
import { FiLogOut, FiLogIn } from 'react-icons/fi';
import { contextProvider } from './AppContext';
import swal from 'sweetalert';


const Header = () => {
    const { user, userLogOut } = useContext(contextProvider)

// use theme from local storage if available or set light theme
const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
);


    const signOut = () => {
        userLogOut()
            .then(() => {
                swal("success", "Account successfully created. You can now log in.", "success");
                return
            })
            .catch(error => {
                console.log(error)
            })
    }

    const navLink = <>
        <NavLink to="/" className={({ isActive, isPending }) =>
            isPending ? "!text-primery text-lg font-semibold" : isActive ? "!text-primery text-lg font-semibold" : "text-black lg:text-whiteC text-lg font-semibold"}>  Home  </NavLink>
        <NavLink to="/add-product" className={({ isActive, isPending }) =>
            isPending ? "!text-primery text-lg font-semibold" : isActive ? "!text-primery text-lg font-semibold" : "text-black lg:text-whiteC text-lg font-semibold"}> Add Product</NavLink>
        <NavLink to="/my-cart" className={({ isActive, isPending }) =>
            isPending ? "!text-primery text-lg font-semibold" : isActive ? "!text-primery text-lg font-semibold" : "text-black lg:text-whiteC text-lg font-semibold"}> My Cart </NavLink>
        <NavLink to="/shop" className={({ isActive, isPending }) =>
            isPending ? "!text-primery text-lg font-semibold" : isActive ? "!text-primery text-lg font-semibold" : "text-black lg:text-whiteC text-lg font-semibold"}>Shop</NavLink>
        <NavLink to="/contact" className={({ isActive, isPending }) =>
            isPending ? "!text-primery text-lg font-semibold" : isActive ? "!text-primery text-lg font-semibold" : "text-black lg:text-whiteC text-lg font-semibold dark:text-black"}>  Contact  </NavLink>
    </>

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <section className="bg-sectionbg z-0">
            <nav className=" container px-4 py-6 mx-auto lg:flex lg:justify-between lg:items-center">

                <div className="flex items-center justify-between">
                    <Link to="/" className='z-10'>
                        <img className="w-[150px]  object-cover	  sm:h-7" src="https://i.ibb.co/cFzLtDG/Primary-Full-Logomark-Inline-Black-4x-4.webp" alt="" />
                    </Link>

                    {/* Mobile menu button */}
                    <div className="flex lg:hidden">
                        <button
                            onClick={toggleMenu}
                            type="button"
                            className="text-black focus:outline-none focus:text-black "
                            aria-label="toggle menu"
                        >
                            {!isOpen ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M4 8h16M4 16h16" />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="w-6 h-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>

                {/* Mobile Menu open: "block", Menu closed: "hidden" */}
                <div
                    className={`${isOpen ? 'block' : 'hidden'
                        } absolute inset-x-0 z-20 w-full px-6 py-4 transition-all duration-300 ease-in-out bg-white shadow-md lg:bg-transparent lg:dark:bg-transparent lg:shadow-none dark:bg-gray-900 lg:mt-0 lg:p-0 lg:top-0 lg:relative lg:w-auto lg:opacity-100 lg:translate-x-0 lg:flex mt-6 lg:items-center !text-black`}
                >
                    <div className="flex lg:items-center  gap-x-6 flex-col space-y-4 lg:mt-0 lg:flex-row lg:space-y-0 !text-black">
                        {navLink}

                        <div className='flex lg:items-center flex-col lg:flex-row justify-start  gap-x-5 lg:ml-10'>

                            {
                                user?.photoURL && <img className='w-11 h-11 rounded-full' src={user?.photoURL} alt="" />
                            }

                            <h1 className='text-black md:text-black text-lg font-semibold hover:text-hoverColor duration-300'>{user?.displayName} </h1>

                            {
                                user ? <div>
                                    <button onClick={signOut} className=' py-3 px-6 rounded-full bg-primery lg:text-white text-base font-semibold flex gap-x-1 items-center'>  Log Out <FiLogOut className='text-xl'> </FiLogOut> </button>
                                </div>
                                    :
                                    <div>
                                        <NavLink to="/login" className=' py-3 px-6 rounded-full bg-primery text-white text-base font-semibold flex gap-x-1 items-center'>  Login <FiLogIn className='text-xl'> </FiLogIn>  </NavLink>
                                    </div>

                            }
                        </div>
                      

                    </div>
                </div>
            </nav>

        </section>

    );
};

export default Header;
