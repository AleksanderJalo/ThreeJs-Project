import React from "react";
import { motion } from "framer-motion";
import NavbarButton from "./NavbarButton.js";

const Navbar = (props) => {
  return (
    <div className="flex w-full justify-evenly items-center border-solid bg-[#dfd0BB] text-[#943d2c] font-fixedsys text-3xl ">
      <div className="flex justify-center gap-10 w-1/3">
        <NavbarButton setLayout={props.setLayout} layout={props.layout}>
          Create
        </NavbarButton>
        <NavbarButton setLayout={props.setLayout} layout={props.layout}>
          Gallery
        </NavbarButton>
      </div>
      <motion.div
        whileHover={{
          scale: 0.9,
          y: 20,
        }}
        onClick={() => props.setLayout("Home")}
      >
        <img
          className="w-[225x] h-[168px] cursor-pointer"
          src="/logo.png"
          alt="logo"
        ></img>
      </motion.div>
      <div className="flex justify-center gap-10  w-1/3">
        <NavbarButton setLayout={props.setLayout} layout={props.layout}>
          About Us
        </NavbarButton>
        <NavbarButton setLayout={props.setLayout} layout={props.layout}>
          Contact
        </NavbarButton>
      </div>
    </div>
  );
};

export default Navbar;
