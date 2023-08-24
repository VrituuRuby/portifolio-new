import Image from "next/image";
import React from "react";

interface ProjectProps {
  path: string;
  alt: string;
}

export const ProjectImage: React.FC<ProjectProps> = ({ path, alt }) => {
  return (
    <Image
      src={path}
      className="object-cover rounded-md w-[320px]"
      height={200}
      width={320}
      alt={alt}
    />
  );
};
