import React from 'react'
import Navbar from './Navbar'
 

const Header = () => {
  return (
    <div className='object-cover min-h-screen bg-blend-darken mb-4 bg-cover bg-center flex 
    items-center w-full overflow-hidden' 
    style={{backgroundImage:"url('./dark.png')"}}
    id='Header'>
         <Navbar />
         <div className='container text-center mx-auto py-4 px-6 md:px-20 lg:px-32 '>
            <h2 className='text-3xl sm:text-6xl md:text-[60px] inline-block max-w-3xl
             text-white  pt-20'>The Ruralist People's Party (RPP)</h2>
             <h3 className='text-xl sm:text-4xl md:text-[40px] inline-block max-w-3xl
             text-white'>Power to the Fields, Strength to the Nation</h3>
            <div className='text-white space-x-7 mt-12'>
                <a className=' hover:text-orange-400 bg-gray-800 hover:bg-gray-900 text-xl font-bold px-6 py-2' href="#Projects">Projects</a>
                <a className='hover:text-orange-400 bg-emerald-500 hover:bg-emerald-600 text-xl font-bold px-2 py-2' href="#Membership">Membership</a>
            </div>
         </div>
        </div>
  )
}

export default Header