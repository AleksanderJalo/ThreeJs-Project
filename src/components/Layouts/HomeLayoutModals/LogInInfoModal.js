import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import {ReactComponent as Arrow} from "../../../images/curved_arrow.svg"
const LogInInfoModal = (props) => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ x: 1000, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: 1000, opacity: 0 }}
        transition={{
          duration: 1,
          delay: props.showLayout === "Home" ? 0 : 0.5,
        }}
        className="absolute bottom-24"
      >
        <div className="relative w-full h-full font-nasa ml-22">
          <div className="absolute bg-behindModal h-full rounded-xl -top-3 -right-3 w-full"></div>
          <div className="bg-modalDark rounded-xl items-center relative flex flex-col text-mainBackground px-10 py-8 w-full">
            <div className="absolute -left-[100px] top-[100px]">
              <Arrow />
            </div>
            Sing in here [or log in if you already have accout] to see the
            creation of others or save and post your own
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default LogInInfoModal;
