"use client";
/* eslint-disable react/no-unescaped-entities */
import { Variants, motion } from "framer-motion";
import { Rubik, Space_Mono } from "next/font/google";
import Image from "next/image";

const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });
const rubik = Rubik({ subsets: ["latin"] });

const stackIcons = [
  { name: "HTML 5", iconPath: "/icons/html.svg" },
  { name: "CSS 3", iconPath: "/icons/css.svg" },
  { name: "JavaScript", iconPath: "/icons/javascript.svg" },
  { name: "TypeScript", iconPath: "/icons/typescript.svg" },
  { name: "React", iconPath: "/icons/react.svg" },
  { name: "Svelte", iconPath: "/icons/svelte.svg" },
  { name: "Next Js", iconPath: "/icons/next.svg" },
  { name: "Nest", iconPath: "/icons/nest.svg" },
  { name: "Node JS", iconPath: "/icons/node.svg" },
  { name: "Linux", iconPath: "/icons/linux.svg" },
  { name: "Git", iconPath: "/icons/git.svg" },
  { name: "Github", iconPath: "/icons/github.svg" },
  { name: "Docker", iconPath: "/icons/docker.svg" },
  { name: "PosgreSQL", iconPath: "/icons/postgres.svg" },
  { name: "Prisma.io", iconPath: "/icons/prisma.svg" },
  { name: "Tailwind CSS", iconPath: "/icons/tailwind.svg" },
];

const container: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

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

const About: React.FC = () => {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center snap-end overflow-x-hidden"
      id="about"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col max-w-5xl"
      >
        <h3
          className={`${spaceMono.className} w-full text-white text-3xl font-bold py-4`}
        >
          &lt;about&gt;
        </h3>
        <div className="flex-1 flex gap-8 items-center text-white">
          <motion.img
            src="/avatar.png"
            alt="Avatar"
            width={250}
            height={250}
            className="rounded-full border-white border-8"
            initial={{ x: -200 }}
            whileInView={{ x: 0 }}
          />
          <motion.div
            initial={{ x: 200 }}
            whileInView={{ x: 0 }}
            className="select-none"
          >
            <h3
              className={`${spaceMono.className} text-3xl font-bold py-4 drop-shadow-glow`}
            >
              HELLO WORLD
            </h3>
            <p className={`${rubik.className} text-lg drop-shadow-glow`}>
              I'm a fullstack developer who loves creating visually appealing
              and functional designs. Currently, I'm working on personal
              portfolio projects and exploring new technologies. <br />
              <br />
              My passions include technology, music, and creative pursuits. I'm
              always eager to learn and expand my horizons. Let's connect and
              chat about tech, creativity, or anything in between!
            </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col max-w-5xl w-full"
      >
        <h3
          className={`${spaceMono.className} w-full text-white text-3xl font-bold py-4`}
        >
          &lt;stack&gt;
        </h3>
        <ul className="flex flex-row flex-wrap gap-1 justify-center list-none">
          {stackIcons.map((icon, index) => (
            <motion.li
              className="group rounded-full grid place-items-center p-2 bg-dark-blue/75 shadow-md w-14 h-14 aspect-square relative cursor-pointer"
              key={icon.name}
              variants={items}
              initial="hidden"
              whileInView="visible"
              custom={index}
            >
              <span
                className="absolute top-full left-1/2 -translate-x-1/2 p-1 bg-black/70 rounded-lg flex 
              invisible justify-center items-center text-center text-white z-10 w-24 opacity-0 mt-1 group-hover:opacity-100 group-hover:visible transition-opacity before:absolute before:bottom-full before:left-1/2 before:border-[5px] before:border-transparent before:border-b-black/70 before:-translate-x-1/2"
              >
                {icon.name}
              </span>
              <img src={icon.iconPath} alt={icon.name} width={32} />
            </motion.li>
          ))}
        </ul>
      </motion.div>
    </div>
  );
};

export default About;
