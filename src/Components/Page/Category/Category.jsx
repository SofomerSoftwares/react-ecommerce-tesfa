import React, { useContext } from 'react'

import productContext from '../../Page/Home/Products'



function Category() {
  
const filteredItems = useContext(productContext);
  return (
    <div className=' flex max-w-screen-2xl container mx-auto  xl:px-4 py-64'>
     <div className='w-52 h-96 px-8  border-r border-gray-300'>
     <h2 className='mr-34 font-sans font-semibold text-xl'>Category</h2>
     <div className='px-0 py-8'>
     <form action="" className='flex flex-col gap-4'>
      <label htmlFor="" className='flex justify-between text-l font-sans font-semibold'>Shoes
      <input type="radio" name="" /></label>
      <label htmlFor="" className='flex justify-between text-l font-sans font-semibold'>Bag
      <input type="radio" name='' /></label>
      <label htmlFor="" className='flex justify-between text-l font-sans font-semibold'>T-shirt
      <input type="radio" /></label>
     </form>
     </div>
  
     </div>
     <div className=' flex  flex-col md:justify-between items-center md:flex-row  ' >
     <div className=' relative  -top-40  px-8 flex flex-row justify-between  item-center md:gap-8 gap-4 flex-wrap'>
        <button className='font-semibold' >All Products</button>
        <button className='font-semibold' >Cloths</button>
        <button className='font-semibold'>Hoodies</button>
        <button className='font-semibold'>bags</button>
        <button className='font-semibold'>Shoes</button>

      </div>

     </div>
    </div>
  )
}

export default Category
