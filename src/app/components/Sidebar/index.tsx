"use client";
import { Space_Mono } from "next/font/google";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { Variants, motion } from "framer-motion";
import { NavigationLink } from "./NavigationLink";
import { OutsideLink } from "./OutsideLinks";
import { useTranslation } from "react-i18next";
import { ChangeEvent, ChangeEventHandler } from "react";
import i18n from "@/app/utils/i18n";
import { LangToggle } from "../LangToggle";
interface SidebarProps {
  activeLink?: string;
}

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

const container: Variants = {
  hidden: {
    opacity: 0,
    x: -200,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.2,
      type: "tween",
    },
  },
};

/** @deprecated  Switched to NavBar */
const Sidebar: React.FC<SidebarProps> = ({ activeLink }) => {
  const { t } = useTranslation();

  function onLangChange(event: ChangeEvent<HTMLSelectElement>) {
    i18n.changeLanguage(event.target.value);
  }

  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="p-4 bg-black/80 sm:flex text-white hidden flex-col gap-2 overflow-hidden"
    >
      <div className="flex flex-col gap-2">
        <h3
          className={
            spaceMono.className + " text-[#0598CE] flex items-center gap-2"
          }
        >
          <span className="bg-[#0598CE] relative rounded-full flex w-2 h-2">
            <span className="animate-ping absolute rounded-full w-full h-full bg-[#0598CE]"></span>
          </span>
          LANGUAGE
        </h3>
        <LangToggle />
      </div>
      <nav className="flex-col flex items-start gap-2">
        <h3
          className={
            spaceMono.className + " text-[#0598CE] flex items-center gap-2"
          }
        >
          <span className="bg-[#0598CE] relative rounded-full flex w-2 h-2">
            <span className="animate-ping absolute rounded-full w-full h-full bg-[#0598CE]"></span>
          </span>
          NAVIGATION
        </h3>

        <NavigationLink href="#home" text="home" />
        <NavigationLink href="#about" text={t("about.title")} />
        <NavigationLink href="#projects" text={t("projects.title")} />
        <NavigationLink href="#contact" text={t("contact.title")} />
      </nav>

      <div className="flex flex-1 flex-col justify-end gap-2">
        <h3
          className={
            spaceMono.className + " text-[#0598CE] flex items-center gap-2"
          }
        >
          <span className="bg-[#0598CE] relative rounded-full flex w-2 h-2">
            <span className="animate-ping absolute rounded-full w-full h-full bg-[#0598CE]"></span>
          </span>
          LINKS
        </h3>
        <ul className={spaceMono.className + " uppercase flex flex-col gap-2"}>
          <li>
            <OutsideLink
              text="Linkedin"
              target="_blank"
              icon={FaLinkedin}
              href="https://www.linkedin.com/in/victorlv/"
            />
          </li>
          <li>
            <OutsideLink
              text="Github"
              target="_blank"
              icon={FaGithub}
              href="https://github.com/VrituuRuby"
            />
          </li>
          <li>
            <OutsideLink
              text="Discord"
              target="_blank"
              icon={FaDiscord}
              href="https://discordapp.com/users/300426254056947713"
            />
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Sidebar;
