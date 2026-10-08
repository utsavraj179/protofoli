import Tilt from "react-parallax-tilt";
import { projects } from "../constants";

export default function Works() {
  return (
    <section id="works" className="sec">
      <h2 className="text-4xl font-black">Projects</h2>
      <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        {projects.map((p) => (
          <Tilt key={p.name} glareEnable glareMaxOpacity={0.2} tiltMaxAngleX={12} tiltMaxAngleY={12}>
            <article className="glass rounded-2xl p-6 h-full flex flex-col">
              <h3 className="text-2xl font-bold">{p.name}</h3>
              <p className="mt-3 text-ink flex-1">{p.text}</p>
              <p className="mt-4 flex flex-wrap gap-2 text-sm text-accent">{p.tags.map((t) => <span key={t}>#{t}</span>)}</p>
              <a href={p.link} target="_blank" rel="noreferrer" className="mt-5 inline-block rounded-xl bg-accent px-4 py-2 font-semibold text-center">{p.label}</a>
            </article>
          </Tilt>
        ))}
      </div>
    </section>
  );
}
