"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function CasosRealesPage() {
  const heroRef = useRef<HTMLDivElement>(null);

  /* PARALLAX */
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "80%"]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const titleY = useTransform(scrollYProgress, [0, 1], ["0%", "120%"]);

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* =======================
          HERO
      ======================= */}
      <section
        ref={heroRef}
        className="relative h-[120vh] w-full overflow-hidden"
      >
        {/* Imagen placeholder - puedes cambiar por una imagen real */}
        <motion.div
          style={{ y: imageY, willChange: "transform" }}
          className="absolute inset-0 bg-gradient-to-b from-purple-900 to-black"
        >
          {/* Placeholder background */}
        </motion.div>

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black z-10" />

        {/* Glow */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px]" />
        </div>

        {/* Título */}
        <motion.div
          style={{ opacity: titleOpacity, y: titleY }}
          className="relative z-20 h-full flex items-center justify-center px-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-center">
            Casos Reales
          </h1>
        </motion.div>
      </section>

      {/* =======================
          CONTENIDO PLACEHOLDER
      ======================= */}
      <section className="max-w-6xl mx-auto px-6 py-32">
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-white/70 max-w-2xl text-lg leading-relaxed"
        >
          Próximamente: Casos de éxito reales de nuestras campañas y
          colaboraciones.
        </motion.p>

        <div className="mt-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Placeholder cards */}
          {[1, 2, 3].map((i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative overflow-hidden rounded-2xl bg-gray-800 p-6"
            >
              <h3 className="text-xl font-semibold mb-2">Caso {i}</h3>
              <p className="text-white/70">Contenido próximamente.</p>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}
