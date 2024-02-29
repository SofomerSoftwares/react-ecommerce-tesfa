
import React from 'react'
import { BrowserRouter, Outlet, Route, Router, Routes } from 'react-router-dom'
import Home from './Components/Page/Home/Home'
import Category from './Components/Page/Category/Category'
import Products from './Components/Page/Home/Products'
import SingleProduct from './Components/Page/Home/SingleProduct'
import Nav from './Components/Navigation/Nav'
import Login from './Components/Page/Accounts/Login'
import Register from './Components/Page/Accounts/Register'
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
    <Route path='/category' element={<Category/>} />
    <Route path='/' element={<Home />} />
    <Route path='/products' element={<Products/>}/>
     <Route path='/shop/:id' element={<SingleProduct/>} />
    </Route>
     <Route path ='/login' element={<Login />}></Route>
     <Route path ='/register' element={<Register/>}></Route>
  </Routes>
  
</BrowserRouter> 

    </>

  )
}

export default App
