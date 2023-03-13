import React, { Fragment } from "react";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    x: -50,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const HeadlineText = ({ subHeading, text }) => {
  return (
    <Fragment>
      <motion.h2
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-textColor text-4xl font-spacegrotesk font-semibold mt-6 mb-3 underline"
      >
        {subHeading}
      </motion.h2>
      <motion.h5
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="text-textColor text-lg font-spacegrotesk font-medium my-3"
      >
        {text}
      </motion.h5>
    </Fragment>
  );
};

export default HeadlineText;
