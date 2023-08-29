"use client";
import Sidebar from "@/app/components/Sidebar";
import "./i18n";
import Hero from "@/app/pages/Hero";
import About from "@/app/pages/Projects/About";
import Projects from "@/app/pages/Projects";
import { Contact } from "@/app/pages/Contact";

const Main: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-1 flex flex-col gap-4 justify-between items-center overflow-y-scroll h-screen scroll-smooth px-4 overflow-x-clip">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
};

export default Main;
