import React from "react";

const Navbar = () => {
  return (
    <div className="flex w-full justify-evenly items-center border-solid bg-slate-900 text-white font-fixedsys text-3xl">
      <div className="flex justify-between gap-5">
        <div className="mx-8 py-0.5 border-double rounded-2xl pb-2 px-1 border-yellow-700 hover:border-b-4 transition-all duration-400 hover:-translate-y-2 hover:text-yellow-600">
          Produkty
        </div>
        <div className="mx-8 py-0.5 border-double rounded-2xl pb-2 px-1 border-yellow-700 hover:border-b-4 transition-all duration-400 hover:-translate-y-2 hover:text-yellow-600">
          Galeria
        </div>
      </div>
      <div>
        <img className="w-[225x] h-[168px]" src="/logo.png" alt="logo"></img>
      </div>
      <div className="flex justify-between gap-10 mx-8">
        <div className="mx-8 py-0.5 border-double rounded-2xl pb-2 px-1 border-yellow-700 hover:border-b-4 transition-all duration-400 hover:-translate-y-2 hover:text-yellow-600">
          O nas
        </div>
        <div className="mx-8 py-0.5 border-double rounded-2xl pb-2 px-1 border-yellow-700 hover:border-b-4 transition-all duration-400 hover:-translate-y-2 hover:text-yellow-600">
          Kontakt
        </div>
      </div>
    </div>
  );
};

export default Navbar;
