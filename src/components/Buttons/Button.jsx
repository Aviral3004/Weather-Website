import React, { Fragment } from "react";
import { motion } from "framer-motion";

const animator = {
  hidden: {
    opacity: 0,
    x: -30,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {duration: 0.7},
  },
};

const Button = ({ buttonTitle, onClick }) => {
  return (
    <Fragment>
      <span className="font-spacegrotesk font-normal uppercase text-textColor text-base align-middle text-center">
        <motion.button
          variants={animator}
          initial="hidden"
          animate="visible"
          whileHover={{ scale: 1.1, transition: { duration: 0.5 } }}
          className="rounded-md bg-primaryColor px-5 py-2 cursor-pointer"
          onClick={onClick}
        >
          {buttonTitle}
        </motion.button>
      </span>
    </Fragment>
  );
};

export default Button;
