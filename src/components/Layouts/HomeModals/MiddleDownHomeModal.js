import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const MiddleDownHomeModal = (props) => {
  return (
    <AnimatePresence mode="wait">
      {props.layout === "Home" && (
        <motion.div
          key="CModal"
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 400, opacity: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="flex flex-col justify-between w-full gap-5 ml-4 border-[#474344] border-8 rounded-xl grow h-full"
        >
          <div className="bg-[#E5BD77] w-full h-1/4  border-b-8 border-[#474344] text-[#474344] text-4xl text-bold font-nasa flex items-center justify-center">
            Create What You Like
          </div>
          <div className=" rounded-xl  grow">ddd</div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MiddleDownHomeModal;
