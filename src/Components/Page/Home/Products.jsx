import React, { useEffect, useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import Cards from '../../Cards/Cards';
             

             
function Products() {
  const [products,setProducts] = useState([]);
  const [filteredItem,setfilteredItem] = useState([]);
  const [SelectedCategory,setSelectedCategory] = useState("all");
  const [SortOption,setSortOption] = useState("Default");





  useEffect(()=>{
    fetchData();
  },[]);


  const fetchData = async ()=>{
    try{

   const response = await fetch('/products.json');
   const data = await response.json();
   setProducts(data);
   setfilteredItem(data);
  
    }catch(error){
     console.log("Error on fetching",error);
    }
}
//filter based on category
const filterItems = (category) =>{
    const filtered = category === "all" ? (products) : products.filter((item) => item.category === category);
     setfilteredItem(filtered);
     setSelectedCategory(category); 

}

// show all products
 const showAll = () =>{
    setfilteredItem(products);
    SelectedCategory("all");
 }

const handleSortchange = (option) => {
  setSortOption(option);
  let sortedItems = [...filteredItem];
   
  switch (option){
    case "A-Z" :
      sortedItems .sort((a,b) => a.name.localeCompare(b.name));
       break;
       case "Z-A" :
        sortedItems .sort((a,b) => b.name.localeCompare(a.name));
        break;
        case "low-to-high":
          sortedItems .sort((a,b)=> a.price - b.price);
          break;
          case "high-to-low":
            sortedItems .sort((a,b)=> b.price - a.price);
            break;
          default: 
          break; 

  }
  setfilteredItem(sortedItems);
}

  return (
    <div className='max-w-screen-2xl container mx-auto  xl:px-32 px-4 mb-12'>
        <h2 className='text-3xl font-semibold text-center capitalize my-8'>
          Subscribe for news
        </h2>
        <div className='flex  flex-col md:justify-between items-center md:flex-row space-y-3 mb-8 '>
          <div className='flex flex-row justify-start  item-center md:gap-8 gap-4 flex-wrap'>

            <button className='font-semibold' onClick={showAll}>All Products</button>
            <button className='font-semibold' onClick={()=>filterItems("Womens Footwear")}>Cloths</button>
            <button className='font-semibold'onClick={()=>filterItems("Mens Footwear")}>Hoodies</button>
            <button className='font-semibold'>bags</button>
            <button className='font-semibold' onClick={()=>filterItems("shoes")}>Shoes</button>

          </div>
          <div className='flex flex-row items-center justify-end  gap-2'>
            <div className='cursor-pointer bg-black p-2'>
              <FaFilter className='text-white h-4 w-4'/>
              </div>
            <select className='bg-black text-white px-2 py-1  space-y-2 '
            id="sort"
            onChange={(e)=> handleSortchange(e.target.value)}
            value={SortOption}
            >
              <option value='default'>Default</option>
              <option value='A-Z'>A-Z</option>
              <option value='Z-A'>Z-A</option>
              <option value='low-to-high'>low-to-high</option>
              <option value='high-to-low'>high-to-low</option>
            </select>
            </div>
        
    </div>
    <div>
<Cards filteredItems ={filteredItem} />
    </div>
    </div>
  )
}
export default Products