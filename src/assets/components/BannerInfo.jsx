import React from 'react'

const BannerInfo = () => {
  return (
    <div className='container mx-auto px-4 grid grid-cols-1 lg:grid-cols-3 gap-y-4 md:gap-y-0 lg:gap-y-0 my-10 md:divide-x-0 lg:divide-x-2 '>
        <div className='flex gap-x-6 items-center justify-center'>
            <img className='w-[10%] lg:w-[17%]'
            src="https://i.ibb.co/DrG40m4/van.png" alt="" />
            <div>
                <h1 className='text-2xl text-black font-semibold dark:text-white'>Free Shipping</h1>
                <p className='text-lg font-normal text-textColor'>On all order over $1200</p>
            </div>
        </div>
        <div className='flex gap-x-6 items-center justify-center'>
            <img className='w-[10%] lg:w-[17%]'
            src="https://i.ibb.co/KqgcS9M/customer-service.png" alt="" />
            <div>
                <h1 className='text-2xl text-black font-semibold'> Dedicate Support</h1>
                <p className='text-lg font-normal text-textColor'>Quick response 24/7</p>
            </div>
        </div>
        <div className='flex gap-x-6 items-center justify-center'>
            <img className='w-[9%] lg:w-[17%]'
            src="https://i.ibb.co/XYh7VbC/money.png" alt="" />
            <div>
                <h1 className='text-2xl text-black font-semibold'>Money Back Guarantee </h1>
                <p className='text-lg font-normal text-textColor'>Worry free shopping</p>
            </div>
        </div>
    </div>
  )
}

export default BannerInfo