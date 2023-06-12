import React from "react";
import { motion } from "framer-motion";
import NavbarButton from "./NavbarButton.js";

const Navbar = () => {
  return (
    <div className="flex w-full justify-evenly items-center border-solid bg-[#dfd0BB] text-[#943d2c] font-fixedsys text-3xl">
      <div className="flex justify-between gap-5">
        <NavbarButton>Products</NavbarButton>
        <NavbarButton>Gallery</NavbarButton>
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
        <NavbarButton>About Us
        </NavbarButton>
        <NavbarButton>Contact</NavbarButton>
      </div>
    </div>
  );
};

export default Navbar;
