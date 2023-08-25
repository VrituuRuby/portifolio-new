"use client";
import { motion } from "framer-motion";
import { Rubik } from "next/font/google";
import { PiCaretDown } from "react-icons/pi";

const rubik = Rubik({ weight: "800", subsets: ["latin"] });

const Hero: React.FC = () => {
  return (
    <div
      id="home"
      className={`${rubik.className} min-h-screen snap-end text-white font-bold flex flex-col items-center relative p-4`}
    >
      <div className="flex-1 flex flex-col justify-center items-center">
        <h1 className="text-center text-6xl lg:text-8xl">Victor Velozo</h1>
        <h2 className="text-center text-4xl lg:text-6xl">Web Developer</h2>
      </div>
      <motion.a
        className="cursor-pointer p-1 hover:bg-white/[.3] rounded-full"
        href="#about"
        whileHover={{ scale: 1.2, y: -20 }}
      >
        <PiCaretDown size={64} />
      </motion.a>
    </div>
  );
};

export default Hero;
