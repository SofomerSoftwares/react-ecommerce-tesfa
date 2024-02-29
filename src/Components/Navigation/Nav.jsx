import React, { useState } from 'react'
import logo from '../../assets/images/logo.png'
import {FaHeart, FaUser, FaSearch, FaShoppingBag, FaBars, FaTimes} from 'react-icons/fa'
import { Link, NavLink } from 'react-router-dom';
function Nav() {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () =>{
    setIsMenuOpen(!isMenuOpen);
    }

  return (
    <header className='max-w-screen-5xl h-40 xl:px-4 px-8 bg-gray-100 absolute top-0 right-0 left-0'>
      <nav className='flex justify-between items-center container'>
        {/* logo image */}
        <img className="w-40 h-auto " src={logo} alt="logo" />
    
          {/* search items */}
        <input type="text" placeholder="Search for everything" name="" id='search' className='input input-bordered join-item w-full h-auto  rounded-lg border focus-visible: text-start px-10 py-1 md:flex hidden ' />
        <a href='' className='relative right-8 rounded-full items-end' ><FaSearch/></a> 

        {/* top  menu Items */}
          <div className='sm:flex items-center gap-8 hidden '>
          <NavLink to='#' className='flex item-center gap-8 text-lg'>  Items <FaHeart /></NavLink>
          <NavLink to='#' className='flex item-center gap-8 text-lg'>Shopping <FaShoppingBag /> </NavLink>
         <NavLink to='/login' className='flex item-center gap-8 text-lg'>   Account <FaUser /></NavLink>
       </div>
       
       <div className='md:hidden'> 
          <button onClick = {toggleMenu}>
            {
              isMenuOpen ? <FaTimes className='w-5 h-5 text-black'/>: <FaBars className='w-5 h-5 text-black'/>
            }
            </button>
        </div>
        </nav>
       {/* category items */}
       <div className='xl:px-64 lg:px-10 md:px-4  pt-1'>
       <ul className='md:flex justify-between font-semibold items-center md:max-w-screen-2xl 2xl:px-16 2xl:ml-72 hidden'>
         <li className='hover:text-orange-500 cursor-pointer'>  
         <NavLink to={"/"}>Home</NavLink>
         </li>  
         <li className='hover:text-orange-500 cursor-pointer'>
          <NavLink to={"/category"}>Categories</NavLink>  
         </li> 
         <li className='hover:text-orange-500 cursor-pointer'>
          <NavLink to={"/products"}>Products</NavLink>  
         </li>   
         <li className='hover:text-orange-500 cursor-pointer'>
          <NavLink to={"/blogs"}>Blogs</NavLink>  
         </li>   
         <li className='hover:text-orange-500 cursor-pointer'>
          <NavLink to={"/Services"}>Services</NavLink>  
         </li>  
         <li className='hover:text-orange-500 cursor-pointer'>
          <NavLink to={"/BestSells"}>Best Sellers</NavLink>  
         </li>  
      </ul>  
      </div>
      <hr/>
      {/* only for mobile */}
      <div className='sm:hidden'>
        <div  className="drawer-content">

        </div>
      <ul className={`menu p-4  min-h-full bg-base-200 text-base-content ${isMenuOpen ? "" : "hidden"}`}>
      <li className='hover:text-orange-500 cursor-pointer'>  
         <NavLink to={"/"}>Home</NavLink>
         </li>  
         <li className='hover:text-orange-500 cursor-pointer'>
          <NavLink to={"/Categories"}>Categories</NavLink>  
         </li> 
         <li className='hover:text-orange-500 cursor-pointer'>
          <NavLink to={"/products"}>Products</NavLink>  
         </li>   
         <li className='hover:text-orange-500 cursor-pointer'>
          <NavLink to={"/blogs"}>Blogs</NavLink>  
         </li>   
         <li className='hover:text-orange-500 cursor-pointer'>
          <NavLink to={"/Services"}>Services</NavLink>  
         </li>  
         <li className='hover:text-orange-500 cursor-pointer'>
          <NavLink to={"/BestSells"}>Best Sellers</NavLink>  
         </li>  
      </ul>  
      </div>
    </header>
  )
}
export default Nav