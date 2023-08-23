"use client";
/* eslint-disable react/no-unescaped-entities */
import { Variants, motion } from "framer-motion";
import { Space_Mono } from "next/font/google";
import { Project } from "./Project";
import { FaGithub, FaPlay } from "react-icons/fa";

const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

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
        className="flex flex-col max-w-5xl w-full"
      >
        <h3
          className={`${spaceMono.className} w-full text-white text-3xl font-bold py-4`}
        >
          &lt;PROJECTS&gt;
        </h3>
        <div className="flex flex-col gap-4">
          {projects.map(
            (
              { name, description, gitrepo, image, stack, title, livedemo },
              index
            ) => (
              <Project.Root key={index} index={index}>
                <Project.Image path={image} alt={name + " Thumbnail"} />
                <Project.Content
                  name={name}
                  description={description}
                  stack={stack}
                >
                  <Project.Link
                    icon={FaGithub}
                    href={gitrepo}
                    text="Github Repository"
                  />

                  {livedemo && (
                    <Project.Link
                      icon={FaPlay}
                      href={livedemo}
                      text="Live Demo"
                    />
                  )}
                </Project.Content>
              </Project.Root>
            )
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default Projects;
