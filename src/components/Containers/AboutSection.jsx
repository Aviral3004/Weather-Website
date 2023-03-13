import React from "react";
import { WiCloudUp } from "react-icons/wi";
import { motion } from "framer-motion";

import SiteDescription from "../Cards/SiteDescription";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 1.2,
      duration: 1,
    },
  },
};

const innerContainerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const AboutSection = () => {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 mx-10 my-10 items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="flex justify-center items-center">
        <WiCloudUp className="text-primaryColor text-9xl md:text-[18rem]" />
      </div>
      <motion.div
        className="flex bg-gray-300 text-black px-10 py-5 rounded-3xl"
        variants={innerContainerVariants}
        whileHover={{
          y: -5,
        }}
      >
        <SiteDescription />
      </motion.div>
    </motion.div>
  );
};

export default AboutSection;