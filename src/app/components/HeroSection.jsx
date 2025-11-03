"use client";
import React from "react";
import Image from "next/image";
import { TypeAnimation } from "react-type-animation";
import { motion } from "framer-motion";
import Link from "next/link";

const HeroSection = () => {
  return (
    <section id="home" className="py-8 md:py-12 lg:py-16 pt-20">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 lg:col-span-7 place-self-center text-center lg:text-left order-2 lg:order-1"
        >
          <h1 className="text-white mb-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold leading-tight">
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
          <p className="text-[#ADB7BE] text-sm sm:text-base md:text-lg lg:text-xl mb-6 max-w-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            voluptuous.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
            <Link
              href="/#contact"
              className="px-6 py-3 w-full sm:w-auto text-center rounded-full  border-2 bg-linear-to-br from-primary-500 to-secondary-500 hover:from-primary-600 hover:to-secondary-600 text-white font-medium transition-all duration-300"
            >
              Contact me
            </Link>
            <Link
              href="/SADHANI-SE-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="SADHANI-SE-CV.pdf"
              className="px-6 py-3 w-full sm:w-auto text-center rounded-full border-2 border-primary-500 text-primary-500 hover:bg-primary-500 text-white font-medium transition-all duration-300"
            >
              Download CV
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="col-span-1 lg:col-span-5 place-self-center order-1 lg:order-2 mb-6 lg:mb-0"
        >
          <div className="rounded-full bg-[#e1d4d4] w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] md:w-[300px] md:h-[300px] lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px] relative overflow-hidden mx-auto">
            <Image
              src="/images/my1.jpeg"
              alt="hero image"
              fill
              className="object-cover"
              priority
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;