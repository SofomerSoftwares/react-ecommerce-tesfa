
import React, { useEffect, useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
// import required modules
import { Autoplay,Pagination,Navigation } from 'swiper/modules';
import { Link } from 'react-router-dom';


function FeatureProducts() {

    const [products,setProducts] = useState([]);

    useEffect(()=>{
        fetchData();
    },[])


    const fetchData = async ()=>{
        try{
    
       const response = await fetch('products.json');
       const data = await response.json();
       setProducts(data);
    
      
        }catch(error){
         console.log("Error on fetching",error);
        }
    }
    const FeaturedProduct = products.filter((item)=>item.Status == "Featured")
  
    return (
    <div className='max-w-screen-2xl container mx-auto xl:px-32 px-4 mb-12'>
    <div className='mb-16 text-center'>
      <h1 className='text-5xl font-bold'>Featured Products</h1>
      <p className='text-center mt-8'>hdbfjbfnghkkjdbfhbdsjfnbgknghbbsdbfgb</p>
      <p></p>
    </div>
  <Swiper 
  slidesPerView={4}
 spaceBetween={10}
 centeredSlides ={true}
 autoplay={{
  delay:2500,
  disableOnInteraction:false,
 }}
pagination={{
  clickable:true,
}}
breakpoints={{
  320: {
    slidesPerView: 1,
    spaceBetween: 10,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  768: {
    slidesPerView: 4,
    spaceBetween: 40,
  },
  1024: {
    slidesPerView: 5,
    spaceBetween: 50,
  },
}}
  navigation={true} 
  modules={[Autoplay,Pagination,Navigation]}
  className="mySwiper">
  {
      FeaturedProduct.map((product) =>(
      <SwiperSlide key={product.id} className='flex flex-col'>
      <Link to={`/shop/${product.id}`}>
      <img src={product.image} alt="" className='rounded-md'/>
       </Link>
      <div className='mt-4 px-4'>
        <h2 className='text-base font-semibold mb-2'>{product.name}</h2>
        <div className='flex justify-between'> 
        <p className='text-black/50'>{product.category}</p> 
        <p className='font-semibold'>{product.price} ETB</p>
      </div>
      </div>
    </SwiperSlide>
    ))
  }
 </Swiper>
    </div>
  )
}

export default FeatureProducts
