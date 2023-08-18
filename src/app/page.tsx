import About from "@/components/About";
import Hero from "@/components/Hero";

export default function Main() {
  return (
    <div className="h-screen overflow-y-auto snap-y snap-mandatory">
      <Hero />
      <About />
    </div>
  );
}
