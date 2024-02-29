import React from 'react'
import watch from '../../../assets/category_image/banner.png'
import { FaShoppingBag } from 'react-icons/fa';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import '../../../index.css'

// import required modules
import { Pagination } from 'swiper/modules';
function Banner() {
  return (
    <div className='max-w-screen-2xl container  xl:px-28    bg-grey-300 '>

     <Swiper
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay:2500,
          disableOnInteraction:false,
         }}
        modules={[Pagination]}
        className="mySwiper">
        <SwiperSlide>
        <div className='sm:py-96 md:py-32  flex flex-col md:flex-row justify-between lg:items-center gap-2 '>
        <div className='md:w-1/2'>
        <img src={watch} alt="" className='w-full hover:scale-105 translation-all duration-200'/>
        </div> 
        <div className='md:w-1/2  py-12 items-center'>
          <h1 className='text-5xl  mb-5 '>Collections</h1>
          <p className='text-xl mb-7 '>
            You Can Explore ans Shop Many Different Collection From Various Brand Here.</p>
            <div className='ml-24  xl:ml-48'>
            <button className='md:mx-8 bg-black hover:bg-orange-500 px-6 py-2  text-white font-semibold rounded-lg flex items-center gap-2'>
            <FaShoppingBag className='inline-flex'/>Buy now
          </button>
            </div>
         
        </div>
      </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='sm:py-20 md:py-32  flex flex-col md:flex-row justify-between lg:items-center gap-2 '>
        <div className='md:w-1/2'>
        <img src={watch} alt="" className='w-full hover:scale-105 translation-all duration-200'/>
        </div> 
        <div className='md:w-1/2 px-16 py-12'>
          <h1 className='text-5xl  mb-5 '>Collections</h1>
          <p className='text-xl mb-7 '>
            You Can Explore ans Shop Many Different Collection From Various Brand Here.</p>
          <button className='md:mx-8 bg-black hover:bg-orange-500 px-6 py-2  text-white font-semibold rounded-lg flex items-center gap-2'>
            <FaShoppingBag className='inline-flex'/>Buy now
          </button>
        </div>
      </div>
        </SwiperSlide>
      </Swiper>
     </div>
  )
}
export default Banner;