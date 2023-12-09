import React, { useContext } from 'react'
// import { useLoaderData } from 'react-router-dom'
import Product from '../components/Product'
import { contextProvider } from '../components/AppContext'

const Shop = ({query}) => {
const {products}=useContext(contextProvider)

  return (
  <div className='container mx-auto px-4 py-10'>
    <h1 className='text-4xl text-black font-semibold text-center mb-7'>Featured Products</h1>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-7'>
        {
            products.slice(0,query).map(product=> <Product key={product._id} product={product}> </Product>)
        }
    </div>
  </div>
  )
}

export default Shop