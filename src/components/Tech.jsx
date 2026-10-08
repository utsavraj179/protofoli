import { Suspense, lazy } from "react";
import { tech } from "../constants";
const BallCanvas = lazy(() => import("./canvas/Ball"));

export default function Tech() {
  return (
    <section id="tech" className="sec">
      <h2 className="text-4xl font-black">Tech stack</h2>
      <div className="mt-12 flex flex-wrap justify-center gap-6">
        {tech.map((t) => (
          <div key={t.name} className="w-28 h-28">
            <Suspense fallback={<div className="w-full h-full rounded-full glass" />}>
              <BallCanvas name={t.name} color={t.color} />
            </Suspense>
          </div>
        ))}
      </div>
    </section>
  );
}
