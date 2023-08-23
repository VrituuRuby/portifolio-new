"use client";
/* eslint-disable react/no-unescaped-entities */
import { Variants, motion } from "framer-motion";
import { Rubik, Space_Mono } from "next/font/google";
import { IoMdSend } from "react-icons/io";

const spaceMono = Space_Mono({ weight: ["400", "700"], subsets: ["latin"] });

const rubik = Rubik({ subsets: ["latin"] });

const container: Variants = {
  hidden: {
    y: -400,
    scale: 0,
    opacity: 0,
  },
  visible: {
    y: 0,
    scale: 1,
    opacity: 1,
  },
};

export const Contact: React.FC = () => {
  return (
    <div
      className="w-full h-screen flex flex-col justify-center items-center snap-end overflow-x-hidden"
      id="contact"
    >
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        className="flex flex-col max-w-5xl w-full bg-dark-blue/90 p-4 rounded-md"
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
              className="text-white p-2 py-1 bg-transparent border-white/40 border rounded-md resize-none focus:outline-blue-400 outline-none"
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
    </div>
  );
};
