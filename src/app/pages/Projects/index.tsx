"use client";
/* eslint-disable react/no-unescaped-entities */
import { Variants, motion } from "framer-motion";
import { Space_Mono } from "next/font/google";
import { FaGithub, FaPlay } from "react-icons/fa";
import { Project } from "./ProjectComponent";
import { useTranslation } from "react-i18next";

const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

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
  const { t } = useTranslation();

  const projects = [
    {
      name: "IT.POINT",
      title: "FullStack Project",
      description: t("projects.itpoint.description"),
      stack: ["ReactJS", "NextJS", "Tailwind CSS", "NodeJs", "Express"],
      gitrepo: "https://github.com/VrituuRuby/it.point-web",
      image: "/projects/itpoint.png",
    },
    {
      name: "ReactDex",
      title: "Front end project",
      description: t("projects.reactdex.description"),
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
    {
      name: "Coffee Delivery",
      description: t("projects.coffee-delivery.description"),
      stack: ["ReactJS", "StyledComponents", "Vite"],
      gitrepo: "https://github.com/VrituuRuby/coffee-delivery-app",
      livedemo: "https://coffeedelivery.onrender.com",
      image: "/projects/coffee-delivery.png",
    }
  ];
  return (
    <div
      id="projects"
      className="flex justify-center items-center max-w-5xl lg:min-h-screen"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col items-center justify-center w-full"
      >
        <h3
          className={`${spaceMono.className} select-none drop-shadow-glow text-white text-3xl font-bold py-4 uppercase`}
        >
          &lt;{t("projects.title")}&gt;
        </h3>
        <motion.div className="flex flex-col gap-4" initial="hidden" whileInView="visible">
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
                    text={t("projects.githubrepo")}
                  />

                  {livedemo && (
                    <Project.Link
                      icon={FaPlay}
                      href={livedemo}
                      text={t("projects.livedemo")}
                    />
                  )}
                </Project.Content>
              </Project.Root>
            )
          )}
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
