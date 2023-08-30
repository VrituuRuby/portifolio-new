"use client";
import { motion } from "framer-motion";
import { Rubik } from "next/font/google";
import { useTranslation } from "react-i18next";
import { PiCaretDown } from "react-icons/pi";
import { LangToggle } from "../components/LangToggle";

const rubik = Rubik({ weight: "800", subsets: ["latin"] });

const Hero: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      id="home"
      className={`${rubik.className} min-h-screen snap-start flex flex-col items-center p-4 relative`}
    >
      <div className="flex-1 flex flex-col justify-center gap-4 items-center text-white drop-shadow-lg text-center">
        <h1 className="text-center text-6xl lg:text-8xl">Victor Velozo</h1>
        <h2 className="text-center text-4xl lg:text-6xl">Web Developer</h2>
        <div className="flex gap-1 justify-center items-center">
          <a
            href="#contact"
            className="px-2 py-1 hover:bg-white/60 bg-white/20 transition rounded-md uppercase"
          >
            {t("home.contact")}
          </a>
          <a
            href="https://drive.google.com/file/d/1IIw_im3m8NTKCBk3kMxx8C4HzP8DRkQ8/view"
            target="_blank"
            className="px-2 py-1 hover:bg-white/60 bg-white/20 transition rounded-md uppercase"
          >
            {t("home.resume")}
          </a>
        </div>
        <LangToggle />
      </div>
      <motion.a
        className="cursor-pointer p-1 hover:bg-white/[.3] rounded-full absolute top-[80%] text-white"
        href="#about"
        whileHover={{ scale: 1.2, y: -20 }}
      >
        <PiCaretDown size={64} />
      </motion.a>
    </div>
  );
};

export default Hero;
