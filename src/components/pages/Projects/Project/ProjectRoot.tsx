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
      delay: 0,
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
      initial="hidden"
      whileInView="visible"
      custom={index}
      className={`group flex gap-4 text-white hover:bg-white/20 transition-colors cursor-default p-4 rounded-lg`}
    >
      {children}
    </motion.article>
  );
};
