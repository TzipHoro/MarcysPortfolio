"use client";

import { useState } from "react";
import Image from "next/image";

interface Slide {
  src: string;
  alt: string;
}

export default function ImageCarousel({ slides }: { slides: Slide[] }) {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c - 1 + slides.length) % slides.length);
  const next = () => setCurrent((c) => (c + 1) % slides.length);

  return (
    <div className="relative w-full mb-8">
      <div className="overflow-hidden rounded-lg border border-zinc-100 shadow-sm">
        <Image
          key={slides[current].src}
          src={slides[current].src}
          alt={slides[current].alt}
          width={800}
          height={500}
          className="w-full h-auto object-contain"
        />
      </div>

      {/* Controls */}
      <button
        onClick={prev}
        aria-label="Previous image"
        className="absolute left-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors"
      >
        ‹
      </button>
      <button
        onClick={next}
        aria-label="Next image"
        className="absolute right-2 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-white/90 shadow border border-zinc-200 flex items-center justify-center hover:bg-zinc-50 transition-colors"
      >
        ›
      </button>

      {/* Dots */}
      <div className="flex justify-center gap-2 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Go to image ${i + 1}`}
            className={`w-2 h-2 rounded-full transition-colors ${i === current ? "bg-black" : "bg-zinc-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
