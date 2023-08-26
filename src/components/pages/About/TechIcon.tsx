import { Variants, motion } from "framer-motion";
import React from "react";

interface TechIconProps {
  icon: string;
  name: string;
  index: number;
}

const items: Variants = {
  hidden: {
    y: 50,
    opacity: 0,
    transition: {
      duration: 0,
    },
  },
  visible: (index: number) => {
    return {
      y: 0,
      opacity: 1,
      transition: {
        delay: index * 0.05,
      },
    };
  },
};

export const TechIcon: React.FC<TechIconProps> = ({ icon, name, index }) => {
  return (
    <motion.li
      className="group rounded-full grid place-items-center p-2 bg-dark-blue/75 shadow-md w-14 h-14 aspect-square relative cursor-pointer"
      key={name}
      variants={items}
      custom={index}
    >
      <span
        className="absolute pointer-events-none top-full left-1/2 -translate-x-1/2 p-1 bg-black/70 rounded-lg flex 
      invisible justify-center items-center text-center text-white z-20 w-24 opacity-0 mt-1 group-hover:opacity-100 group-hover:visible transition-opacity before:absolute before:bottom-full before:left-1/2 before:border-[5px] before:border-transparent before:border-b-black/70 before:-translate-x-1/2"
      >
        {name}
      </span>
      <img src={icon} alt={name} className="w-8" />
    </motion.li>
  );
};
