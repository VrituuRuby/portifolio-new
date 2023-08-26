"use client";
/* eslint-disable react/no-unescaped-entities */
import { Variants, motion } from "framer-motion";
import { Rubik, Space_Mono } from "next/font/google";
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

const LinkButtons: Variants = {
  visible: (index: number) => ({
    y: 0,
    scale: 1,
    opacity: 1,
    transition: {
      ease: "linear",
      type: "tween",
      delay: index * 0.05,
    },
  }),
  hidden: {
    scale: 0,
    y: 100,
    opacity: 0,
  },
};

export const Contact: React.FC = () => {
  return (
    <div
      className="lg:min-h-screen flex-col snap-start flex justify-center items-center"
      id="contact"
    >
      <div className="max-w-5xl w-full flex flex-col gap-4">
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="visible"
          className="flex flex-col w-full md:h-min-screen max-w-5xl bg-dark-blue/90 p-4 rounded-md"
        >
          <h3
            className={`${spaceMono.className} w-full text-white text-3xl font-bold`}
          >
            &lt;CONTACT&gt;
          </h3>
          <form
            className="flex flex-col gap-2 flex-1"
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
                placeholder="Hey Victor! What's up?"
                className="text-white h-32 p-2 py-1 bg-transparent border-white/40 border rounded-md resize-none focus:outline-blue-400 outline-none"
              />
            </div>
            <div className="w-full flex justify-end">
              <button
                type="submit"
                className={
                  "text-white flex gap-1 items-center p-2 bg-button-blue rounded-md font-bold " +
                  rubik.className
                }
              >
                <IoMdSend size={24} />
                SEND
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
        <motion.div className="flex w-full justify-around gap-4">
          <motion.a
            variants={LinkButtons}
            custom={0}
            initial="hidden"
            whileInView="visible"
            href="https://www.linkedin.com/in/victorlv/"
            target="_blank"
            className="bg-dark-blue/90 shadow-lg hover:brightness-150 p-4 flex-1 rounded-md flex items-center justify-center transition"
          >
            <FaLinkedin size={32} className="text-white" />
          </motion.a>
          <motion.a
            variants={LinkButtons}
            custom={1}
            initial="hidden"
            whileInView="visible"
            href="https://github.com/VrituuRuby"
            target="_blank"
            className="bg-dark-blue/90 shadow-lg hover:brightness-150 p-4 flex-1 rounded-md flex items-center justify-center transition"
          >
            <FaGithub size={32} className="text-white" />
          </motion.a>
          <motion.a
            variants={LinkButtons}
            custom={2}
            initial="hidden"
            whileInView="visible"
            href="https://discordapp.com/users/300426254056947713"
            target="_blank"
            className="bg-dark-blue/90 shadow-lg hover:brightness-150 p-4 flex-1 rounded-md flex items-center justify-center transition"
          >
            <FaDiscord size={32} className="text-white" />
          </motion.a>
          <motion.a
            variants={LinkButtons}
            custom={3}
            initial="hidden"
            whileInView="visible"
            href="https://drive.google.com/file/d/1IIw_im3m8NTKCBk3kMxx8C4HzP8DRkQ8/view"
            target="_blank"
            className="bg-dark-blue/90 shadow-lg hover:brightness-150 p-4 flex-1 rounded-md flex items-center justify-center transition"
          >
            <FaBookOpen size={32} className="text-white" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};
