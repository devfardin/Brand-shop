import React from 'react'
export const AddProduct = () => {
    const handelproductSubmit = (e) => {
        e.preventDefault()
        const form = e.target;
        const title = form.title.value;
        const image = form.image.value;
        const category = form.category.value;
        const brandName = form.brandName.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;
        const productInfo = { title, image, category, brandName, price, rating, description }

        fetch('https://server-site-rho.vercel.app/product', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(productInfo)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged== true) {
                    swal("Congratulations!", " Your product has been successfully added to our collection.", "success");
                    form.reset()
                    return
                } else{
                    swal("Oops, something went wrong", "Something went wrong while trying to add your product", "error");
                    return
                }
            })
    }
    return (
        <div className=' md:w-full lg:w-[1000px] py-5 md:my-10 mx-auto bg-sectionbg rounded-lg'>
            <div className='p-3 md:p-7 mx-3 rounded-lg'>
                <h1 className='text-3xl font-semibold text-black mb-6'>Submit a Product</h1>

                <form onSubmit={handelproductSubmit}>
                    <div className='mt-3'>
                        <label className='text-xl text-black font-medium' htmlFor="title"> Product Title</label>
                        <input required type='text' name='title'
                            class=" w-full border rounded-md border-[#C5C5C5] py-[6px] mt-1 px-5 font-sans text-lg  font-normal  outline-0   placeholder:text-gray-400" />
                    </div>

                    <div className='mt-4'>
                        <label className='text-xl text-black font-medium' htmlFor="title"> Product Image</label>
                        <input  type='text' name='image' placeholder='Photo Url'
                            class=" w-full border border-[#C5C5C5] py-[8px] rounded-md mt-1 px-5 font-sans text-lg  font-normal  outline-0   placeholder:text-gray-400" />
                    </div>

                    <div className='mt-4 flex  flex-col md:flex-row  justify-between gap-5'>
                        <div className='flex-1'>
                            <label className='text-xl text-black font-medium' htmlFor="title"> Product category</label>
                            <select type='text' name='category'
                                class=" w-full border border-[#C5C5C5] py-[8px] rounded-md mt-1 px-5 font-sans text-lg  font-normal  outline-0   placeholder:text-gray-400">
                                <option selected>Select category</option>
                                <option value="T-Shirts & Polos">T-Shirts & Polos</option>
                                <option value="Shirts">Shirts</option>
                                <option value="Shoes">Shoes</option>
                                <option value="Jackets & Outerwear">Jackets & Outerwear</option>
                                <option value="Accessories">Accessories</option>
                                <option value="Boys' Clothing">Boys' Clothing</option>
                                <option value="Girls' Clothing">Girls' Clothing</option>
                            </select>
                        </div>
                        <div className='flex-1'>
                            <label className='text-xl text-black font-medium' htmlFor="title"> Brand Name</label>
                            <input type='text' name='brandName'
                                class=" w-full border border-[#C5C5C5] py-[8px] rounded-md mt-1 px-5 font-sans text-lg  font-normal  outline-0   placeholder:text-gray-400" />
                        </div>

                    </div>

                    <div className='mt-4 flex flex-col md:flex-row justify-between gap-5'>
                        <div className='flex-1'>
                            <label className='text-xl text-black font-medium' htmlFor="title"> Product price</label>
                            <input type='text' name='price'
                                class=" w-full border border-[#C5C5C5] py-[8px] rounded-md mt-1 px-5 font-sans text-lg  font-normal  outline-0   placeholder:text-gray-400" />
                        </div>

                        <div className='flex-1'>
                            <label className='text-xl text-black font-medium' htmlFor="title">Rating</label>
                            <input type='text' name='rating'
                                class=" w-full border border-[#C5C5C5] py-[8px] rounded-md mt-1 px-5 font-sans text-lg  font-normal  outline-0   placeholder:text-gray-400" />
                        </div>
                    </div>
                    <div className='mt-4'>
                        <label className='text-xl text-black font-medium' htmlFor="title"> Short description</label>
                        <textarea rows="3" name='description'
                            class=" w-full border border-[#C5C5C5] py-[8px] rounded-md mt-1 px-5 font-sans text-lg  font-normal  outline-0   placeholder:text-gray-400" >
                        </textarea>
                    </div>
                    <button className=" bg-primery text-lg mt-5 px-16 rounded-md py-3 font-semibold text-white justify-center items-center cursor-pointer   hover:bg-hoverColor  duration-300"> Add Product </button>
                </form>
            </div >
        </div >
    )
}
