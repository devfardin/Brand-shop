import React, { useContext } from 'react'
import BrandCard from './BrandCard'
import { contextProvider } from './AppContext'

const Brand = () => {
    const { allbrand } = useContext(contextProvider)


    return (
        <div className='container mx-auto px-4 my-14'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    allbrand.map(brand => <BrandCard key={brand._id} brand={brand}> </BrandCard>)
                }
            </div>
        </div>
    )
}

export default Brand