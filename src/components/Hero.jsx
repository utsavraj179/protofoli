import { Suspense, lazy } from "react";
import { motion } from "framer-motion";
import { profile } from "../constants";
const ComputersCanvas = lazy(() => import("./canvas/Computers"));

export default function Hero() {
  return (
    <section id="top" className="relative w-full h-screen min-h-[640px]">
      <div className="max-w-7xl mx-auto px-6 pt-32 flex gap-5 relative z-10">
        <div className="flex flex-col items-center mt-2" aria-hidden>
          <div className="w-4 h-4 rounded-full bg-accent" />
          <div className="w-1 h-40 sm:h-72 bg-gradient-to-b from-accent to-transparent" />
        </div>
        <div>
          <h1 className="text-4xl sm:text-6xl font-black">Hi, I'm <span className="text-accent">{profile.name}</span></h1>
          <p className="mt-3 text-ink text-base sm:text-xl max-w-xl">{profile.tagline}</p>
        </div>
      </div>
      <div className="absolute inset-0 pt-24">
        <Suspense fallback={null}><ComputersCanvas /></Suspense>
      </div>
      <a href="#about" aria-label="Scroll to about" className="absolute bottom-8 inset-x-0 flex justify-center z-10">
        <div className="w-8 h-14 rounded-3xl border-4 border-ink flex justify-center items-start p-1.5">
          <motion.div animate={{ y: [0, 24, 0] }} transition={{ duration: 1.5, repeat: Infinity }} className="w-2 h-2 rounded-full bg-ink" />
        </div>
      </a>
    </section>
  );
}
