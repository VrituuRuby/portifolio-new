"use client";
/* eslint-disable react/no-unescaped-entities */
import { Variants, motion } from "framer-motion";
import { Rubik, Space_Mono } from "next/font/google";
import { TechIcon } from "./TechIcon";

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

const About: React.FC = () => {
  return (
    <div
      className="flex flex-col md:min-h-screen justify-center items-center snap-end"
      id="about"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col max-w-5xl gap-2"
      >
        <h3
          className={`${spaceMono.className} w-full text-white text-center text-3xl font-bold drop-shadow-glow`}
        >
          &lt;ABOUT&gt;
        </h3>
        <div className="md:flex-row md:gap-8 flex-col flex-1 flex items-center text-white">
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
              className={`${spaceMono.className} text-2xl text-center md:text-left md:text-3xl font-bold py-2 drop-shadow-glow`}
            >
              HELLO WORLD
            </h3>
            <p
              className={`${rubik.className} text-sm md:text-base drop-shadow-glow`}
            >
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
        className="flex flex-col max-w-5xl w-full gap-2"
      >
        <h3
          className={`${spaceMono.className} w-full text-white text-center text-3xl drop-shadow-glow font-bold`}
        >
          &lt;STACK&gt;
        </h3>
        <motion.ul
          initial="hidden"
          whileInView="visible"
          className="flex flex-row flex-wrap gap-1 justify-center list-none"
        >
          {stackIcons.map(({ iconPath, name }, index) => (
            <TechIcon key={name} icon={iconPath} name={name} index={index} />
          ))}
        </motion.ul>
      </motion.div>
    </div>
  );
};

export default About;
