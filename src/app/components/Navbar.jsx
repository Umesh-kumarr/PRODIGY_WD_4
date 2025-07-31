"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import Navlink from "./Navlink";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import MenuOverlay from "./MenuOverlay";

const navLinks = [
  { title: "About", path: "#about" },
  { title: "Projects", path: "#projects" },
  { title: "Contact", path: "#contact" },
];

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClose = () => setNavbarOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg"
          : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          <Link
            href="/"
            className="text-2xl lg:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Homepage"
          >
            Umesh.dev
          </Link>
          <div className="md:hidden">
            <button
              onClick={() => setNavbarOpen((open) => !open)}
              className="flex items-center px-3 py-2 border border-gray-600 text-gray-300 hover:text-white hover:border-white rounded-lg transition-all duration-300 hover:bg-gray-800/50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              aria-label={navbarOpen ? "Close menu" : "Open menu"}
              aria-expanded={navbarOpen}
            >
              {navbarOpen ? <XMarkIcon className="h-5 w-5" /> : <Bars3Icon className="h-5 w-5" />}
            </button>
          </div>
          <ul className="hidden md:flex items-center space-x-8" role="menubar">
            {navLinks.map((link, index) => (
              <li key={index} role="none">
                <Navlink href={link.path} title={link.title} />
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-blue-500"
                aria-label="Contact section"
              >
                Get In Touch
              </Link>
            </li>
          </ul>
        </div>
      </div>
      {navbarOpen && (
        <MenuOverlay links={navLinks} onClose={handleMenuClose} />
      )}
    </nav>
  );
};

export default Navbar;
