import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const ContactLayout = (props) => {
  return (
    <div className="flex justify-center items-center h-full w-full grow">
      <AnimatePresence>
      {props.layout === "Contact" && (
        <motion.div
          initial={{ y: 1000, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
            exit={{
              y:
                1000, opacity: 0
            }}
          transition={{ duration: 1 }}
          className="relative w-1/3 h-full font-nasa"
        >
          <div className="absolute bg-behindModal h-full  rounded-xl -top-3 -left-3 w-full"></div>
          <div className="bg-modalDark rounded-xl items-center relative flex flex-col text-mainBackground p-64 text-center w-full">
            Tutaj będzie giga cool mapa
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </div>
  )
}

export default ContactLayout