import React, { useContext } from 'react'
import { contextProvider } from './AppContext'
import { useParams } from 'react-router-dom'
import { ImStarFull } from 'react-icons/im';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa6';

const BrandDetaile = () => {
    const { allbrand, products } = useContext(contextProvider)
    const { id } = useParams()
    const singleBrand = allbrand.find(brand => brand._id == id)
    const brandProduct = products.filter(product => singleBrand.title == product.brandName)
    const slider1 = {
        backgroundImage: `url('${singleBrand?.slider1}')`,
    };
    const slider2 = {
        backgroundImage: `url('${singleBrand?.slider2}')`,
    };
    const slider3 = {
        backgroundImage: `url('${singleBrand?.slider3}')`,
    };
    return (
        <div>
            <div className="carousel w-full ">
                <div id="slide1" className="carousel-item relative w-full ">
                    <div style={slider1} className=' bg-no-repeat bg-cover w-full relative'>
                        <div className='w-full bg-black opacity-20 h-screen flex items-center justify-start  z-0 '>
                        </div>
                        <div className='w-full md:w-10/12 lg:w-1/2 z-10 absolute top-0 left-16 md:left-24 h-screen flex items-center'>
                            <div>
                                <h1 className='text-xl text-white font-medium uppercase'>Spring / Summer 2023</h1>
                                <h1 className='text-4xl md:text-6xl font-semibold mt-4 text-white'>{singleBrand?.title} Band</h1>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <div style={slider2} className='bg-no-repeat bg-cover w-full relative'>
                        <div className='w-full bg-black opacity-20 h-screen flex items-center justify-start  z-0 '>
                        </div>
                        <div className='w-full md:w-10/12 lg:w-1/2 z-10 absolute top-0 left-16 md:left-24 h-screen flex items-center'>
                            <div>
                                <h1 className='text-xl text-white font-medium uppercase'>Spring / Summer 2023</h1>
                                <h1 className='text-4xl md:text-6xl font-semibold mt-4 text-white'>{singleBrand?.title}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <div style={slider3} className=' bg-no-repeat bg-cover w-full relative'>
                        <div className='w-full bg-black opacity-20 h-screen flex items-center justify-start  z-0 '>
                        </div>
                        <div className='w-full md:w-10/12 lg:w-1/2 z-10 absolute top-0 left-16 md:left-24 h-screen flex items-center'>
                            <div>
                                <h1 className='text-xl text-white font-medium uppercase'>Our Best collection</h1>
                                <h1 className='text-4xl md:text-6xl font-semibold mt-4 text-white'>{singleBrand?.title}</h1>
                            </div>
                        </div>
                    </div>
                    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>


            <div className='container mx-auto px-4 py-14'>
                {brandProduct.length > 0 ? <h1 className='text-4xl text-black font-semibold text-center mb-7'>
                    Our {singleBrand.title} Brand  </h1> : ''
                }

                <div className='flex flex-col md:flex-col lg:flex-row gap-10'>
                    <div className='flex-1'>
                        {
                            brandProduct.length > 0 ? <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-x-6 gap-y-7'>
                                {
                                    brandProduct.map(product => <div>
                                        <img className='h-[450px] object-cover w-full bg-[#F5F5F5]' src={product.image} alt="" />
                                        <div className=' p-3 border rounded-b-md '>
                                            <h1 title={name} className='text-xl font-medium text-black'>{product.title.length > 25 ? product.title.slice(0, 20) + '...' : product.title}</h1>
                                            <p className='py-1'> {product.description.slice(0, 60)} </p>

                                            <div className='flex justify-between px-2 mb-2'>
                                                <h1 className='text-xl text-black font-medium'>${product.price}</h1>
                                                <div className='flex items-center gap-x-3 border rounded-md py-1 px-2'>
                                                    <h1 className='text-lg font-medium text-textColor'>{product.rating}</h1>
                                                    <ImStarFull className='text-yellow-400 text-xl'></ImStarFull>
                                                </div>
                                            </div>
                                            <Link className='py-2 px-6 rounded-md bg-primery text-base font-normal text-white' to={`/product-detail/${product._id}`}> Learn More  </Link>
                                            <Link className='py-2 ml-2 px-6 rounded-md bg-primery text-base font-normal text-white' to={`/update/${product._id}`}> Update  </Link>
                                        </div>
                                    </div>) }
                                 </div> :<h1 className='text-4xl text-black font-semibold text-center'>No products available</h1> 
                        }
                    </div>
                    <div className='w-full lg:w-[30%] '>
                        <div className='p-3 bg-sectionbg'>
                            <div className=''>
                                <h1 className='text-xl text-black1 font-semibold ml-2 mb-5'>Find Us On</h1>
                                <div className='border rounded-md divide-y divide-solid'>

                                    {/* Facebook Handel */}
                                    <div className='py-3'>
                                        <a href='#' className='flex items-center gap-2 ml-6'>
                                            <span className='bg-[#F3F3F3] p-2 rounded-full text-[#3b5998]'>
                                                <FaFacebookF></FaFacebookF>  </span>
                                            <span className='text-base text-gray1 font-medium'>Facebook</span>
                                        </a>
                                    </div>
                                    {/* Twitter Handel */}
                                    <div className='py-3'>
                                        <a href='#' className='flex items-center gap-2 ml-6'>
                                            <span className='bg-[#F3F3F3] p-2 rounded-full text-[#58A7DE]'>
                                                <FaTwitter></FaTwitter>  </span>
                                            <span className='text-base text-gray1 font-medium'>Twitter</span>
                                        </a>
                                    </div>
                                    {/* Instragram Handel */}
                                    <div className='py-3'>
                                        <a href='#' className='flex items-center gap-2 ml-6'>
                                            <span className='bg-[#F3F3F3] p-2 rounded-full text-[#DD2A7B]'>
                                                <FaInstagram></FaInstagram>  </span>
                                            <span className='text-base text-gray1 font-medium'>Instagram</span>
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className='mt-6 bg-graybg p-3'>
                                <h1 className='text-xl text-black1 font-semibold'>Our Advertisements</h1>
                                <div className='mt-4 bg-white rounded-md  p-3'>
                                    <img className='w-full' src="https://i.ibb.co/WvsxChb/Rectangle-3991-2.png" alt="Swimming" />
                                    <h1 className='text-lg mt-1 font-medium text-center text-textColor'>Play Ground</h1>
                                </div>
                                <div className='mt-4 bg-white rounded-md  p-3'>
                                    <img className='w-full' src='https://i.ibb.co/hVk5g72/Rectangle-3991-1.png' alt="Swimming" />
                                    <h1 className='text-lg mt-1 font-medium text-center text-textColor'>Class</h1>
                                </div>
                                <div className='mt-4 bg-white rounded-md  p-3'>
                                    <img className='w-full' src="https://i.ibb.co/L8XRfXZ/Rectangle-3991.png" alt="Swimming" />
                                    <h1 className='text-lg mt-1 font-medium text-center text-textColor'>Swimming</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
export default BrandDetaile