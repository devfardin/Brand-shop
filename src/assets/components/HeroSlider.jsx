import React, { useEffect } from 'react'

const HeroSlider = () => {

    return (
        <div className="carousel w-full ">
            <div id="slide1" className="carousel-item relative w-full ">
                <div className='bg-slider1 bg-no-repeat bg-cover w-full relative'>
                    <div className='w-full bg-black opacity-20 h-screen flex items-center justify-start  z-0 '>
                    </div>
                    <div className='w-full md:w-10/12 lg:w-1/2 z-10 absolute top-0 left-16 md:left-24 h-screen flex items-center'>
                        <div>
                            <h1 className='text-xl text-white font-medium uppercase'>Spring / Summer 2023</h1>
                            <h1 className='text-4xl md:text-6xl font-semibold mt-4 text-white'>Woman's Fashion</h1>

                            <button className=" bg-primery hover:bg-hoverColor border-0 text-xl px-8 py-4 font-medium  text-white mt-7 justify-center items-center cursor-pointer block rounded-full"> Shop new collection </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className='bg-slider2 bg-no-repeat bg-cover w-full relative'>
                    <div className='w-full bg-black opacity-20 h-screen flex items-center justify-start  z-0 '>
                    </div>
                    <div className='w-full md:w-10/12 lg:w-1/2 z-10 absolute top-0 left-16 md:left-24 h-screen flex items-center'>
                    <div>
                            <h1 className='text-xl text-white font-medium uppercase'>Spring / Summer 2023</h1>
                            <h1 className='text-4xl md:text-6xl font-semibold mt-4 text-white'>Men's Collection</h1>

                            <button className=" bg-primery hover:bg-hoverColor border-0 text-xl px-8 py-4 font-medium  text-white mt-7 justify-center items-center cursor-pointer block rounded-full"> Shop new collection </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide3" className="carousel-item relative w-full">
                <div className='bg-slider3 bg-no-repeat bg-cover w-full relative'>
                    <div className='w-full bg-black opacity-20 h-screen flex items-center justify-start  z-0 '>
                    </div>
                    <div className='w-full md:w-10/12 lg:w-1/2 z-10 absolute top-0 left-16 md:left-24 h-screen flex items-center'>
                    <div>
                            <h1 className='text-xl text-white font-medium uppercase'>Accessories collection</h1>
                            <h1 className='text-4xl md:text-6xl font-semibold mt-4 text-white'>New Trendy Bags</h1>

                            <button className=" bg-primery hover:bg-hoverColor border-0 text-xl px-8 py-4 font-medium  text-white mt-7 justify-center items-center cursor-pointer block rounded-full"> Shop new collection </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide4" className="carousel-item relative w-full">
                <div className='bg-slider4 bg-no-repeat bg-cover w-full relative'>
                    <div className='w-full bg-black opacity-20 h-screen flex items-center justify-start  z-0 '>
                    </div>
                    <div className='w-full md:w-10/12 lg:w-1/2 z-10 absolute top-0 left-16 md:left-24 h-screen flex items-center'>
                    <div>
                            <h1 className='text-xl text-white font-medium uppercase'>Add some color to your look!</h1>
                            <h1 className='text-4xl md:text-6xl font-semibold mt-4 text-white'>Pink is a New Black!</h1>

                            <button className=" bg-primery hover:bg-hoverColor border-0 text-xl px-8 py-4 font-medium  text-white mt-7 justify-center items-center cursor-pointer block rounded-full"> Shop new collection </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide5" className="btn btn-circle">❯</a>
                </div>
            </div>

            <div id="slide5" className="carousel-item relative w-full">
                <div className='bg-slider5 bg-no-repeat bg-cover w-full relative'>
                    <div className='w-full bg-black opacity-20 h-screen flex items-center justify-start  z-0 '>
                    </div>
                    <div className='w-full md:w-10/12 lg:w-1/2 z-10 absolute top-0 left-16 md:left-24 h-screen flex items-center'>
                    <div>
                            <h1 className='text-xl text-white font-medium uppercase'>Add some color to your look!</h1>
                            <h1 className='text-4xl md:text-6xl font-semibold mt-4 text-white'>Pink is a New Black!</h1>

                            <button className=" bg-primery hover:bg-hoverColor border-0 text-xl px-8 py-4 font-medium  text-white mt-7 justify-center items-center cursor-pointer block rounded-full"> Shop new collection </button>
                        </div>
                    </div>
                </div>
                <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>

        </div>
    )
}
export default HeroSlider