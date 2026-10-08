import { experiences } from "../constants";

export default function Experience() {
  return (
    <section id="experience" className="sec">
      <h2 className="text-4xl font-black">Experience</h2>
      <ol className="mt-12 relative border-l-2 border-accent/50 ml-3">
        {experiences.map((e) => (
          <li key={e.title + e.date} className="ml-8 mb-10">
            <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-accent" />
            <p className="text-ink text-sm">{e.date}</p>
            <div className="glass rounded-2xl p-5 mt-2">
              <h3 className="text-xl font-bold">{e.title}</h3>
              <p className="text-ink font-semibold">{e.company}</p>
              <ul className="mt-3 list-disc ml-5 text-ink space-y-1">{e.points.map((p) => <li key={p}>{p}</li>)}</ul>
            </div>
          </li>
        ))}
      </ol>
    </section>
  );
}
