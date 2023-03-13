import React from "react";
import { BsDroplet } from "react-icons/bs";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      staggerChildren: 0.4,
    },
  },
};

const childVariants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const FiveDayCard = ({
  minimumTemperature,
  maximumTemperature,
  precipitationProbabilityDay,
  precipitationProbabilityNight,
  airQuality,
  uvIndex,
  dayOfWeek,
  date,
}) => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="w-3/4 xs:w-1/2 h-28 font-spacegrotesk flex flex-row bg-secondaryColor px-4 py-2 my-5 rounded-2xl"
    >
      <motion.div
        variants={childVariants}
        className="flex grow-1 flex-col justify-center items-start"
      >
        <span className="text-textColor text-base xs:text-lg">{dayOfWeek}</span>
        <span className="text-textColor text-base xs:text-lg">{date}</span>
      </motion.div>
      <motion.div
        variants={childVariants}
        className="flex grow-2 justify-center items-center"
      >
        <span className="text-textColor text-lg sm:text-4xl">
          {`${maximumTemperature}°C`}
        </span>
        <span className="text-textColor text-lg sm:text-4xl">/</span>
        <span className="text-textColor text-base sm:text-2xl">
          {`${minimumTemperature}°C`}
        </span>
      </motion.div>
      <motion.div
        variants={childVariants}
        className="hidden lg:flex grow-3 justify-center items-center"
      >
        <span className="text-textColor text-xl font-semibold text-center">
          {`Air Quality: ${airQuality} & UV Index: ${uvIndex}`}
        </span>
      </motion.div>
      <motion.div
        variants={childVariants}
        className="flex grow-1 justify-end items-center"
      >
        <span className="text-textColor text-base sm:text-lg px-4">
          <BsDroplet />
        </span>
        <span className="text-textColor text-sm sm:text-lg">
          {`${precipitationProbabilityDay}% / ${precipitationProbabilityNight}%`}
        </span>
      </motion.div>
    </motion.div>
  );
};

export default FiveDayCard;
