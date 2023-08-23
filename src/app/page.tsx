"use client";
import Sidebar from "@/components/Sidebar";
import About from "@/pages/About";
import { Contact } from "@/pages/Contact";
import Hero from "@/pages/Hero";
import Projects from "@/pages/Projects";
import React from "react";

const Main: React.FC = () => {
  const [activeLink, setActiveLink] = React.useState("home");

  return (
    <div className="flex">
      <Sidebar />
      <div className="h-screen flex-1 overflow-y-auto snap-y snap-mandatory px-4 scroll-smooth">
        <Hero setInViewLink={setActiveLink} />
        <About />
        <Projects />
        <Contact />
      </div>
    </div>
  );
};

export default Main;
