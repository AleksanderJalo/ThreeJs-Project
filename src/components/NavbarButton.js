import React from "react";
import { motion } from "framer-motion";

const NavbarButton = (props) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.3,
        y: -20,
        transition: { ease: "easeInOut" },
      }}
      className="cursor-pointer mx-8 py-0.5 border-double rounded-2xl pb-2 px-1 border-yellow-700 hover:border-b-4 hover:text-yellow-600"
    >
      {props.children}
    </motion.div>
  );
};

export default NavbarButton;
