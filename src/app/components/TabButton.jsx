"use client";
import React from "react";
import { motion } from "framer-motion";

const TabButton = ({ children, selectTab, active }) => {
  return (
    <motion.button
      type="button"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={selectTab}
      className={`px-6 py-3 rounded-full font-semibold text-sm transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 ${
        active
          ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
          : "bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white border border-gray-700"
      }`}
    >
      {children}
    </motion.button>
  );
};

export default TabButton;
