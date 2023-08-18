"use client";
/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
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

const About: React.FC = () => {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center snap-end"
      id="about"
    >
      <motion.div
        initial={{ opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.2 }}
        viewport={{ once: true }}
        className="flex flex-col max-w-5xl"
      >
        <h3
          className={`${spaceMono.className} w-full text-white text-3xl font-bold py-4`}
        >
          &lt;about&gt;
        </h3>
        <div className="flex-1 flex gap-8 items-center text-white">
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={250}
            height={250}
            className="rounded-full border-white border-8"
          />
          <div>
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
          </div>
        </div>
      </motion.div>
      <motion.div>
        <h3
          className={`${spaceMono.className} w-full text-white text-3xl font-bold py-4`}
        >
          &lt;stack&gt;
        </h3>
        <div className="flex flex-row flex-wrap gap-1">
          {stackIcons.map((icon, index) => (
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.05,
                type: "spring",
                duration: 0.2,
              }}
              key={icon.name}
              className="rounded-full grid place-items-center p-2 bg-dark-blue/75 shadow-md w-14 h-14 aspect-square"
            >
              <img src={icon.iconPath} alt={icon.name} width={32} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default About;
