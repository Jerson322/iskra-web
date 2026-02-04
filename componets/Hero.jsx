"use client";

import { useEffect, useState } from "react";
import { useChat } from "./ChatContext";

/* =========================
   TYPEWRITER COMPONENT
========================= */
function TypewriterText() {
  const text =
    "Iskraes una agencia de publicidad y marketing digital especializada en marketing de influencia,construcción de marca y campañas estratégicas con creadores, actores y talentos digitales en Colombia.";

  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const speed = isDeleting ? 35 : 55;

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(text.slice(0, index + 1));
        setIndex(index + 1);

        if (index + 1 === text.length) {
          setTimeout(() => setIsDeleting(true), 1200);
        }
      } else {
        setDisplayedText(text.slice(0, index - 1));
        setIndex(index - 1);

        if (index === 0) {
          setIsDeleting(false);
        }
      }
    }, speed);

    return () => clearTimeout(timeout);
  }, [index, isDeleting, text]);

  return (
    <p className="mt-5 text-base md:text-lg text-white">
      {displayedText}
      <span className="ml-1 inline-block w-[2px] h-5 bg-white animate-blink" />
    </p>
  );
}

/* =========================
   HERO
========================= */
export default function Hero() {
  const { setOpen } = useChat();

  return (
    <section id="inicio" className="relative h-screen w-full">
      {/* Video de fondo */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src="/videos/hero-video.mp4" type="video/mp4" />
      </video>

      <div className="hidden md:flex gap-12
    text-white font-semibold text-[15px] tracking-wide
    drop-shadow-[0_3px_8px_rgba(0,0,0,1)] relative z-10 flex h-full items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-4xl font-semibold leading-tight text-white md:text-6xl">
            Agencia de publicidad enfocada en
            <span className="block">influencia y resultados reales</span>
          </h1>

          {/* ✨ TYPEWRITER */}
          <TypewriterText />

          {/* BOTONES */}
          <div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center">
            {/* BOTÓN 1 */}
            <button
              onClick={() => setOpen(true)}
              className="group relative flex w-full max-w-xs justify-center rounded-full p-[3px] overflow-hidden sm:w-auto"
            >
              <span className="pointer-events-none absolute inset-0 rounded-full spark-border" />
              <span className="relative z-10 w-full rounded-full bg-black/80 px-8 py-3 text-center text-base font-semibold tracking-wide text-white transition hover:bg-white hover:text-black sm:text-lg">
                Cotizar
              </span>
            </button>

            {/* BOTÓN 2 */}
            <button
              onClick={() => setOpen(true)}
              className="group relative flex w-full max-w-xs justify-center rounded-full p-[3px] overflow-hidden sm:w-auto"
            >
              <span className="pointer-events-none absolute inset-0 rounded-full spark-border" />
              <span className="relative z-10 w-full rounded-full bg-black/80 px-8 py-3 text-center text-base font-semibold tracking-wide text-white transition hover:bg-white hover:text-black sm:text-lg">
                ¿Quieres ser influencer?
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
