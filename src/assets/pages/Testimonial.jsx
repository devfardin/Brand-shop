import React from 'react'

const Testimonial = () => {
  return (
    <div className='bg-Testimonials bg-no-repeat bg-cover bg-center mt-10'>
    <div className='container mx-auto px-6'>
      <div className='py-20 '>
        <h1 className=' text-white text-center font-semibold text-4xl'>What people say about Us</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-14 gap-10 '>
          {/* Item one */}
          <div data-aos="fade-up">
            <div  className='bg-gray-700 rounded-t-md py-10 px-7 '>
            <div className="rating mb-2">
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400"/>
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400"  />
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400"/>
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" checked />
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400"/>
            </div>
            <p className='text-lg italic text-white'>I appreciate your hospital really good environment and excellent patient care. You are continuously handle patient treatment wonderfully. Thanks for your great service. Please enjoy the chocolates.</p>
            </div>

            <div className='bg-gray-300 py-3 px-7 flex gap-x-5 rounded-b-md'>
              <img className='w-12 h-12 rounded-full' src='https://i.ibb.co/FDMSysL/testimonial-02.jpg' alt="" />
              <div>
                <h1 className='text-lg text-black font-medium'>Amanda Kinedy</h1>
                <h1 className='text-base text-textColor font-medium'>Hematology</h1>
              </div>

            </div>
          </div>
          {/* Item Two */}
          <div data-aos="fade-down">
            <div className='bg-gray-700 rounded-t-md py-10 px-7 '>
            <div className="rating mb-2">
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400"/>
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400"  />
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400"/>
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" checked />
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400"/>
            </div>
            <p className='text-lg italic text-white'>I appreciate your hospital really good environment and excellent patient care. You are continuously handle patient treatment wonderfully. Thanks for your great service. Please enjoy the chocolates.</p>
            </div>

            <div className='bg-gray-300 py-3 px-7 flex gap-x-5 rounded-b-md'>
              <img className='w-12 h-12 rounded-full' src='https://i.ibb.co/8Ntys1y/testimonial-04.jpg' alt="" />
              <div>
                <h1 className='text-lg text-black font-medium'>Amanda Kinedy</h1>
                <h1 className='text-base text-textColor font-medium'>Hematology</h1>
              </div>

            </div>
          </div>

          {/* Item Three */}
          <div data-aos="fade-up">
            <div className='bg-gray-700 rounded-t-md py-10 px-7 '>
            <div className="rating mb-2">
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400"/>
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400"  />
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400"/>
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400" checked />
              <input type="radio" name="rating-1" className="mask mask-star bg-yellow-400"/>
            </div>
            <p className='text-lg italic text-white'>I appreciate your hospital really good environment and excellent patient care. You are continuously handle patient treatment wonderfully. Thanks for your great service. Please enjoy the chocolates.</p>
            </div>

            <div className='bg-gray-300  py-3 px-7 flex gap-x-5 rounded-b-md'>
              <img className='w-12 h-12 rounded-full' src='https://i.ibb.co/bbWsqDW/testimonial-01.jpg' alt="" />
              <div>
                <h1 className='text-lg text-black font-medium'>Amanda Kinedy</h1>
                <h1 className='text-base text-textColor font-medium'>Hematology</h1>
              </div>

            </div>
          </div>

        </div>
      </div>

    </div>
  </div>
  )
}

export default Testimonial