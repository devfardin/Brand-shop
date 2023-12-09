import React, { useState } from 'react'
import { useLoaderData } from 'react-router-dom'
import { RiDeleteBin6Line } from 'react-icons/ri';

const MyCart = () => {
  const cartItems = useLoaderData()
  const [items, setitems] = useState(cartItems)
  const handelDelete = (id) => {
    fetch(`https://server-site-rho.vercel.app/addtocart/${id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(data => {
        if (data.deletedCount > 0) {
          console.log("User delete sucessfully");
          const remaingCart = items.filter(user => user._id !== id)
          setitems(remaingCart)
        }
      })
  }
  return (
    <div className='container lg:w-3/4   mx-auto px-4 py-8'>
      <div className='flex justify-between items-center '>
        <h1 className='text-3xl text-black font-medium'>Your Cart</h1>
        <h1 className='text-xl text-textColor font-normal'>{items.length}  Items in cart</h1>
      </div>
      {
        items.map(cart => <div className='flex flex-col md:flex-row justify-between items-center my-4  border-t py-6 px-3'>
          <div className='flex  gap-x-6'>
            <img className='w-20 h-16 rounded-md object-fill' src={cart.image} alt="" />
            <div>
              <h1 className='text-xl font-medium text-black'>{cart.title}</h1>
              <h1 className='text-lg font-normal text-gray-500'>{cart.description.slice(0, 30)}</h1> 
            </div>
          </div>
          <div className='flex  gap-6 items-center'>

            <h1 className='text-2xl font-normal text-gray-900'>${cart.price}</h1>
            <RiDeleteBin6Line onClick={() => handelDelete(cart._id)} className='text-5xl text-textColor border p-3 rounded-xl hover:text-hoverColor'> </RiDeleteBin6Line>
          </div>
        </div>)
      }
    </div>
  )
}
export default MyCart