import React from 'react'
import Banner from './Banner'
import Categories from './Categories'
import Products from './Products'
import Collection from './Collection'
import FeatureProducts from './FeatureProducts'



function Home() {
  return (
    <div className='max-w-auto  '>  
     
     <Banner/>
     <Categories/>
     <Products />
     <Collection />
     <FeatureProducts />
    

    </div>
  )
}

export default Home