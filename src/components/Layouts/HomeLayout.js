import React from "react";
import KeyboardScreen from "../KeyboardScreen";
import { motion, AnimatePresence } from "framer-motion";
const HomeLayout = () => {
  const delay = 0.5;
  return (
    <AnimatePresence mode="wait">
      <div className="flex grow min-w-full justify-center gap-22">
        <div className="flex flex-col grow m-10 gap-10 w-3/5 ">
          <motion.div
            className="bg-[#474344] rounded-xl text-white w-full h-1/2 flex flex-col font-nasa"
            initial={{ x: -400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{delay: delay + 0.1, duration: 1}}
          >
            <div className="text-[#e5bd77] text-6xl px-6 pt-2">Custom</div>
            <div className="text-[#DFD0BB] text-6xl px-6">Keyboards</div>
            <div className="text-[#DFD0BB] text-2xl px-6 text-justify mt-8 pb-3 font-nasa">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris
              elit ante, dapibus non nisl at, varius interdum risus. Nam lectus
              lacus, tempus sed rhoncus id, vestibulum eget ex. Etiam viverra.
              Rhoncus id, vestibulum eget ex. tempus sed rhoncus id, vestibulum eget ex. Etiam viverra.
            </div>
          </motion.div>

          <div className="h-1/2 flex justify-between">
            <motion.div
              initial={{ x: -400, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{delay: delay, duration: 1}}
              className="border-[#474344] border-8 font-nasa text-[#943d2c] w-1/2 rounded-xl flex-col flex px-2 py-2 text-3xl justify-between"
            >
              <div>LOW-PROFILE</div>
              <div>ERGONOMICS </div>
              <div>HIGH-PERFORMANCE</div>
              <div>WIRELESS</div>
            </motion.div>

            <motion.div
              initial={{ y: 400, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{delay: delay, duration: 1}}
              className="flex flex-col justify-between w-full gap-5 ml-4 border-[#474344] border-8 rounded-xl"
            >
              <div className="bg-[#E5BD77] w-full h-1/4  border-b-8 border-[#474344] text-[#474344] text-4xl text-bold font-nasa flex items-center justify-center">
                Create What You Like
              </div>
              <div className=" rounded-xl  grow">ddd</div>
            </motion.div>
          </div>
        </div>
        <div className="grow m-10 rounded-xl w-2/5 flex flex-col gap-8">
          <motion.div
            initial={{ x: 400, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{delay: delay, duration: 1}}
            className="h-3/5">
            <KeyboardScreen />
          </motion.div>
          <motion.div
          initial={{ y: 400, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{delay: delay + 0.1, duration: 1}}
            className="bg-[#E5BD77] h-2/5 rounded-xl flex flex-col">
            <div className="text-[#474344] font-fixedsys text-4xl px-2">
              <span className="text-[#943d2c]">Custom</span> Key
            </div>
            <div className="text-[#474344] font-fixedsys text-3xl px-2">
              Blackwidow Pro v4
            </div>
            <div className="text-[#474344] font-fixedsys text-xl px-2 mt-6">
              Introducing our first-ever series of ultra-slim optical keyboards,
              optimized for top-tier performance and durability. Featuring
              all-new low-profile switches within a lean, durable casing,
              experience ultra-responsive gaming designed for long-lasting
              ergonomic use.
            </div>
          </motion.div>
        </div>
      </div>
    </AnimatePresence>
  );
};

export default HomeLayout;
