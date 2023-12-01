import React from 'react'

const Banner = () => {
  return (
        <div className='section-container bg-gradient-to-r from-[#FAFAFA] from-0% to-[#fcfcfc] to-100%'>
            <div className='py-24 flex flex-col md:flex-row-reverse justify-between items-center gap-8'>
                
                 {/* image */}
                 <div className="md:w-1/2">
                    <img src="/images/home/banner.png" alt=""/>

                    <div className='flex flex-col md:flex-row justify-around items-center -mt-14 gap-4'>
                        <div className='flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'> 
                            <img src="/images/home/b-food1.png" alt="" className='rounded-2xl'/>
                            <div className='space-y-'>
                                <h5 className='font-medium mb-1'>Spicy food</h5>
                                <div className="rating rating-sm">
                                    <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-500"
                                    readOnly
                                    />
                                    <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-500"
                                    readOnly
                                     />
                                    <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-500"
                                    checked
                                    readOnly
                                    />
                                    <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-400"
                                    readOnly
                                    />
                                </div>
                                <p className="text-red">$18.00</p>
                            </div>
                        </div>
                        <div className='flex bg-white py-2 px-3 rounded-2xl items-center gap-3 shadow-md w-64'> 
                            <img src="/images/home/b-food1.png" alt="" className='rounded-2xl'/>
                            <div className='space-y-'>
                                <h5 className='font-medium mb-1'>Spicy food</h5>
                                <div className="rating rating-sm">
                                    <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-500"
                                    readOnly
                                    />
                                    <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-500"
                                    readOnly
                                     />
                                    <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-500"
                                    checked
                                    readOnly
                                    />
                                    <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-400"
                                    />
                                    <input
                                    type="radio"
                                    name="rating-6"
                                    className="mask mask-star-2 bg-orange-400"
                                    readOnly
                                    />
                                </div>
                                <p className="text-red">$18.00</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* text */}
                <div className="md:w-1/2">
                    <h2 className='md:text-5xl text-4xl font-bold md:leading-snug leading-snug'>
                        Dive into Delights of Delectable <span className='text-green'>Food</span>
                    </h2>
                    <p className="text-x1 text-[#4A4A4A]">Where each Plate weaves a Story of culinary Mastery and Passionate Craftsmanship</p>
                    <button className='btn bg-green text-white px-8 py-3 rounded-full font-semibold'>Order Now</button>
                </div>

               

            </div>
        </div>
  )
}

export default Banner;