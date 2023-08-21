import About from "@/components/About";
import CursorBlob from "@/components/CursorBlob";
import Hero from "@/components/Hero";

export default function Main() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory px-4">
      <CursorBlob />
      <div className="backdrop-blur-[150px] -z-10 absolute left-0 top-0 w-screen h-screen" />
      <Hero />
      <About />
    </div>
  );
}
