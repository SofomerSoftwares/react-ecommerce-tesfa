
import React from 'react'
import { Link } from 'react-router-dom';
import productContext from '../Page/Home/Products'




function Cards() {
 
  const filteredItems = useContext(productContext);
   
  return (
<div className='grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8'>
{
  filteredItems.map((items) =>(
    <div key={items.id} className='card card-compact  w-72 bg-base-100 shadow-xl'>
       <Link to={`/shop/${items.id}`}>
       <img src={items.image} alt="" className='rounded-md h-72 w-72'/>
       <div className="card-body">
        <h2 className="card-title text-sm">{items.name}</h2>
        <div className='flex flex-row justify-between gap-24'> 
        <p className='text-black/50'>{items.category}</p> 
       
       </div>
      <div className="card-actions  justify-center gap-24">
      <button className="btn btn-outline btn-primary">Buy Now</button>
      <p className='font-semibold text-red-400 mt-4'>ETB {items.price} </p>
      </div>
      </div>
      </Link>
      </div>
      ))
}
 </div>
  )
}

export default Cards
