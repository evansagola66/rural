import React, { useState, useEffect } from "react";
import { assets } from "../assets/assets";

const Navbar = () => {

  const [showMobileMenu, setShowMobileMenu]=useState(false);

  useEffect(()=>{
    if(showMobileMenu){
      document.body.style.overflow='hidden'
    }else{
      document.body.style.overflow='auto'
    }
    return ()=>{
      document.body.style.overflow='auto'
    }
  },[showMobileMenu]);



  return (
 
    <div className='absolute top-0 left-0 w-full z-10'>
      
      <div className='container mx-auto flex justify-between 
      items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>

        <img className='w-20' src={assets.logo1} alt='' />
 
        <ul className='hidden md:flex gap-7 text-black'>
          <a className='text-2xl font-bold cursor-pointer hover:text-green-600' href="#Home">
            Home
          </a>
          <a className='text-2xl font-bold cursor-pointer hover:text-green-600' href="#About">About</a>
          <a className='text-2xl font-bold cursor-pointer hover:text-green-600' href="#Projects">Projects</a>
          <a className='text-2xl font-bold cursor-pointer hover:text-green-600' href="#Contact">Contact</a>
          <a className='text-2xl font-bold cursor-pointer hover:text-green-600' href="#Testimonials">Testimonials</a>
        </ul>
        <button className='hover:text-orange-400 hidden md:block text-white 
          bg-emerald-500 hover:bg-emerald-600  px-7 py-3 font-bold'>
          Sign up
        </button>

        {/* ----------HUMBURGER MOBILE MENU---------------*/ }
       <div className="p-auto">
         <img onClick={()=>setShowMobileMenu(true)} src={assets.hum5} alt="" className=" md:hidden w-10 cursor-pointer" />
       </div>


      </div>

              {/* ----------CLOSE MOBILE MENU---------------*/ }
      <div className={`${showMobileMenu ? 'fixed w-full' : 'h-0 w-0'} md:hidden  right-0 top-0 bottom-0 overflow-hidden bg-white transition-all`}>
        <div className="flex justify-end p-6 cursor-pointer">
          <img onClick={()=>setShowMobileMenu(false)} src={assets.close2} alt="" className="w-10" />
        </div>
        <ul className="flex flex-col items-center gap-2 mt-5 px-5 text-lg font-bold 
        text-3xl font-medium ">
          <a onClick={()=>setShowMobileMenu(false)} href="#Header" className="hover:text-emerald-500 px-4 py-2 rounded-full">Home</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#About" className="hover:text-emerald-500 px-4 py-2 rounded-full">About</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#Projects" className="hover:text-emerald-500 px-4 py-2 rounded-full">Projects</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#Contact" className="hover:text-emerald-500 px-4 py-2 rounded-full">Contact</a>
          <a onClick={()=>setShowMobileMenu(false)} href="#Testimonials" className="hover:text-emerald-500 px-4 py-2 rounded-full">Testimonials</a>
        </ul>
      </div>

    </div>
 
 
  );
};

export default Navbar;
