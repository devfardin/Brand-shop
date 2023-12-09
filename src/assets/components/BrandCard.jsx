import React from 'react';
import { Link } from 'react-router-dom';

const BrandCard = ({ brand }) => {
    const {_id, title, image } = brand;
    const backgroundImage = {
        backgroundImage: `url('${image}')`,
    };

    return (
        <div className="w-full h-60 rounded-md bg-cover bg-center  relative" style={backgroundImage}>
        <div className='backdrop-brightness-75 rounded-md px-8 py-5 h-full  flex justify-start items-end '>
        <div>
            <h1 className='text-2xl font-semibold text-black'>{title}</h1> 
            <Link to={`/brand/${_id}`} className='text-lg font-medium text-textColor hover:text-primery'>View all</Link> 
        </div>
        </div>
    </div>

    );
};

export default BrandCard;
