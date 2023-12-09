import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { BsEye, BsEyeSlashFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';
import swal from 'sweetalert';
import { contextProvider } from '../components/AppContext';
const Login = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const { userSignIn, handelGoogle } = useContext(contextProvider)
    const [showPass, setShowpass] = useState(false)
    const googleProvider = new GoogleAuthProvider
    const singUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        userSignIn(email, password)
            .then(() => {
                swal("Welcome", "Login successful.", "success");
                navigate(location?.state ? location.state : '/')
                return
            })
            .catch(() => {
                swal("Login failed", "Please check your credentials. Email doesn't match", "error");
                return
            })
    }

    const haldelGoogle = () => {
        handelGoogle(googleProvider)
            .then(() => {
                swal("Welcome", "Login successful.", "success");
                navigate(location?.state ? location.state : '/')
                return
            })
            .catch(() => {
                swal("Login failed", "Please check your credentials.", "error");
                return
            })
    }
    return (
        <div className='bg-graybg'>
            <div className='py-16 container px-6 mx-auto '>
                <form onSubmit={singUp}>
                    <div className=' md:w-full lg:w-[600px] mx-auto bg-sectionbg p-10 rounded-lg'>

                        <h1 className='text-3xl font-semibold text-black mb-6'>Login your account</h1>
                        <div class="flex flex-col gap-4">
                            <div class="relative h-[55px] w-full">
                                <input required type='email' name='email'
                                    placeholder="Enter your email address"
                                    class=" h-full w-full border border-[#C5C5C5] px-5 font-sans text-xl  font-normal  outline-0   placeholder:text-gray-400 rounded-full" />
                            </div>

                            <div class="relative h-[55px] w-full">
                                <input required type={showPass ? 'text' : 'password'} name='password'
                                    placeholder="Password"
                                    class=" h-full w-full border border-[#C5C5C5] font-sans text-xl  font-normal  px-5  outline-0  placeholder:text-gray-400 rounded-3xl" />
                                <span onClick={() => setShowpass(!showPass)} className='text-2xl absolute top-4 right-6'>
                                    {showPass ? <BsEye></BsEye> : <BsEyeSlashFill></BsEyeSlashFill>}
                                </span>
                            </div>

                            <div>
                                <Link to='/forgote_password' className='text-base ml-3 font-medium text-primery hover:underline'> Lost your password?</Link>
                            </div>

                        </div>
                        <button className=" bg-primery rounded-full text-lg px-8 py-3 font-semibold text-white mt-7 justify-center items-center cursor-pointer w-full block hover:bg-hoverColor  duration-300"> Login </button>
                        <h1 className='text-base text-black font-medium text-center mt-3'>
                            Don't have an account? <Link to='/register' className='text-primery'>Sign Up</Link> </h1>

                        <div className='p-x-10'>
                            <div class="relative flex  items-center  my-6 ">
                                <div class="flex-grow border-t border"></div>
                                <span class="flex-shrink mx-4 text-black1 text-xl font-semibold">OR</span>
                                <div class="flex-grow border-t border"></div>
                            </div>
                            <div onClick={haldelGoogle} className='border rounded-full cursor-pointer px-3 py-3 grid grid-cols-6 items-center'>
                                <div className='justify-center items-center bg-none'>
                                    <FcGoogle className='text-primery text-4xl '></FcGoogle>
                                </div>
                                <h1 className='text-lg font-medium col-span-4 text-center text-gray1'> Continue with Google</h1>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <hr className="h-px bg-[#CECECE] border-none" />
        </div>
    )
}
export default Login



