import React from "react";
import { motion } from "framer-motion";

const NavbarButton = (props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.3,
        y: -20,
        transition: { ease: "easeOut" },
      }}
      onClick={() => props.setLayout(props.children)}
      className={`cursor-pointer mx-8 border-solid rounded-md px-1 border-[#cc7952] hover:border-b-4 hover:text-[#cc7952] ${(props.children === props.layout ? "border-b-4" : "")}`}
    >
      {props.children}
    </motion.div>
  );
};

export default NavbarButton;
