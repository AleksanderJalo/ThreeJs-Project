import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import KeyboardScreen from "../../KeyboardScreen";
const RightUpHomeModal = (props) => {
  return (
    <AnimatePresence mode="wait">
      {props.layout === "Home" && (
        <motion.div
          key="DModal"
          exit={{ x: 400, opacity: 0 }}
          initial={{ x: 400, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="h-1/2"
        >
          <KeyboardScreen />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default RightUpHomeModal;
