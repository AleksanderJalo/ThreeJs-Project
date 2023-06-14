import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Olo = (props) => {
  return (
    <AnimatePresence>
      {props.layout === "About Us" && <motion.div
        key="OloModal"
        initial={{ x: 1800 }}
        animate={{ x: 0 }}
        exit={{ x: 1800 }}
        transition={{ duration: 1 }}
        className="bg-[#E5BD77] w-2/5 rounded-xl p-64 z-10 relative"
      >
        <div className="absolute bg-[#474344] left-5 bottom -5 w-full h-full rounded-xl">
          AAA
        </div>
      </motion.div>}
    </AnimatePresence>
  );
};

export default Olo;
