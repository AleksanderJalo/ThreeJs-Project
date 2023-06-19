import React from "react";
import { AnimatePresence, motion } from "framer-motion";
const CustomizeKeyModal = (props) => {
  return (
    <AnimatePresence>
      {props.layout === "Home" && (
        <motion.div
          initial={{ x: -1800, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: -1800, opacity: 0 }}
          transition={{ duration: 0.8 }}
          className="relative  w-full h-full  font-nasa mt-10"
        >
          <div className="absolute bg-behindModal h-full w-full rounded-xl -top-3 -left-3"></div>
          <div className="bg-modalDark rounded-xl items-center relative flex flex-col">
            <div className="text-mainBackground text-4xl xl:text-6xl  mr-[113px] pt-10">
              <div>
                Custom<span className="text-behindModal">ize</span>
              </div>
            </div>
            <div className="text-mainBackground text-6xl ml-[112px]">
              Key<span className="text-behindModal">board</span>
            </div>
            <div className="text-mainBackground font-fixedsys py-10 px-10 text-2xl text-center">
              Create your dream keyboard set ... Choose from boardbase sizes to
              keycap colors. Variety of possibilities that you can create on
              your own. Be <span className="text-hoverOrange">creative.</span>{" "}
              Be <span className="text-hoverOrange">uniqe.</span> Be{" "}
              <span className="text-behindModal">yourself.</span>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CustomizeKeyModal;
