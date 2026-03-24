"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

interface ProjectImageCarouselProps {
  images: string[];
  alt: string;
  interval?: number;
  imageClassName?: string;
}

export function ProjectImageCarousel({
  images,
  alt,
  interval = 3000,
  imageClassName = "object-cover",
}: ProjectImageCarouselProps) {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    if (images.length <= 1) return;
    timerRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, interval);
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, images.length, interval]);

  if (images.length === 0) return null;

  return (
    <div className="relative w-full h-full">
      {images.map((src, i) => (
        <Image
          key={src}
          src={src}
          alt={`${alt} — screenshot ${i + 1}`}
          fill
          className={`${imageClassName} transition-opacity duration-700 ${
            i === current ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}
      {images.length > 1 && (
        <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1 z-10">
          {images.map((_, i) => (
            <span
              key={i}
              className={`block h-1 rounded-full transition-all duration-300 ${
                i === current ? "w-4 bg-white" : "w-1 bg-white/50"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
