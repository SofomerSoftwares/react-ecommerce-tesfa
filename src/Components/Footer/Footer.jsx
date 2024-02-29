import React from 'react'
import logo from '../../assets/images/logo.png'

function Footer() {
  return (
<footer className="footer px-4 py-16 bg-base-200 text-base-content">
  <div  className="max-w-40 h-40 absolute right-0 xl:mt-2 lg:mt-28  md:mt-18 sm:mt-20 ">
  <img src={logo} alt=""  />
  </div> 
{/*   service lists */}
  <nav >
    <h6 className="footer-title">Services</h6> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Company</h6> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
  <nav>
    <h6 className="footer-title">Legal</h6> 
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav> 
{/*   form elemets  */}
  <form>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-auto justify-between gap-4 flex-col md:flex-row ">
      <label className="label">
        <span className="label-text">Enter your email address</span>
      </label> 
      <div className="join ">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className=" px-2 btn btn-primary join-item">Subscribe</button>
        </div>
        
   
    </fieldset>
   
  </form>
  
</footer>

  )
}

export default Footer
