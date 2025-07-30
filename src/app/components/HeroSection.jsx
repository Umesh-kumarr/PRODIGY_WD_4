"use client"
import React from 'react';
import Image from 'next/image';

import { TypeAnimation } from 'react-type-animation';
import { motion } from "framer-motion";
import Link from "next/link";



const HeroSection = () => {
    return (
        <section className="min-h-[80vh] flex items-center justify-center">
            <div className="grid grid-cols-1 grid-rows-1 lg:grid-cols-2 gap-8 items-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className=" lg:col-span-8 place-self-auto text-center lg:text-left"
                >
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="mb-6"
                    >
                        <span className="text-blue-400 font-medium text-lg">Welcome to my Portfolio</span>
                    </motion.div>
                    <h1 className="text-white  mb-6 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500">
                            Hi, I'm{" "}
                        </span>
                        <br />
                        <TypeAnimation
                            sequence={[
                                "Umesh",
                                2000,
                                "a Fullstack Developer",
                                2000,
                                "a UI/UX Designer",
                                2000,
                                "a Problem Solver",
                                2000,
                            ]}
                            wrapper="span"
                            speed={50}
                            className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-500"
                            repeat={Infinity}
                        />
                    </h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.4 }}
                        className="text-gray-300 text-sm sm:text-base lg:text-lg mb-8 max-w-xl"
                    >
                        I craft exceptional digital experiences with modern technologies. Passionate about creating innovative solutions that make a difference.
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.6 }}
                        className="flex flex-col sm:flex-row gap-4 items-center justify-center lg:justify-start"
                    >
                        <Link
                            href="#contact"
                            className="px-4 py-2 md:px-8 md:py-4 lg:px-8 lg:py-4 w-60 lg:w-auto rounded-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-semibold text-base md:text-lg lg:text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                        >
                            Download CV
                        </Link>
                        <Link
                            href="#projects"
                            className=" px-4 py-2 md:px-8 md:py-4 lg:px-8 lg:py-4 w-60 lg:w-auto rounded-full border-2 border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white font-semibold text-base md:text-lg lg:text-lg transition-all duration-300 transform hover:scale-105"
                        >
                            View My Work
                        </Link>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 0.8 }}
                        className="mt-8 flex items-center justify-center lg:justify-start gap-6"
                    >
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                            <span className="text-gray-400">Available for opportunities</span>
                        </div>
                    </motion.div>
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="row-start-1 lg:col-start-9  lg:col-span-4 place-self-auto"
                >
                    <div className="relative md:w-fit md:pl-12">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
                        <div className="relative rounded-full bg-gradient-to-br from-gray-800 to-gray-900 p-2 shadow-2xl">
                            <div className="rounded-full bg-gradient-to-br from-blue-500/10 to-purple-500/10 p-4">
                                <Image
                                    src="/images/heroimage.png"
                                    alt="Umesh - Full Stack Developer Hero Image"
                                    className="rounded-full object-cover"
                                    width={400}
                                    height={400}
                                    priority
                                />
                            </div>
                        </div>
                        <motion.div
                            animate={{ rotate: 360, scale: [1, 1.1, 1] }}
                            transition={{ rotate: { duration: 20, repeat: Infinity, ease: "linear" }, scale: { duration: 2, repeat: Infinity, ease: "easeInOut" } }}
                            className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full opacity-20"
                        />
                        <motion.div
                            animate={{ rotate: -360, scale: [1, 1.2, 1] }}
                            transition={{ rotate: { duration: 15, repeat: Infinity, ease: "linear" }, scale: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
                            className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-20"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default HeroSection
