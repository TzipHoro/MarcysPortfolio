"use client";

import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);

  const links = [
    { href: "/#about", label: "About" },
    { href: "/#projects", label: "Projects" },
    { href: "/#contact", label: "Contact" },
  ];

  return (
    <nav className="sticky top-0 z-40 border-b border-[#C3DBFD] bg-white/90 backdrop-blur-sm">
      <div className="w-full px-4 sm:px-6 py-4 flex justify-between items-center">
        <a href="/" className="text-2xl font-bold text-[#003F88] hover:text-[#5A77D8] transition-colors">Marcella Lehman</a>

        {/* Desktop links */}
        <div className="max-sm:hidden flex gap-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-[#5A77D8] hover:text-[#003F88] font-medium transition-colors">
              {l.label}
            </a>
          ))}
        </div>

        {/* Hamburger button — mobile only */}
        <button
          className="sm:hidden flex flex-col justify-center items-center w-8 h-8 gap-1.5"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className={`block h-0.5 w-6 bg-[#5A77D8] transition-all duration-200 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#5A77D8] transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block h-0.5 w-6 bg-[#5A77D8] transition-all duration-200 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      {open && (
        <div className="sm:hidden border-t border-[#C3DBFD] bg-white px-4 py-3 flex flex-col gap-3">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-[#5A77D8] hover:text-[#003F88] font-medium transition-colors py-1"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
