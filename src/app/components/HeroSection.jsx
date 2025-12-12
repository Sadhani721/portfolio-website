"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="py-6 md:py-8 lg:py-12 pt-24 md:pt-28 lg:pt-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 lg:gap-6">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 lg:col-span-7 place-self-center text-center lg:text-left order-2 lg:order-1"
        >
          <h1 className="text-white mb-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            <span className="text-white">
              Hello, I&apos;m{" "}
            </span>
            <br></br>
            <TypeAnimation
              sequence={[
                "Sadhani Sulakshani",
                800,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={false}
            />
          </h1>
          
          {/* Rotating Roles */}
          <div className="mb-4 h-8 sm:h-10 md:h-12 lg:h-14 flex items-center justify-center lg:justify-start">
            <TypeAnimation
              sequence={[
                "Fullstack Developer",
                2000,
                "Software Developer", 
                2000,
                "Frontend Developer",
                2000,
                "Backend Developer",
                2000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              cursor={false}
              className="text-blue-400 text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold"
            />
          </div>
          
          <p className="text-[#ADB7BE] text-xs sm:text-sm md:text-base lg:text-lg mb-4 max-w-md">
           Building powerful and elegant web applications with clean code, creative design, and a focus on seamless user experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center lg:justify-start">
            <Link
              href="/#contact"
              className="px-4 py-2 w-full sm:w-auto text-center rounded-full border-2 bg-linear-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white text-sm font-medium transition-all duration-300"
            >
              Contact me
            </Link>
            <Link
              href="/Sadhani Sulakshani.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Sadhani Sulakshani.pdf"
              className="px-4 py-2 w-full sm:w-auto text-center rounded-full border-2 bg-linear-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white text-sm font-medium transition-all duration-300"
            >
              Download CV
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 lg:col-span-5 place-self-center order-1 lg:order-2 mb-6 lg:mb-0 relative"
        >
          {/* Glowing Background Effect */}
          <div className="absolute inset-0 -m-8">
            <div className="w-full h-full bg-linear-to-r from-blue-600/20 via-purple-600/20 to-pink-600/20 rounded-full blur-3xl animate-pulse"></div>
          </div>
          
          {/* Main Image Container with Enhanced Effects */}
          <div className="relative z-10">
            {/* Outer Glow Ring */}
            <div className="absolute -inset-4 bg-linear-to-r from-blue-800 via-purple-500 to-blue-500 rounded-3xl blur-md opacity-75 animate-pulse"></div>
            
            {/* Inner Border Frame */}
            <div className="relative bg-linear-to-br from-blue-800 via-purple-500 to-blue-800 p-1 rounded-3xl">
              <div className="rounded-3xl bg-gray-900 p-2">
                <div className="rounded-2xl bg-[#e1d4d4] w-48 h-60 sm:w-52 sm:h-64 md:w-56 md:h-72 lg:w-64 lg:h-80 xl:w-72 xl:h-[360px] relative overflow-hidden shadow-2xl">
                  <Image
                    src="/images/my1.JPG"
                    alt="hero image"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  
                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/20 via-transparent to-transparent"></div>
                  
                  {/* Floating Light Effects */}
                  <div className="absolute top-4 right-4 w-3 h-3 bg-blue-400 rounded-full animate-ping opacity-70"></div>
                  <div className="absolute bottom-6 left-4 w-2 h-2 bg-purple-400 rounded-full animate-pulse opacity-60"></div>
                  <div className="absolute top-1/3 left-6 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-50"></div>
                </div>
              </div>
            </div>
            
            {/* Additional Glow Particles */}
            <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500/30 rounded-full blur-xl animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-8 h-8 bg-purple-500/25 rounded-full blur-lg animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 -right-8 w-6 h-6 bg-pink-500/20 rounded-full blur-md animate-pulse delay-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;