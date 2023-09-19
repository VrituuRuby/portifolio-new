import React, { ReactNode } from "react";
import { Variants, motion } from "framer-motion";

function ifEven(number: number, ifTrue: string, ifFalse: string): string {
  return number % 2 === 0 ? ifTrue : ifFalse;
}

const projectVariants: Variants = {
  hidden: (index: number) => ({
    opacity: 0,
    x: ifEven(index, "-200px", "200px"),
  }),
  visible: (index: number) => ({
    opacity: 1,
    x: 0,
    transition: {
      delay: index * 0.2,
    },
  }),
  hover: {
    scale: 1.02,
    transition: {
      type: "tween",
      duration: 0.2,
    },
  },
};

interface ProjectRootProps {
  index: number;
  children: ReactNode;
}

export const ProjectRoot: React.FC<ProjectRootProps> = ({
  children,
  index,
}) => {
  return (
    <motion.article
      variants={projectVariants}
      custom={index}
      className="group flex flex-col items-center text-white lg:flex-row"
    >
      {children}
    </motion.article>
  );
};
