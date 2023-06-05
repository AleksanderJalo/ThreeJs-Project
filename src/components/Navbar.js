import React from 'react';

const Navbar = () => {
  return (
    <div className='flex w-full justify-evenly items-center border-solid bg-slate-900 text-white font-fixedsys text-3xl border-yellow-600'>
      <div className='flex justify-between gap-5'>
        <div className='mx-8 py-0.5 hover:border-b-4 transition-all duration-400 hover:-translate-y-2 hover:text-yellow-600'>Produkty</div>
        <div className='mx-8 py-0.5 hover:border-b-4 transition-all duration-400 hover:-translate-y-2'>Galeria</div>
      </div>
      <div>
        <img className='w-[225x] h-[168px]' src='/logo.png' alt="logo"></img>
      </div>
      <div className='flex justify-between gap-10 mx-8'>
        <div className=' py-0.5 hover:border-b-4 transition-all duration-400 hover:-translate-y-2'>O nas</div>
        <div className=' py-0.5 hover:border-b-4 transition-all duration-400 hover:-translate-y-2'>Kontakt</div>
      </div>
    </div>
    
  )
}

export default Navbar
