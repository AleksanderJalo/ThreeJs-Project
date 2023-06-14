import React from "react";
import { motion } from "framer-motion";
const SignInButton = () => {
  return (
    <motion.div
      whileHover={{ scale: 1.1, y: -10 }}
      className="text-3xl p-2 px-4 font-nasa bg-[#474344] text-[#DFD0BB] cursor-pointer rounded-xl"
    >
      Sign Up
    </motion.div>
  );
};

export default SignInButton;
