"use client";
import { ChangeEvent, useEffect, useState } from "react";
import i18n from "../i18n";
import { Variants, motion } from "framer-motion";

const sliderVariant: Variants = {
  left: {
    y: 2,
    x: 2,
  },
  right: {
    y: 2,
    x: 30,
  },
  flagVisible: {
    opacity: 1,
  },
  flagHidden: {
    opacity: 0,
  },
};

export const LangToggle: React.FC = () => {
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    i18n.changeLanguage(isEnglish ? "en" : "pt");
  }, [isEnglish]);

  function toggleEnglish() {
    setIsEnglish(!isEnglish);
  }

  return (
    <label className="flex gap-4 w-16 h-9 bg-white/40 rounded-full relative text-white cursor-pointer">
      <input
        className="hidden"
        type="checkbox"
        checked={isEnglish}
        onChange={toggleEnglish}
      />
      <span className="font-bold absolute left-2 top-1/2 -translate-y-1/2">
        EN
      </span>
      <span className="font-bold absolute right-2 top-1/2 -translate-y-1/2">
        PT
      </span>

      <motion.span
        variants={sliderVariant}
        animate={isEnglish ? "right" : "left"}
        initial="left"
        transition={{ duration: 0.2, ease: "easeInOut" }}
        className="w-8 h-8 translate-x-1 left-0 bg-cover bg-center border-2 border-white rounded-full overflow-hidden relative"
      >
        <motion.span
          className="bg-br-flag absolute top-0 left-0 w-full h-full bg-center bg-cover"
          initial="flagHidden"
          animate={isEnglish ? "flagHidden" : "flagVisible"}
          variants={sliderVariant}
        />
        <motion.span
          className="bg-us-flag absolute top-0 left-0 w-full h-full bg-center bg-cover"
          initial="flagHidden"
          animate={isEnglish ? "flagVisible" : "flagHidden"}
          variants={sliderVariant}
        />
      </motion.span>
    </label>
  );
};
