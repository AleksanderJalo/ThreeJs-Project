import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const LeftRightHomeModal = (props) => {
  return (
    <AnimatePresence mode="wait">
            {props.layout === "Home" && (
              <motion.div
                key="CKModal"
                className="bg-[#474344] rounded-xl text-white w-full hs-1/2 flex flex-col font-nasa"
                initial={{ x: -300, opacity: 0 }}
                exit={{ opacity: 0, x: -300 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <div className="text-[#e5bd77] text-2xl xl:text-6xl px-6 pt-2">
                  Custom
                </div>
                <div className="text-[#DFD0BB] text-2xl xl:text-6xl px-6">
                  Keyboards
                </div>
                <div className="text-[#DFD0BB] text-2xl px-6 text-justify mt-8 pb-3 font-nasa">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Mauris elit ante, dapibus non nisl at, varius interdum risus.
                  Nam lectus lacus, tempus sed rhoncus id, vestibulum eget ex.
                  Etiam viverra. Rhoncus id, vestibulum eget ex. tempus sed
                  rhoncus id, vestibulum eget ex. Etiam viverra.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
  )
}

export default LeftRightHomeModal