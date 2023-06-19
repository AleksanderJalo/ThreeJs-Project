import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const GalleryLayout = () => {
  return (
    <div className="flex justify-center mt-12 grow gap-44">
      <AnimatePresence>
        <motion.div
          initial={{ x: -1800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -1800, opacity: 0 }}
          transition={{ duration: 1 }}
          className=" flex flex-col gap-10"
        >
          <div className="h-[300px] w-[380px] bg-modalDark rounded-xl"></div>
          <div className="h-[300px] w-[380px] bg-modalDark rounded-xl"></div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        <motion.div
          initial={{ y: 1800, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 1800, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className=" flex flex-col gap-10"
        >
          <div className="h-[300px] w-[380px] bg-modalDark rounded-xl"></div>
          <div className="h-[300px] w-[380px] bg-modalDark rounded-xl"></div>
        </motion.div>
      </AnimatePresence>
      <AnimatePresence>
        <motion.div
          initial={{ x: 1800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 1800, opacity: 0 }}
          transition={{ duration: 0.9 }}
          className=" flex flex-col gap-10"
        >
          <div className="h-[300px] w-[380px] bg-modalDark rounded-xl"></div>
          <div className="h-[300px] w-[380px] bg-modalDark rounded-xl"></div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default GalleryLayout;
