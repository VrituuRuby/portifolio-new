"use client";
import Sidebar from "@/components/Sidebar";
import About from "@/components/pages/About";
import { Contact } from "@/components/pages/Contact";
import Hero from "@/components/pages/Hero";
import Projects from "@/components/pages/Projects";
import React from "react";

const Main: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 flex flex-col justify-between gap-4 h-screen overflow-y-scroll md:snap-mandatory md:snap-y scroll-smooth p-4 overflow-x-clip">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Main;
