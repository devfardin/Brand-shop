import React from 'react'
import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className='container mx-auto px-4 text-center h-[100vh] flex justify-center items-center'>
      <div className=''>
      <h1 className='text-5xl text-black font-semibold'>Error 404</h1>
        <h1 className=' text-3xl font-medium text-gray1 pb-4 pt-2'>OPPS!</h1>
        <p className='text-lg text-textColor font-normal mb-7 w-7/12 mx-auto'>The page you’re looking for isn’t available. Try to search again or use the go back button below.</p>

        <button>
        <Link to='/' className='bg-primery hover:bg-hoverColor text-lg py-4 px-8 rounded-full font-medium text-white'> Back to Home </Link>
        </button>
      </div>
    </div>
  )
}

export default Error