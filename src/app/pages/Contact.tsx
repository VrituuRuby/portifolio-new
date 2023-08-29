"use client";
/* eslint-disable react/no-unescaped-entities */
import { Variants, motion } from "framer-motion";
import { Rubik, Space_Mono } from "next/font/google";
import { useTranslation } from "react-i18next";
import {
  FaArchive,
  FaBookOpen,
  FaDiscord,
  FaFile,
  FaFileArchive,
  FaFileCode,
  FaFileContract,
  FaFileDownload,
  FaFilePdf,
  FaFileSignature,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import { IoMdSend } from "react-icons/io";

const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

const rubik = Rubik({ subsets: ["latin"] });

const container: Variants = {
  hidden: {
    scale: 0,
    opacity: 0,
  },
  visible: {
    scale: 1,
    opacity: 1,
  },
};

const linkVariants: Variants = {
  visible: (index: number) => ({
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      delay: index * 0.1,
    },
  }),
  hidden: {
    scale: 0,
    opacity: 0,
    y: 200,
    transition: {
      duration: 0,
      type: "tween",
    },
  },
};

export const Contact: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div
      id="contact"
      className="flex-col flex justify-center items-center lg:min-h-screen max-w-5xl w-full"
    >
      <div className="w-full flex flex-col gap-4 pb-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col w-full items-center md:h-min-screen max-w-5xl bg-dark-blue/90 p-4 rounded-md"
        >
          <h3
            className={`${spaceMono.className} drop-shadow-glow select-none text-white text-3xl font-bold uppercase`}
          >
            &lt;{t("contact.title")}&gt;
          </h3>
          <form
            className="flex w-full flex-col gap-2 flex-1"
            action="https://formsubmit.co/victor.velozo@outlook.com"
            method="POST"
          >
            <div className="flex flex-col gap-1 w-full">
              <label
                htmlFor="email"
                className={"font-bold text-white text-lg " + rubik.className}
              >
                EMAIL
              </label>
              <input
                name="email"
                type="email"
                required
                id="email"
                placeholder="email@example.com"
                className="text-whi0te p-2 py-1 bg-transparent border-white/40 border rounded-md resize-none focus:outline-blue-400 outline-none"
              />
            </div>
            <div className="flex flex-col gap-2 w-full flex-1">
              <label
                htmlFor="message"
                className={"font-bold text-white text-lg " + rubik.className}
              >
                MESSAGE
              </label>
              <textarea
                name="message"
                id="message"
                placeholder={t("contact.message.placeholder")}
                className="text-white h-32 p-2 py-1 bg-transparent border-white/40 border rounded-md resize-none focus:outline-blue-400 outline-none"
              />
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className={
                  "text-white flex gap-1 items-center p-2 bg-button-blue rounded-md font-bold uppercase " +
                  rubik.className
                }
              >
                <IoMdSend size={24} />
                {t("contact.send")}
              </button>
            </div>
            <input
              type="hidden"
              name="_autoresponse"
              value="Thanks for reaching out! I will respond to you as soon as possible :) | Obrigado por me contatar! Vou te responder assim que possível :)"
            ></input>
            <input
              type="hidden"
              name="_subject"
              value="Nova menságem em Portifólio"
            ></input>
            <input
              type="hidden"
              name="_next"
              value="http://localhost:3000/#contact"
            ></input>
            <input type="hidden" name="_template" value="box" />
          </form>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          className="flex w-full justify-around gap-4"
        >
          <motion.a
            variants={linkVariants}
            custom={0}
            href="https://www.linkedin.com/in/victorlv/"
            target="_blank"
            className="bg-dark-blue/90 shadow-lg hover:brightness-150 p-4 flex-1 rounded-md flex items-center justify-center transition-colors"
          >
            <FaLinkedin size={32} className="text-white" />
          </motion.a>
          <motion.a
            variants={linkVariants}
            custom={1}
            href="https://github.com/VrituuRuby"
            target="_blank"
            className="bg-dark-blue/90 shadow-lg hover:brightness-150 p-4 flex-1 rounded-md flex items-center justify-center transition-colors"
          >
            <FaGithub size={32} className="text-white" />
          </motion.a>
          <motion.a
            variants={linkVariants}
            custom={2}
            href="https://discordapp.com/users/300426254056947713"
            target="_blank"
            className="bg-dark-blue/90 shadow-lg hover:brightness-150 p-4 flex-1 rounded-md flex items-center justify-center transition-colors"
          >
            <FaDiscord size={32} className="text-white" />
          </motion.a>
          <motion.a
            variants={linkVariants}
            custom={3}
            href="https://drive.google.com/file/d/1IIw_im3m8NTKCBk3kMxx8C4HzP8DRkQ8/view"
            target="_blank"
            className="bg-dark-blue/90 shadow-lg hover:brightness-150 p-4 flex-1 rounded-md flex items-center justify-center transition-colors"
          >
            <FaBookOpen size={32} className="text-white" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
