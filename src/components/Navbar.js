import React from "react";
import { motion } from "framer-motion";
import NavbarButton from "./NavbarButton.js";

const Navbar = () => {
  return (
    <div className="flex w-full justify-evenly items-center border-solid bg-slate-900 text-white font-fixedsys text-3xl">
      <div className="flex justify-between gap-5">
        <NavbarButton>Produkty</NavbarButton>
        <NavbarButton>Galeria</NavbarButton>
      </div>
      <motion.div
        whileHover={{
          scale: 0.9,
          y: 20,
        }}
      >
        <img className="w-[225x] h-[168px]" src="/logo.png" alt="logo"></img>
      </motion.div>
      <div className="flex justify-between gap-10 mx-8">
        <NavbarButton>O nas</NavbarButton>
        <NavbarButton>Kontakt</NavbarButton>
      </div>
    </div>
  );
};

export default Navbar;
