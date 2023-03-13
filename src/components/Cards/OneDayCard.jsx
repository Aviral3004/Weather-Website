import React from "react";
import moment from "moment";
import { BsSun, BsMoon } from "react-icons/bs";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
    y: 30,
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
    y: 20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const childVariantss = {
  hidden: {
    opacity: 0,
    x: -20,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const OneDayCard = (props) => {
  const isDay = props.time === "day";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="flex flex-col w-3/4 lg:w-1/2 bg-secondaryColor my-10 px-10 py-5 rounded-lg font-spacegrotesk"
    >
      <motion.div
        variants={childVariants}
        className="flex justify-between py-2 mb-3 border-b-2 border-textColor"
      >
        <h5 className="text-textColor uppercase">{props.time}</h5>
        <h5 className="text-textColor">{moment().format("DD-MMM")}</h5>
      </motion.div>
      <motion.div
        variants={childVariants}
        className="text-textColor flex flex-row lg:flex-row items-center justify-between my-4"
      >
        <span className="flex flex-row items-baseline">
          <h1 className="font-bold text-6xl">{`${props.temperature}°`}</h1>
          <h3 className="font-light text-lg">{isDay ? "Hi" : "Lo"}</h3>
        </span>
        <span className="mt-6 lg:mt-0 text-6xl">
          {isDay ? <BsSun /> : <BsMoon />}
        </span>
      </motion.div>
      <motion.h5
        variants={childVariants}
        className="text-textColor font-semibold text-lg sm:text-xl mb-3"
      >
        {props.aboutWeather}
      </motion.h5>
      <motion.div
        variants={childVariantss}
        className="grid grid-cols-1 lg:grid-cols-2 lg:gap-x-10"
      >
        <div className="flex flex-col">
          <span className="text-textColor flex justify-between">
            <p className="text-sm sm:text-lg font-light">Wind Gust</p>
            <p className="text-sm sm:text-lg font-semibold text-right">
              {props.windGust}
            </p>
          </span>
          {isDay && (
            <span className="text-textColor flex justify-between items-center">
              <p className="text-sm sm:text-lg font-light">Max UV Index</p>
              <p className="text-sm sm:text-lg font-semibold text-right">
                {props.uvIndex}
              </p>
            </span>
          )}
          <span className="text-textColor flex justify-between items-center">
            <p className="text-sm sm:text-lg font-light">
              Real Feel Temperature
            </p>
            <p className="text-sm sm:text-lg font-semibold">
              {`${props.realFeelTemperature}°`}
            </p>
          </span>
        </div>
        <div className="flex flex-col">
          {isDay && (
            <span className="text-textColor flex justify-between">
              <p className="text-sm sm:text-lg font-light">
                Real Feel Temperature Shade
              </p>
              <p className="text-sm sm:text-lg font-semibold">
                {`${props.realFeelTemperatureShade}°`}
              </p>
            </span>
          )}
          <span className="text-textColor flex justify-between">
            <p className="text-sm sm:text-lg font-light">Precipitation</p>
            <p className="text-sm sm:text-lg font-semibold">{`${props.precipitationProbability}%`}</p>
          </span>
          {isDay && (
            <span className="text-textColor flex justify-between">
              <p className="text-sm sm:text-lg font-light">Hours of Sun</p>
              <p className="text-sm sm:text-lg font-semibold">
                {props.hoursOfSun}
              </p>
            </span>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default OneDayCard;
