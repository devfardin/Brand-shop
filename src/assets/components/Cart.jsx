import React, { useEffect, useState } from 'react'
import { RiDeleteBin6Line } from 'react-icons/ri';

const Cart = ({items,setitems, cart, product }) => {
    const { _id, title, image, price, description } = cart

    useEffect(() => {
        product([price])
    }, [])
    // const [currentUser, setusers]=useState()
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
        <div className='flex justify-between items-center my-4  border-t py-6 px-3'>

            <div className='flex gap-x-6'>
                <img className='w-20 h-16 rounded-md object-fill' src={image} alt="" />
                <div>
                    <h1 className='text-xl font-medium text-black'>{title}</h1>
                    {/* <h1 className='text-lg font-normal text-gray-500'>{description.slice(0, 30)}</h1> */}
                </div>
            </div>
            <div className='flex gap-6 items-center'>
                <h1 className='text-2xl font-normal text-gray-900'>${price}</h1>
                <RiDeleteBin6Line onClick={() => handelDelete(_id)} className='text-5xl text-textColor border p-3 rounded-xl hover:text-hoverColor'> </RiDeleteBin6Line>
            </div>

        </div>
    )
}

export default Cart