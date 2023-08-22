import DecodeEffect from "./DecodeEffect";
interface SidebarProps {
  activeLink: string;
}

const Sidebar: React.FC<SidebarProps> = ({ activeLink }) => {
  return (
    <div className="p-4 bg-black/80 text-white">
      <nav className="flex-col flex items-start gap-2">
        <a
          href="#home"
          className="flex items-center p-1 rounded-sm ansparent hover:bg-white hover:text-black transition"
        >
          <DecodeEffect
            textContent="home"
            className="text-inherit font-bold text-3xl leading-[80%]"
          />
        </a>
        <a
          href="#about"
          className="flex items-center p-1 rounded-sm ansparent hover:bg-white hover:text-black transition"
        >
          <DecodeEffect
            textContent="about"
            className="text-inherit font-bold text-3xl leading-[80%]"
          />
        </a>
        <a
          href="#projects"
          className="flex items-center p-1 rounded-sm ansparent hover:bg-white hover:text-black transition"
        >
          <DecodeEffect
            textContent="projects"
            className="text-inherit font-bold text-3xl leading-[80%]"
          />
        </a>
        <a
          href="#contact"
          className="flex items-center p-1 rounded-sm ansparent hover:bg-white hover:text-black transition"
        >
          <DecodeEffect
            textContent="contact"
            className="text-inherit font-bold text-3xl leading-[80%]"
          />
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
