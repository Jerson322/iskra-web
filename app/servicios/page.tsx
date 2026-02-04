"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";

const services = [
  {
    title: "Estrategia de Influencer Marketing",
    description:
      "Diseñamos estrategias dirigidas a influencers, creadores de contenido y artistas, alineadas con los objetivos comerciales de cada marca, enfocadas en impacto, alcance y conversión real.",
  },
  {
    title: " Estategia creativa",
    description:
      "Somos una empresa especializada en el desarrollo de estrategias creativas para marcas, enfocada en diseñar y ejecutar soluciones que generen conexión, posicionamiento y resultados medibles. Trabajamos con empresas de distintos tamaños, acompañándolas en la definición y evolución de su comunicación a partir de un entendimiento profundo de su identidad, objetivos y audiencia. Nuestro enfoque integra narrativa, estrategia de contenido y ejecución creativa, alineando cada acción con el ADN de la marca y las dinámicas del ecosistema digital. Creemos en la creatividad aplicada estratégicamente como motor de valor, impacto y crecimiento sostenible para el negocio.",
  },
  {
    title: "Selección y Curaduría de Influencers",
    description:
      "Analizamos data, engagement real y afinidad de marca para seleccionar perfiles auténticos que conecten con la audiencia correcta y generen resultados medibles.",
  },
  {
    title: "Acompañamiento para Nuevos Influencers",
    description:
      "Guiamos a nuevos creadores en su posicionamiento, contenido, marca personal y primeras colaboraciones para que entren al mercado de forma profesional.",
  },
  {
    title: "Consultoría para Creadores Junior",
    description:
      "Asesoramos en tarifas, negociación con marcas, crecimiento orgánico, optimización de contenido y construcción de una carrera sostenible dentro del ecosistema digital.",
  },
];

export default function ServiciosPage() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
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

  return (
    <main className="bg-black text-white overflow-hidden">
      {/* =======================
          HERO PARALLAX
      ======================= */}
      <section
        ref={heroRef}
        className="relative h-[120vh] w-full overflow-hidden"
      >
        {/* Imagen */}
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
            src="/images/servicios.png" // cambia la imagen si quieres
            alt="Servicios Iskra"
            fill
            priority
            className="object-cover"
          />
        </motion.div>

        {/* Overlay oscuro */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/70 to-black z-10" />

        {/* Glow marketing */}
        <div className="absolute inset-0 z-10 pointer-events-none">
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-purple-600/20 blur-[120px]" />
        </div>

        {/* Título */}
        <motion.div
          style={{ y: titleY, opacity: titleOpacity }}
          className="relative z-20 h-full flex items-center justify-center px-6"
        >
          <h1 className="text-6xl md:text-7xl font-semibold tracking-tight">
            Servicios
          </h1>
        </motion.div>
      </section>

      {/* =======================
          SERVICIOS
      ======================= */}
      <section className="max-w-5xl mx-auto px-6 py-32 space-y-12">
        {services.map((service, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: i * 0.1,
            }}
            viewport={{ once: true }}
            className="border-b border-white/10 pb-8 cursor-pointer"
            onClick={() => setActiveIndex(activeIndex === i ? null : i)}
          >
            {/* TÍTULO */}
            <div className="flex items-center justify-between">
              <h2 className="text-xl md:text-2xl font-medium">
                {service.title}
              </h2>

              <span className="text-white/40 text-3xl select-none">
                {activeIndex === i ? "–" : "+"}
              </span>
            </div>

            {/* DESCRIPCIÓN */}
            <AnimatePresence>
              {activeIndex === i && (
                <motion.p
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="text-white/70 mt-5 leading-relaxed pr-8"
                >
                  {service.description}
                </motion.p>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </section>
    </main>
  );
}
