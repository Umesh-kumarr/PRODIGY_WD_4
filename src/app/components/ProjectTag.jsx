"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectTag = ({ name, onClick, isSelected }) => {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onClick(name)}
      className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        isSelected
          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
          : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700"
      }`}
    >
      {name}
    </motion.button>
  );
};

export default ProjectTag;
