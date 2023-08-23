import { AnchorHTMLAttributes, ElementType } from "react";

interface ProjectLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  icon: ElementType;
  text: string;
}

export const ProjectLink: React.FC<ProjectLinkProps> = ({
  icon: Icon,
  text,
  ...rest
}) => {
  return (
    <a
      {...rest}
      className="p-2 bg-dark-blue/90 rounded-md flex gap-2 items-center hover:bg-slate-800 transition-colors"
    >
      <Icon size={24} />
      {text}
    </a>
  );
};
