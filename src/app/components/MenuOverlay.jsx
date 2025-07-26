"use client";
import React from "react";
import Navlink from "./Navlink";

const MenuOverlay = ({ links, onClose }) => {
  return (
    <div
      className="lg:hidden bg-gray-900/95 backdrop-blur-md border-b border-gray-800 px-4 py-6"
      role="menu"
      aria-label="Mobile navigation menu"
    >
      <ul className="flex flex-col space-y-4">
        {links.map((link, index) => (
          <li key={index}>
            <Navlink href={link.path} title={link.title} onClick={onClose} />
          </li>
        ))}
        <li className="pt-4">
          <a
            href="#contact"
            onClick={onClose}
            className="block px-4 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 text-center focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Contact section"
          >
            Get In Touch
          </a>
        </li>
      </ul>
    </div>
  );
};

export default MenuOverlay;
