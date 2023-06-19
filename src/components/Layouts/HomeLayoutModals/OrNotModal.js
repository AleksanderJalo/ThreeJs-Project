import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const OrNotModal = (props) => {
  return (
    <AnimatePresence>
      {props.layout === "Home" && (
        <motion.div
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 1000, opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative w-full h-full left-[350px]  font-nasa ml-32 mt-24"
        >
          <div className="absolute bg-behindModal rounded-xl -bottom-3 -right-3 w-full h-full"></div>
          <div className="bg-modalDark rounded-xl items-center relative flex flex-col text-mainBackground px-10 py-8 w-full">
            <div className="text-4xl font-nasa flex gap-2 pb-8">
              Or <span className="text-behindModal"> not</span>
            </div>
            <div className="text-xl text-center">
              Just use some of our tameplates or other users .. btw you still
              can modify them as you want
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default OrNotModal;
