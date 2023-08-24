import { Space_Mono } from "next/font/google";
import { ReactNode } from "react";
import { FaGithub, FaPlay } from "react-icons/fa";

const spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

interface ProjectProps {
  name: string;
  description: string;
  stack: string[];
  children: ReactNode;
}

export const ProjectContent: React.FC<ProjectProps> = ({
  name,
  description,
  stack,
  children,
}) => {
  return (
    <div className="flex-1 flex flex-col gap-4 justify-between ">
      <h3
        className={`${spaceMono.className} text-2xl font-bold flex items-center gap-2 before:w-3 before:h-3 before:bg-white`}
      >
        {name}
      </h3>
      <p className="flex-1">{description}</p>
      <ul className="list-none flex gap-2 text-sm">
        {stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
      <div className="flex gap-2">{children}</div>
    </div>
  );
};
