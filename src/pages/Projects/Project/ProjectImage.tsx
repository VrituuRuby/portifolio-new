import React from "react";

interface ProjectProps {
  path: string;
  alt: string;
}

export const ProjectImage: React.FC<ProjectProps> = ({ path, alt }) => {
  return (
    <img src={path} className="object-cover rounded-md w-[320px]" alt={alt} />
  );
};
