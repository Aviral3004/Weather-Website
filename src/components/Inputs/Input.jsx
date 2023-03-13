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
    transition: { duration: 0.7 },
  },
};

const Input = ({ setCity }) => {
  const handleChange = (event) => setCity(event.target.value);

  return (
    <Fragment>
      <motion.input
        variants={animator}
        initial="hidden"
        animate="visible"
        type="text"
        placeholder="-- Enter a City --"
        onChange={handleChange}
        className="my-4 px-2 py-2 text-center text-lg font-spacegrotesk rounded-lg bg-transparent text-textColor placeholder:text-textColor border-b-2 border-secondaryColor focus:border-y-2 focus:outline-none"
      />
    </Fragment>
  );
};

export default Input;
