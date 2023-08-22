"use client";
/* eslint-disable react/no-unescaped-entities */
import { Variants, motion } from "framer-motion";
import { Rubik, Space_Mono } from "next/font/google";

const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });
import { FaGithub, FaPlay } from "react-icons/fa";

const projects = [
  {
    name: "IT.POINT",
    title: "FullStack Project",
    description:
      "Thit is It.point: Your go-to ITSM (IT Service Manager) system. Easily create categorized tickets for efficient problem-solving. Customize categories, add notes to stay informed on ticket progress.",
    stack: ["ReactJS", "NextJS", "Tailwind CSS", "NodeJs", "Express"],
    gitrepo: "https://github.com/VrituuRuby/it.point-web",
    image: "/projects/itpoint.png",
  },
  {
    name: "ReactDex",
    title: "Front end project",
    description:
      "Explore a charming Pokédex app that lets you browse through all the Pokémon generations using the GraphQL API from PokéAPI. Look up your favorite Pokémon, check out its in-game entry, and follow its evolutions and weaknesses with ease.",
    stack: [
      "ReactJS",
      "StyledComponents",
      "GraphQL",
      "PokéAPI",
      "ApolloClient",
    ],
    gitrepo: "https://github.com/VrituuRuby/react-pokedex",
    livedemo: "https://reactdex.onrender.com",
    image: "/projects/reactdex.png",
  },
];

const container: Variants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

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

function ifEven(number: number, ifTrue: string, ifFalse: string): string {
  return number % 2 === 0 ? ifTrue : ifFalse;
}

const Projects: React.FC = () => {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center snap-end overflow-x-hidden"
      id="projects"
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
          &lt;PROJECTS&gt;
        </h3>
        <div className="flex flex-col gap-4 relative">
          {projects.map((project, index) => (
            <motion.article
              className={`group flex gap-4 text-white hover:bg-white/20 transition-colors cursor-default p-4 rounded-lg ${ifEven(
                index,
                "flex-row-reverse",
                "flex-row"
              )}`}
              variants={projectVariants}
              initial="hidden"
              whileInView="visible"
              whileHover="hover"
              custom={index}
              key={project.name}
            >
              <img
                src={project.image}
                className="object-cover rounded-md w-[320px]"
                alt="ReactDex screen"
              />
              <div
                className={
                  "flex-1 flex flex-col gap-4 justify-between " +
                  ifEven(index, "items-end", "items-start")
                }
              >
                <h3
                  className={`${spaceMono.className} text-2xl font-bold flex items-center gap-2 before:w-3 before:h-3 before:bg-white`}
                >
                  {project.name}
                </h3>
                <p
                  className={
                    "flex-1 " + ifEven(index, "text-right", "text-left")
                  }
                >
                  {project.description}
                </p>
                <ul className="list-none flex gap-2 text-sm">
                  {project.stack
                    .join(" • ")
                    .split(" ")
                    .map((text) => (
                      <li key={text}>{text}</li>
                    ))}
                </ul>
                <div className="flex gap-2">
                  {project.livedemo ? (
                    <a
                      href={project.livedemo}
                      className="p-2 bg-dark-blue/90 rounded-md flex gap-2 items-center hover:bg-slate-800 transition-colors"
                    >
                      <FaPlay />
                      Live Demo
                    </a>
                  ) : null}
                  {project.gitrepo ? (
                    <a
                      href={project.gitrepo}
                      className="p-2 bg-dark-blue/90 rounded-md flex gap-2 items-center hover:bg-slate-800 transition-colors"
                    >
                      <FaGithub />
                      Git Repository
                    </a>
                  ) : null}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
