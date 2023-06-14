import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const Adam = (props) => {
  return (
    <AnimatePresence>
      {props.layout === "About Us" && <motion.div
        key="AdamModal"
        initial={{ x: -1800, opacity: 0}}
        animate={{ x: 0, opacity: 1}}
        exit={{ x: -1800, opacity: 0}}
              transition={{   duration: 1 }}
        className="bg-[#E5BD77] w-2/5 rounded-xl p-64  relative"
      >
        <div className="absolute bg-[#474344] right-5 bottom-5 w-full h-full rounded-xl">
          AAA
        </div>
      </motion.div>}
    </AnimatePresence>
  );
};

export default Adam;
