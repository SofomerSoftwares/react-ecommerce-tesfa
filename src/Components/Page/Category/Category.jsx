import React, { useContext } from 'react'
import { NavLink } from 'react-router-dom';





function Category({ProductItems}) {
  

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
     <div>
      {
     ProductItems.map((items) =>(
    <div key={items.id} className='card card-compact  w-72 bg-base-100 shadow-xl'>
       <NavLink to={`/shop/${items.id}`}>
       <img src={items.image} alt="" className='rounded-md h-72 w-72'/>
       <div className="card-body">
        <h2 className="card-title text-sm">{items.name}</h2>
        <div className='flex flex-row justify-between gap-24'> 
        <p className='text-black/50'>{items.category}</p> 
       
       </div>
      <div className="card-actions  justify-center gap-24">
      <button className="btn btn-outline btn-primary">add to cart </button>
      <p className='font-semibold text-red-400 mt-4'>ETB {items.price} </p>
      </div>
      </div>
      </NavLink>
      </div>
      ))
     }
     </div>
    </div>
  )
}

export default Category
