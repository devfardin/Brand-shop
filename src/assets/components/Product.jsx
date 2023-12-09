import React from 'react'
import { ImStarFull } from 'react-icons/im';
import { Link } from 'react-router-dom';

const Product = ({product}) => {
    const {_id, title,image, price, rating, description}=product
    const name=title
  return (
    <div>
        <img className='h-96 object-cover w-full bg-[#F5F5F5]' src={image} alt="" />
       <div className=' p-3 border rounded-b-md '>
       <h1 title={name} className='text-xl font-medium text-black'>{ title.length > 25 ? title.slice(0,20)+'...': title }</h1>
       <p className='py-1'> {description.slice(0,60)} </p>

      <div className='flex justify-between px-2 mb-4 '>
      <h1 className='text-xl text-black font-medium'>${price}</h1>
      <div className='flex items-center gap-x-3 border rounded-md py-1 px-2'> 
        <h1 className='text-lg font-medium text-textColor'>{rating}</h1>
        <ImStarFull className='text-yellow-400 text-xl'></ImStarFull>
       </div>
      </div>
      <Link className='py-2  px-6 rounded-md bg-primery text-base font-normal text-white' to={`/product-detail/${_id}`}> Learn More  </Link> 
      <Link className='py-2  ml-2 px-6 rounded-md bg-primery text-base font-normal text-white' to={`/update/${_id}`}> Update  </Link>
       </div>
    </div>
  )
}

export default Product