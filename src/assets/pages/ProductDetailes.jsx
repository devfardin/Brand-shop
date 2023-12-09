import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'
import { ImStarFull } from 'react-icons/im';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaTwitter } from 'react-icons/fa';

const ProductDetailes = () => {
    const products = useLoaderData()
    const { id } = useParams()

    const singleProduct = products.find(product => product._id == id)
    const { title, image, brandName, category, price, rating, description } = singleProduct

    const cartInfo= { title, image, brandName, category, price, rating, description }
    const addToCart=()=>{
        fetch('https://server-site-rho.vercel.app/addtocart', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(cartInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged== true) {
                    swal("Congratulations!", "Product successfully added to the cart!", "success");
                       return
                } else{
                    swal("Oops, something went wrong", "Something went wrong while trying to add your product", "error");
                    return
                }
            })
    }
    return (
        <div className='container lg:w-3/4 mx-auto px-4 flex flex-col md:flex-row gap-12 my-11 items-center'>
            <img className='w-full h-[450px] object-fill' src={image} alt="" />
            <div className=''>
                <h1 className='text-3xl md:text-3xl lg:text-4xl font-medium text-black mb-3'>{title}</h1>
                <div className='flex gap-3 items-center px-2 mb-2'>
                    <h1 className='text-3xl text-black font-medium'>${price}</h1>
                    <div className='flex items-center gap-x-3 border rounded-md py-1 px-3'>
                        <h1 className='text-lg font-medium text-textColor'>{rating}</h1>
                        <ImStarFull className='text-yellow-400 text-xl'></ImStarFull>
                    </div>
                </div>
                <h1 className='text-xl text-gray1 font-normal my-3'>Brand Name: <span className=' text-black font-medium'>{brandName}</span></h1>
                <h1 className='text-lg text-textColor font-normal'>{description}</h1>
                <Link onClick={addToCart} className='text-lg font-medium text-white bg-primery hover:bg-hoverColor duration-200 px-8 py-3 rounded-full my-4 inline-block'> Add To Cart </Link>
                <h1 className='text-lg text-gray1 font-normal my-3'>Category : <span className=' text-black font-medium'>{category}</span></h1>
                <h1 className='text-lg text-gray1 font-normal my-3 flex gap-2 items-center'>Share:   <div className="flex gap-x-3">
                    <div className='w-7 h-7 border border-primery rounded-full flex justify-center items-center bg-none'>
                        <FaFacebookF className='text-primery cursor-pointer text-base '></FaFacebookF>
                    </div>
                    <div className='w-7 h-7 border border-primery rounded-full flex justify-center items-center bg-none'>
                        <FaLinkedinIn className='text-primery cursor-pointer text-base '></FaLinkedinIn>
                    </div>
                    <div className='w-7 h-7 border border-primery rounded-full flex justify-center items-center bg-none'>
                        <FaTwitter className='text-primery cursor-pointer text-base '></FaTwitter>
                    </div>
                    <div className='w-7 h-7 border border-primery rounded-full flex justify-center items-center bg-none'>
                        <FaGithub className='text-primery cursor-pointer text-base '></FaGithub>
                    </div>
                </div></h1>
            </div>
        </div>
    )
}

export default ProductDetailes