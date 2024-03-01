import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {FaArrowAltCircleRight, FaStar} from 'react-icons/fa'
 function SingleProduct() {
 const {id} = useParams();
 const [products, setProducts] = useState([]);


 useEffect(() =>{
  

   const fetchData = async ()=>{
      try{
  
     const response = await fetch("/products.json");
     const data = await response.json();
     const product = data.filter((p) => p.id == id);
     console.log(product);
     setProducts(product[0]);
      
    
     }catch(error){
      console.log("Error on fetching",error);
   }
   }


   fetchData();
window.scrollTo({top:0, behavior:'smooth'})
 },[id])


 const {name,category,price,image,status} = products;
  console.log(category);

  return (
    <div className='mt-28 max-w-screen-2xl container mx-auto xl:px-28 px-4'>
       <div className='p-3 max-w-7xl m-auto'>
      
         <div className='mt-6 sm:mt-10'>
         <div className='mt-4 sm:mt-10'>
            
            <div className='grid grid-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max'>
               <img src={image} alt="" className='w-full'/>
               
           
            <div className='text-left '>
               <h1 className='text-2xl font-bold'>{name}</h1>
               <p className='mt-3 text-gray-600 text-base leading-6 text-justify sm:text-left sm:mt-4 '>
                 </p>
               <span className='my-2 text-xl text-yellow-600 flex items-center gap-1 sm:mt-4'><FaStar/>
               <FaStar/>
               <FaStar/>
               <FaStar/>
               <FaStar/>
               </span>
               <p className='text-xl text-red-500 font-semibold sm:text-2xl'>${price}</p>
               <div className='mt-4'>
               <div className='text-left flex flex-col gap-2 w-full'>
                  <label htmlFor="">Quantity</label>
                  <input type="number" name='price' id='price' defaultValue={1} className='border border-gray-300 tex-sm font-semibold mb-1 max-w-full w-full outline-none rounded-sm
                   m-0 py-3 px-4 md:py-3 md:px-4 focus:border-red-500 '/>
               </div>
               <div className='w-full text-left my-4 '>
                  <button className='flex  justify-center gap-2 w-full py-3 px-4 bg-red-500 text-white font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white haver:text-red-500 lg:m-0 md:px-6'><span>Confirm Order</span> <FaArrowAltCircleRight/></button>
               </div>
            </div>
            </div>
          
            </div>
         </div>
         <div className='mt-6 sm:mt-10'>
         <p></p>
         </div>
         </div>
       </div>
    </div>
  )
}
 

export default SingleProduct