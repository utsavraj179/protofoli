import Tilt from "react-parallax-tilt";
import { disciplines, profile } from "../constants";

export default function About() {
  return (
    <section id="about" className="sec">
      <h2 className="text-4xl font-black">Overview</h2>
      <p className="mt-4 text-ink text-lg max-w-3xl leading-8">{profile.intro}</p>
      <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {disciplines.map((d) => (
          <Tilt key={d.title} glareEnable glareMaxOpacity={0.25} tiltMaxAngleX={20} tiltMaxAngleY={20} scale={1.03}>
            <div className="glass rounded-2xl p-6 h-full min-h-[200px]">
              <h3 className="text-xl font-bold">{d.title}</h3>
              <p className="mt-3 text-ink">{d.text}</p>
            </div>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
