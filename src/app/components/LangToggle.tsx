"use client";
import { ChangeEvent, LabelHTMLAttributes, useEffect, useState } from "react";
import i18n from "../i18n";
import { Variants, motion } from "framer-motion";
import { twMerge } from "tailwind-merge";
const sliderVariant: Variants = {
  left: {
    y: 2,
    x: 2,
  },
  right: {
    y: 2,
    x: 38,
  },
  flagVisible: {
    opacity: 1,
  },
  flagHidden: {
    opacity: 0,
  },
};

interface LangToggleProps extends LabelHTMLAttributes<HTMLLabelElement> {}

export const LangToggle: React.FC<LangToggleProps> = ({ ...rest }) => {
  const [isEnglish, setIsEnglish] = useState(true);

  useEffect(() => {
    i18n.changeLanguage(isEnglish ? "en" : "pt");
  }, [isEnglish]);

  function toggleEnglish() {
    setIsEnglish(!isEnglish);
  }

  return (
    <label
      className={twMerge(
        "flex gap-4 focus:outline-2 focus:outline-blue-400 outline-2 w-[72px] h-9 bg-white/40 hover:bg-white/60  transition-colors rounded-full relative text-white cursor-pointer select-none",
        rest.className
      )}
    >
      <input
        className="hidden"
        type="checkbox"
        checked={isEnglish}
        onChange={toggleEnglish}
      />
      <span className="font-bold absolute text-lg left-2 top-1/2 -translate-y-1/2">
        EN
      </span>
      <span className="font-bold absolute text-lg right-2 top-1/2 -translate-y-1/2">
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
