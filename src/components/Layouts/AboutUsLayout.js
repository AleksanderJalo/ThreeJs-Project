import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const AboutUsLayout = () => {
  return (
    <AnimatePresence>
      <div className="flex flex-col text-8xl justify-center items-center">
        <motion.div
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Give us Your $$$
        </motion.div>
        <motion.div
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
        >
          Motherfucker
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

export default AboutUsLayout;
