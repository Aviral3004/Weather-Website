import React from "react";
import { motion } from "framer-motion";

const animator = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.7 },
  },
};

const HeadingText = ({ heading }) => {
  return (
    <motion.h1
      variants={animator}
      initial="hidden"
      animate="visible"
      className="font-spacegrotesk font-extrabold text-4xl sm:text-6xl text-textColor mt-8 mb-8"
    >
      {heading}
    </motion.h1>
  );
};

export default HeadingText;
