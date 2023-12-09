import React from 'react'
import { Link } from 'react-router-dom'


import swal from 'sweetalert';
const ForgotePassword = () => {
  
    const singUp = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;

        login(email, password)
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



    return (
        <div className='bg-graybg'>
            <div className='py-16 container px-6 mx-auto '>
                <form onSubmit={singUp}>
                    <div className=' md:w-full lg:w-[600px] mx-auto bg-sectionbg p-10 rounded-lg'>

                        <h1 className='text-3xl font-semibold text-black mb-6'>Forgot Password</h1>
                        <div class="flex flex-col gap-4">
                            <div class="relative h-[55px] w-full">
                                <input required type='email' name='email'
                                    placeholder="Enter your email"
                                    class=" h-full w-full border border-[#C5C5C5] px-5 font-sans text-xl  font-normal  outline-0   placeholder:text-gray-400 rounded-full" />
                            </div>

                        </div>
                        <button className=" bg-primery rounded-full text-lg px-8 py-3 font-semibold text-white mt-7 justify-center items-center cursor-pointer w-full block hover:bg-hoverColor  duration-300"> Get new password </button>
                        <h1 className='text-base text-black font-medium text-center mt-3'>Already have an account?<Link to='/login' className='text-primery'> Login</Link> </h1>

                    

                    </div>
                </form>
            </div>
            
        </div>
    )
}

export default ForgotePassword



