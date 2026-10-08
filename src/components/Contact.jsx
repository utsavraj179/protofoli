import { Suspense, lazy, useState } from "react";
import { profile } from "../constants";
const EarthCanvas = lazy(() => import("./canvas/Earth"));

export default function Contact() {
  const [f, setF] = useState({ name: "", email: "", message: "" });
  const [copied, setCopied] = useState(false);
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });

  const send = (e) => {
    e.preventDefault();
    const body = `${f.message}\n\nFrom: ${f.name} (${f.email})`;
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent("Portfolio message from " + f.name)}&body=${encodeURIComponent(body)}`;
  };
  const copy = async () => {
    try { await navigator.clipboard.writeText(profile.email); setCopied(true); setTimeout(() => setCopied(false), 2000); } catch { /* ignore */ }
  };
  const field = "w-full rounded-xl bg-void/80 border border-accent/30 px-4 py-3 outline-none focus:border-accent";

  return (
    <section id="contact" className="sec grid gap-10 lg:grid-cols-[0.8fr_1fr]">
      <form onSubmit={send} className="glass rounded-2xl p-8 space-y-5">
        <h2 className="text-4xl font-black">Contact</h2>
        <input required className={field} placeholder="Your name" value={f.name} onChange={set("name")} />
        <input required type="email" className={field} placeholder="Your email" value={f.email} onChange={set("email")} />
        <textarea required rows={5} className={field} placeholder="What would you like to build?" value={f.message} onChange={set("message")} />
        <div className="flex flex-wrap gap-3">
          <button className="rounded-xl bg-accent px-6 py-3 font-bold">Send message</button>
          <button type="button" onClick={copy} className="rounded-xl border border-accent px-6 py-3 font-bold">{copied ? "Copied" : "Copy email"}</button>
          <a href={profile.discord} target="_blank" rel="noreferrer" className="rounded-xl border border-accent px-6 py-3 font-bold">Join Discord</a>
        </div>
      </form>
      <div className="h-[320px] lg:h-[520px]">
        <Suspense fallback={null}><EarthCanvas /></Suspense>
      </div>
    </section>
  );
}
