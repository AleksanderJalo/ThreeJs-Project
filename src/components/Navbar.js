import React from 'react';

const Navbar = () => {
  return (
    <div className='flex w-full justify-evenly items-center border-solid bg-slate-900 text-white font-fixedsys text-xl '>
      <div className='flex justify-around'>
        <div className='mx-8 border-white hover:border-b '>Produkty</div>
        <div className='mx-8 border-white hover:border-b'>Galeria</div>
      </div>
      <div>
        <img className='w-[150px] h-[112px]' src='/logo.png' alt="logo"></img>
      </div>
      <div className='flex justify-around'>
        <div className='mx-8 border-white hover:border-b'>O nas</div>
        <div className='mx-8 border-white hover:border-b'>Kontakt</div>
      </div>
    </div>
    
  )
}

export default Navbar
