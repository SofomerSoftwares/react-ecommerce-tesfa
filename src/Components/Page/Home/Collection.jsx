import React from 'react'


function Collection() {
  return (
     <div className='max-w-screen-2xl container mx-auto  xl:px-auto my-20'>
           <div className='bg-[url("https://images.unsplash.com/photo-1577655197620-704858b270ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1280&q=144")] h-64 rounded-md overflow-hidden bg-cover bg-center '>
                <div className="bg-gray-900 bg-opacity-50 flex items-center w-full h-full">
                    <div className="px-10 max-w-xl">
                        <h2 className="text-2xl text-white font-semibold">Sport Shoes</h2>
                        <p className="mt-2 text-gray-400">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore facere provident molestias ipsam sint voluptatum pariatur.</p>
                        <button className="flex items-center mt-4 px-3 py-2 bg-blue-600 text-white text-sm uppercase font-medium rounded hover:bg-blue-500 focus:outline-none focus:bg-blue-500">
                            <span>Shop Now</span>
                           
                        </button>
                    </div>
                </div>
            </div>
          
          
         </div>
 
  )
}

export default Collection