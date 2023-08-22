import { Space_Mono } from "next/font/google";
import DecodeEffect from "./DecodeEffect";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";
import { Variants, motion } from "framer-motion";
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

const Sidebar: React.FC<SidebarProps> = ({ activeLink }) => {
  return (
    <motion.div
      variants={container}
      initial="hidden"
      animate="visible"
      className="p-4 bg-black/80 text-white flex flex-col justify-between"
    >
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
        <a
          href="#home"
          className="flex items-center p-1 rounded-sm ansparent hover:bg-white hover:text-black transition"
        >
          <DecodeEffect
            textContent="home"
            className="text-inherit font-bold text-3xl leading-[80%]"
          />
        </a>
        <a
          href="#about"
          className="flex items-center p-1 rounded-sm ansparent hover:bg-white hover:text-black transition"
        >
          <DecodeEffect
            textContent="about"
            className="text-inherit font-bold text-3xl leading-[80%]"
          />
        </a>
        <a
          href="#projects"
          className="flex items-center p-1 rounded-sm ansparent hover:bg-white hover:text-black transition"
        >
          <DecodeEffect
            textContent="projects"
            className="text-inherit font-bold text-3xl leading-[80%]"
          />
        </a>
        <a
          href="#contact"
          className="flex items-center p-1 rounded-sm ansparent hover:bg-white hover:text-black transition"
        >
          <DecodeEffect
            textContent="contact"
            className="text-inherit font-bold text-3xl leading-[80%]"
          />
        </a>
      </nav>
      <div className="flex flex-col gap-2">
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
            <a
              href="https://github.com/VrituuRuby"
              target="_blank"
              className="flex gap-2 items-center"
            >
              <FaGithub size="24" />
              Github
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/victorlv/"
              target="_blank"
              className="flex gap-2 items-center"
            >
              <FaLinkedin size={24} />
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://discordapp.com/users/300426254056947713"
              target="_blank"
              className="flex gap-2 items-center"
            >
              <FaDiscord size={24} />
              Discord
            </a>
          </li>
        </ul>
      </div>
    </motion.div>
  );
};

export default Sidebar;
