import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const UseVarietyModal = (props) => {
  return (
    <AnimatePresence>
      {props.layout === "Home" && (
        <motion.div
          initial={{ x: -1000, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -1000, opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative w-2/3 h-full font-nasa ml-22"
        >
          <div className="absolute bg-behindModal h-full rounded-xl -top-3 -left-3 w-full"></div>
          <div className="bg-modalDark rounded-xl items-center relative flex flex-col text-mainBackground px-10 py-12 w-full">
            Use variety of customizable setting to adjust your own personal
            thnig .. i mean keyboard.. we can offer a lots of adjustable
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UseVarietyModal;
