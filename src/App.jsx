
import React from 'react'
import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom'
import Home from './Components/Page/Home/Home'
import Products from './Components/Page/Home/Products'
import Categories from './Components/Page/Home/Categories'
import SingleProduct from './Components/Page/Home/SingleProduct'
import Nav from './Components/Navigation/Nav'
import Banner from './Components/Page/Home/Banner'
import Footer from './Components/Footer/Footer'

function App() {

  const Layout = () =>{
    return(
      <>
      <Nav/>
      <Outlet/>
      <Footer/>
      </>
    )
  }
  return (
      <>
<BrowserRouter>
  <Routes>
    <Route path='/' element={<Layout />}> 
    <Route path='/' element={<Home />} />
    <Route path='/products' element={<Products/>}/>
     <Route path='/shop/:id' element={<SingleProduct/>} />
    <Route path='/category' element={<Categories/>} />
    </Route>
  </Routes>
  
</BrowserRouter> 

    </>

  )
}

export default App
