import React from "react";
import { motion } from "framer-motion";


const UserComments = ({ comment, company, job, name }) => {
  return (
    <motion.div
      className="flex flex-col justify-center items-center font-spacegrotesk bg-gray-300 text-center rounded-lg my-2 mx-6 py-6 px-10 shadow-lg"
      whileHover={{
        scale: 1.025,
      }}
    >
      <blockquote className="text-sm md:text-lg mb-2 font-medium text-black">
        <p>{`"${comment}"`}</p>
      </blockquote>
      <h5 className="text-lg text-black-400">{name}</h5>
      <p className="text-base font-medium text-black-600">{`${job}, ${company}`}</p>
    </motion.div>
  );
};

export default UserComments;