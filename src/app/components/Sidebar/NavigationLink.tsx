"use client";
import DecodeEffect from "../DecodeEffect";
import { Space_Mono } from "next/font/google";
import { HTMLMotionProps, Variants, motion } from "framer-motion";

interface NavigationLinkProps extends HTMLMotionProps<"a"> {
  text: string;
}

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

const bgVariants: Variants = {
  hidden: {
    x: "-100%",
    opacity: 0,
    transition: {
      delay: 2,
      duration: 0.2,
    },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.2,
    },
  },
};

export const NavigationLink: React.FC<NavigationLinkProps> = ({
  text,
  ...rest
}) => {

  return (
    <motion.a
      {...rest}
      className="flex items-center p-1 relative rounded-sm"
      initial="hidden"
      whileHover="visible"
    >
      <motion.div
        variants={bgVariants}
        className="absolute top-0 left-0 w-full h-full bg-white mix-blend-difference pointer-events-none  z-20 rounded-md"
      />
      <motion.div
        variants={bgVariants}
        className="absolute top-0 left-0 w-full h-full bg-black rounded-md pointer-events-none"
      />
      <DecodeEffect
        textContent={text}
        className={
          "text-white font-bold text-3xl leading-[80%] uppercase z-10 " +
          spaceMono.className
        }
      ></DecodeEffect>
    </motion.a>
  );
}
