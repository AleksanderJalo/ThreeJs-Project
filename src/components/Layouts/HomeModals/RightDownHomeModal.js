import React from 'react'
import { AnimatePresence, motion } from 'framer-motion'
const RightDownHomeModal = (props) => {
  return (
    <AnimatePresence mode="wait">
            {props.layout === "Home" && (
              <motion.div
                key="EModal"
                initial={{ y: 400, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 400, opacity: 0 }}
                transition={{ delay: 0.5, duration: 1 }}
                className="bg-[#E5BD77] rounded-xl flex flex-col h-1/2"
              >
                <div className="text-[#474344] font-fixedsys text-6xl px-2">
                  <span className="text-[#943d2c]">Custom</span> Key
                </div>
                <div className="text-[#474344] font-fixedsys text-3xl px-2">
                  Blackwidow Pro v4
                </div>
                <div className="text-[#474344] font-fixedsys text-xl px-2 py-6">
                  Introducing our first-ever series of ultra-slim optical
                  keyboards, optimized for top-tier performance and durability.
                  Featuring all-new low-profile switches within a lean, durable
                  casing, experience ultra-responsive gaming designed for
                  long-lasting ergonomic use.
                </div>
              </motion.div>
            )}
          </AnimatePresence>
  )
}

export default RightDownHomeModal