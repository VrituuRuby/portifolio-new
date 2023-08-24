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
      <div className="h-screen flex-1 overflow-y-auto snap-y snap-mandatory px-4 scroll-smooth">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Main;
