"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

export default function TeamSection() {
  return (
    <section className="relative bg-white py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
        {/* TEXTO */}
        <div>
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-semibold text-black mb-8">
              Nuestro equipo
            </h2>
          </ScrollReveal>

          <ScrollReveal delay={100}>
            <p className="text-xl text-gray-700 leading-relaxed mb-10">
              Iskra está conformada por un equipo multidisciplinario de
              profesionales en estrategia, creatividad y gestión de campañas.
              Cada proyecto se desarrolla con especialistas que se activan de
              acuerdo con los objetivos y necesidades de cada marca.
            </p>
          </ScrollReveal>

          <div className="grid gap-6 mb-12">
            {[
              "Equipo multidisciplinario activado según cada proyecto",
              "Pensamiento estratégico antes que tendencias vacías",
              "Creatividad con criterio, no improvisación",
            ].map((text, i) => (
              <ScrollReveal key={i} delay={200 + i * 100}>
                <div className="flex items-start gap-4">
                  <span className="mt-2 h-2 w-2 rounded-full bg-purple-500" />
                  <p className="text-gray-600 text-base">{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <ScrollReveal delay={500}>
            <p className="text-lg text-gray-800 leading-relaxed mb-6">
              Este modelo de trabajo ha sido diseñado para asegurar flexibilidad
              operativa, eficiencia en la gestión y un alto nivel de
              especialización en cada fase de los proyectos.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={500}>
            <p className="text-lg text-gray-900 font-medium leading-relaxed">
              La dirección estratégica y la supervisión directa de los proyectos
              son asumidas personalmente, con el objetivo de garantizar
              coherencia, solidez estratégica y una orientación constante hacia
              resultados medibles.
            </p>
          </ScrollReveal>
        </div>

        {/* IMAGEN DINÁMICA */}
        <div className="relative flex justify-center">
          {/* Glow animado */}
          <motion.div
            className="absolute -inset-6 rounded-full bg-purple-500/20 blur-3xl"
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 4, repeat: Infinity }}
          />

          {/* Marco */}
          <motion.div
            className="relative rounded-3xl border border-black/10 p-2"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Image
              src="/images/Ceña4.png"
              alt="Founder Iskra"
              width={420}
              height={520}
              className="rounded-2xl object-cover"
            />

            {/* Overlay */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-black/40 to-transparent" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
