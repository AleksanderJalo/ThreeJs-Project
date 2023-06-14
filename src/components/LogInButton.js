import React from 'react'
import { motion } from 'framer-motion'
const LogInButton = () => {
  return (
      <motion.div
          whileHover={{scale:1.1, y:-10}}
          className='text-3xl text-[#474344] cursor-pointer p-2 px-4 font-nasa bg-[#E5BD77] rounded-xl'>Log In</motion.div>
  )
}

export default LogInButton