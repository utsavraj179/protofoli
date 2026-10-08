import { useState } from "react";
import { profile } from "../constants";

const links = ["about", "experience", "tech", "works", "contact"];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  return (
    <nav className="fixed top-0 inset-x-0 z-50 glass">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <a href="#top" className="font-bold text-lg">{profile.handle}</a>
        <ul className="hidden sm:flex gap-8 text-ink">
          {links.map((l) => (<li key={l}><a className="capitalize hover:text-white" href={`#${l}`}>{l}</a></li>))}
        </ul>
        <button className="sm:hidden text-2xl" aria-label="Menu" onClick={() => setOpen(!open)}>{open ? "✕" : "☰"}</button>
      </div>
      {open && (
        <ul className="sm:hidden px-6 pb-4 flex flex-col gap-3 text-ink">
          {links.map((l) => (<li key={l}><a className="capitalize" href={`#${l}`} onClick={() => setOpen(false)}>{l}</a></li>))}
        </ul>
      )}
    </nav>
  );
}
