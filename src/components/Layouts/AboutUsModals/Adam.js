import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const Adam = (props) => {
  return (
    <AnimatePresence>
      {props.layout === "About Us" && (
        <motion.div
          key="AdamModal"
          initial={{ x: -1800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -1800, opacity: 0 }}
          transition={{ duration: 1 }}
          className="relative w-2/5 rounded-xl h-full md:mb-[14px]"
        >
          <div className="absolute bg-behindModal rounded-xl -bottom-3 -left-3 w-full h-full"></div>
          <div className="relative flex flex-col  bg-[#474344]  w-full h-full rounded-xl">
            <div className="text-8xl text-behindModal py-5 px-6">Adam</div>
            <div className="text-xl px-6 py-10 font-nasa text-mainBackground">
              Adam is a passionate individual who enjoys creating 3D models.
              From a young age, he discovered an extraordinary love for this
              field. His enthusiasm for designing three-dimensional objects
              keeps him glued to the computer for hours, sketching, crafting,
              and visualizing his ideas. Adam's skills are constantly evolving,
              and the results of his work are awe-inspiring to both his friends
              and industry professionals. He experiments with various modeling
              techniques, utilizing advanced software and tools. His portfolio
              is filled with impressive renders, ranging from realistic
              characters to futuristic landscapes. Adam dreams of working as a
              professional 3D designer, transforming his passions into a
              full-fledged career.3D designer
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Adam;
