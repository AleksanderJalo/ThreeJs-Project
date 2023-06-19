import React from "react";
import { AnimatePresence, motion } from "framer-motion";

const Olo = (props) => {
  return (
    <AnimatePresence>
      {props.layout === "About Us" && (
        <motion.div
          key="AdamModal"
          initial={{ x: 1800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 1800, opacity: 0 }}
          transition={{ duration: 0.9 }}
          className="relative w-2/5 rounded-xl h-full "
        >
          <div className="absolute bg-behindModal rounded-xl -bottom-3 -left-3 w-full h-full"></div>
          <div className="relative flex flex-col  bg-[#474344]  w-full h-full rounded-xl">
            <div className="text-8xl text-behindModal py-3 px-6  ">Olo</div>
            <div className="text-xl px-6 py-10 font-nasa text-mainBackground">
              Olo was a programmer with a passion for code and a mind that
              thrived on complex algorithms. His days were filled with lines of
              intricate logic and innovative solutions, transforming abstract
              concepts into functional systems. One day, while working on a
              groundbreaking project, Olo stumbled upon a hidden bug that
              threatened to sabotage everything. Determined, he delved deep into
              the code, tirelessly debugging and rewriting until the problem was
              conquered. Olo's expertise saved the project, earning him respect
              and admiration from his colleagues. From that day forward, Olo's
              name became synonymous with brilliance, and his story served as an
              inspiration to aspiring programmers around the world.
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Olo;
