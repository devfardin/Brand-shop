import React from 'react'
import swal from 'sweetalert';

export const AddBrand = () => {
    const handelproductSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const productInfo = { title, image }
        fetch('https://server-site-rho.vercel.app/brand', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged== true) {
                    swal("Sucess", "Brand added successfully!", "success");
                    form.reset()
                    return
                } else{
                    swal("Oops, something went wrong", "There was an issue with adding the new brand. Please try again later.", "error");
                    return
                }
            })
    }
    return (
        <div className=' md:w-full lg:w-[1000px] py-5 md:my-10 mx-auto bg-sectionbg rounded-lg'>
            <div className='p-3 md:p-7 mx-3 rounded-lg'>
                <h1 className='text-3xl font-semibold text-black mb-6'>Add a brand</h1>

                <form onSubmit={handelproductSubmit}>
                    <div className='mt-3'>
                        <label className='text-xl text-black font-medium' htmlFor="title">Brand Name</label>
                        <input type='text' name='title'
                            class=" w-full border rounded-md border-[#C5C5C5] py-[6px] mt-1 px-5 font-sans text-lg  font-normal  outline-0   placeholder:text-gray-400" />
                    </div>

                    <div className='mt-4'>
                        <label className='text-xl text-black font-medium' htmlFor="title"> Brand logo</label>
                        <input type='text' name='image' placeholder='Photo Url'
                            class=" w-full border border-[#C5C5C5] py-[8px] rounded-md mt-1 px-5 font-sans text-lg  font-normal  outline-0   placeholder:text-gray-400" />
                    </div>

                    <button className=" bg-primery text-lg mt-5 px-16 rounded-md py-3 font-semibold text-white justify-center items-center cursor-pointer   hover:bg-hoverColor  duration-300"> Add Brand </button>
                </form>
            </div >
        </div >
    )
}

export default AddBrand