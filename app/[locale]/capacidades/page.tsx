"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTranslations } from "next-intl";
import ScrollReveal from "@/componets/ScrollReveal";

export default function CapacidadesPage() {
  const t = useTranslations("capacidadesSection");
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  /* =======================
     SCROLL PARALLAX HERO
  ======================= */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["0%", "0%"] : ["0%", "60%"],
  );

  const imageScale = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? [1, 1] : [1, 1.1],
  );

  const imageBlur = useTransform(
    scrollYProgress,
    [0, 1],
    isMobile ? ["blur(0px)", "blur(0px)"] : ["blur(0px)", "blur(4px)"],
  );

  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const cards = t.raw("cards") as Array<{ title: string; description: string }>;

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* =======================
          HERO PARALLAX
      ======================= */}
      <section
        ref={heroRef}
        className="relative h-[120vh] w-full overflow-hidden"
      >
        <motion.div
          style={{
            y: imageY,
            scale: imageScale,
            filter: imageBlur,
            willChange: "transform, filter",
          }}
          className="absolute inset-0"
        >
          <Image
            src="/images/servicios.png"
            alt="Capacidades Iskra"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black z-10" />

        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px]" />
        </div>

        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-20 h-full flex flex-col items-center justify-center px-6"
        >
          <span className="text-sm uppercase tracking-widest text-purple-400 mb-4">
            {t("subtitle")}
          </span>
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
            {t("title")}
          </h1>
        </motion.div>
      </section>

      {/* =======================
      TARJETAS DE CAPACIDADES
      ======================= */}
      <section className="bg-gradient-to-b from-zinc-900 to-zinc-950 py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {cards.map((card, i) => (
              <ScrollReveal key={i} delay={i * 100}>
                <div className="group rounded-2xl border border-purple-500/30 bg-purple-900/20 p-6 text-center transition-all duration-300 hover:-translate-y-2 hover:bg-purple-900/40 hover:border-purple-500/50 backdrop-blur-sm h-full flex flex-col">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 text-white font-semibold mx-auto">
                    {i + 1}
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-white">
                    {card.title}
                  </h3>

                  <p className="text-gray-300 text-sm leading-relaxed flex-grow">
                    {card.description}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
