import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Experience from "./components/Experience";
import Tech from "./components/Tech";
import Works from "./components/Works";
import Contact from "./components/Contact";
import StarsCanvas from "./components/canvas/Stars";

export default function App() {
  return (
    <div className="relative bg-void">
      <StarsCanvas />
      <Navbar />
      <main className="relative z-10">
        <Hero /><About /><Experience /><Tech /><Works /><Contact />
      </main>
    </div>
  );
}
