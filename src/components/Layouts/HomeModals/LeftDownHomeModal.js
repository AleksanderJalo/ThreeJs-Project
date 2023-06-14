import React from 'react'
import { AnimatePresence, motion } from 'framer-motion';

const LeftDownHomeModal = (props) => {
  return (
    <AnimatePresence mode="wait">
              {props.layout === "Home" && (
                <motion.div
                  key="BModal"
                  initial={{ x: -400, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: -400, opacity: 0 }}
                  transition={{ delay: 0.5, duration: 1 }}
                  className="border-[#474344] h-full border-8 font-nasa text-[#943d2c] w-1/2 rounded-xl flex-col flex px-2 py-2 text-3xl justify-between"
                >
                  <div>LOW-PROFILE</div>
                  <div>ERGONOMICS </div>
                  <div>HIGH-PERFORMANCE</div>
                  <div>WIRELESS</div>
                </motion.div>
              )}
            </AnimatePresence>
  )
}

export default LeftDownHomeModal