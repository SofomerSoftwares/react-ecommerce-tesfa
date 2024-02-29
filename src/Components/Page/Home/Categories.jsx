import React from 'react'
import image2 from '../../../assets/category_image/image2.jpg'
import image3 from '../../../assets/category_image/image3.jpg'
import image4 from '../../../assets/category_image/image4.jpg'
import image5 from '../../../assets/category_image/image5.jpg'
import image6 from '../../../assets/category_image/7.jpg'


function Categories() {
   
    const companyLogo = [
    { id: 1 , img:`${image6}`},
    { id: 2 , img:`${image6}`},
    { id: 3 , img:`${image6}`},
    { id: 4 , img:`${image6}`}
   
    ]

  return (
    <div className='max-w-screen-2xl mx-auto container xl:px-28 px-4 py-40'>
        {/* brand logo */}
        
        <div className=' flex items-center justify-around flex-wrap gap-4 py-2 '>
        
            {

                companyLogo.map((list) =>(
                 <div key={list.id} className='w-40 h-40'>
                    <img src={list.img} alt=""/>
                     </div>
                ))
            }
        </div>
        {/* category grid */}
        <div>
            <div className='mt-52 flex flex-col md:flex-row  items-center gap-4'>
                <p className='md:-rotate-90 font-smibold uppercase text-center bg-black text-white md:my-2 rounded-sm inline-flex '>
                    explore new and popular styles
                </p>
                <div className=''>
                  <img src={image4} alt="" className='w-full h-[700px]  hover:scale-105 translation-all duration-200' />
                </div>
                <div className='md:w-1/2'>
                <div className='grid grid-cols-2 gap-2 md:flex-col rounded-sm'>
                <img src={image5} alt="" className='  w-72   hover:scale-105 translation-all duration-200' />
                <img src={image2} alt="" className='  w-72 hover:scale-105 translation-all duration-200' />
                <img src={image3} alt="" className=' w-72  hover:scale-105 translation-all duration-200' />
                <img src={image4} alt="" className='  w-72   hover:scale-105 translation-all duration-200' />
                </div>
                </div>
            </div>

        </div>
    </div>
  )
}
export default Categories