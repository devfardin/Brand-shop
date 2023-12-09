import React, { useContext, useState } from 'react'
import { Link, Navigate } from 'react-router-dom'
import { BsEye, BsEyeSlashFill } from 'react-icons/bs';
import { FcGoogle } from 'react-icons/fc';
import { GoogleAuthProvider } from 'firebase/auth';
import swal from 'sweetalert';
import { contextProvider } from '../components/AppContext';


const Register = () => {
  const {updateUser,createNewUser, handelGoogle } = useContext(contextProvider)
  const [showPass, setShowpass] = useState(false)
  const [registrationError, setRegistrationError]=useState('')
  const googleProvider = new GoogleAuthProvider

  var validation = {
    'capital' : /[A-Z]/,
    'spacelSymble' : /[\W_]+/,
};
  const singUp = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const profile = e.target.prifile.value;

    setRegistrationError('')
    if (password.length < 6) {
      setRegistrationError('password must be at least 6 characters long.')
      return
    } else if (!validation.capital.test(password)) {
      setRegistrationError('At least one uppercase letter')
      return
    }else if (!validation.spacelSymble.test(password)) {
      setRegistrationError('At least one special character')
      return
    }

    createNewUser(email, password)
      .then((res) => {
        swal("success", "Account successfully created. You can now log in.", "success");
        console.log(res.user)
        updateUser({name, profile})
        .then(()=>{
         window.location.href = '/';
        })
        return

      })
      .catch((error) => {
        swal("Account creation failed", `Please check your information and try again.`, "error");
        console.log(error);
        <Navigate to='/login'> </Navigate>
        return
      })

  }
  const haldelGoogle = () => {
  
    handelGoogle(googleProvider)
      .then(() => {
        swal("success", "Account successfully created. You can now log in.", "success");
        return
      })
      .catch(() => {
        swal("Account creation failed", " Please check your information and try again.", "error");
        return
      })
  }


  return (
<div className='bg-graybg'>
<div className='py-16 container px-6 mx-auto'>
      <form onSubmit={singUp}>
        <div className=' md:w-full lg:w-[600px] mx-auto bg-sectionbg p-10 rounded-lg'>
            <h1 className='text-3xl font-semibold text-black mb-6'>Create a new Account </h1>
            <div class="flex flex-col gap-5">
              <div class="relative h-[55px] w-full">
                <input type='text' name='name'
                  placeholder="Enter your name"
                  class="  h-full w-full border border-[#C5C5C5] px-5 font-sans text-xl  font-normal  outline-0   placeholder:text-gray-400 rounded-full" />
              </div>

              <div class="relative h-[55px] w-full">
                <input type='text' name='prifile'
                  class=" h-full w-full border border-[#C5C5C5] px-5 font-sans text-xl  font-normal  outline-0   placeholder:text-gray-400 rounded-full" placeholder='Profile Url' />
              </div>

              <div class="relative h-[55px] w-full">
                <input required type='email' name='email'
                  placeholder="Enter your email address"
                  class="  h-full w-full border border-[#C5C5C5] px-5 font-sans text-xl  font-normal  outline-0   placeholder:text-gray-400 rounded-full" />
              </div>
              <div class="relative h-[55px] w-full">
                <input required type={showPass ? 'text' : 'password'} name='password'
                  placeholder="Password"
                  class="  h-full w-full border border-[#C5C5C5] px-5 font-sans text-xl  font-normal  outline-0   placeholder:text-gray-400 rounded-full" />
                <span onClick={() => setShowpass(!showPass)} className='text-2xl absolute top-4 right-6'>
                  {showPass ? <BsEye></BsEye> : <BsEyeSlashFill></BsEyeSlashFill>}
                </span>
              </div>
              <div>
                {
                  registrationError && <p className='text-lg text-red-400 font-medium'> {registrationError} </p>
                }
              </div>
            </div>
            <button className=" bg-primery rounded-full text-lg px-8 py-3 font-semibold text-white mt-3 justify-center items-center cursor-pointer w-full block hover:bg-hoverColor  duration-300"> Sign up </button>
            <h1 className='text-base text-black font-medium text-center mt-3'>Already have an account? <Link to='/login' className='text-primery'>Sign in</Link> </h1>
          

          <div className='p-x-10'>
            <div class="relative flex  items-center  my-6 ">
              <div class="flex-grow border-t border"></div>
              <span class="flex-shrink mx-4 text-black1 text-xl font-medium">OR</span>
              <div class="flex-grow border-t border"></div>
            </div>

            <div onClick={haldelGoogle} className='border border-primery rounded-full cursor-pointer px-3 py-3 grid grid-cols-6 items-center'>
              <div className='justify-center items-center bg-none'>
                <FcGoogle className='text-secondary text-4xl '></FcGoogle>
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
export default Register

