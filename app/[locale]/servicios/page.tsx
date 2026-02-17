"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion";
import { useTranslations } from "next-intl";

interface Service {
  title: string;
  description: string;
}

export default function ServiciosPage() {
  const t = useTranslations("servicesPage");
  const heroRef = useRef<HTMLDivElement>(null);
  const [isMobile, setIsMobile] = useState(false);
  const [expanded, setExpanded] = useState<number | null>(null);


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
            {t("title")}
          </h1>
        </motion.div>
      </section>
{/* =======================
    SERVICIOS
======================= */}
<section className="max-w-6xl mx-auto px-6 py-32 space-y-32">

  {/* =======================
      SERVICIOS NACIONALES
  ======================= */}
  <div>
    <h2 className="text-4xl md:text-5xl font-semibold mb-16">
      {t("nationalTitle")}
    </h2>

    <div className="grid md:grid-cols-2 gap-8">
      {(t.raw("national") as Service[]).map((service, i) => {
        const isOpen = expanded === i;

        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-all duration-500 backdrop-blur-sm"
          >
            <h3 className="text-xl font-medium mb-4">
              {service.title}
            </h3>

            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 90 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>

            {service.description.length > 180 && (
              <button
                onClick={() => setExpanded(isOpen ? null : i)}
                className="mt-4 text-sm text-purple-400 hover:text-purple-300 transition"
              >
                {isOpen ? "Ver menos" : "Ver más"}
              </button>
            )}
          </motion.div>
        );
      })}
    </div>
  </div>

  {/* =======================
      SERVICIOS INTERNACIONALES
  ======================= */}
  <div>
    <h2 className="text-4xl md:text-5xl font-semibold mb-6">
      {t("internationalTitle")}
    </h2>

    <p className="text-white/50 max-w-2xl mb-16">
      Expansión estratégica y posicionamiento de marca en mercados
      internacionales, conectando Europa y Latinoamérica.
    </p>

    <div className="grid md:grid-cols-3 gap-8">
      {(t.raw("international") as Service[]).map((service, i) => {
        const index = 100 + i; // evita conflicto con nacionales
        const isOpen = expanded === index;

        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: i * 0.1 }}
            viewport={{ once: true }}
            className="p-8 rounded-2xl bg-gradient-to-br from-purple-600/10 to-pink-600/10 border border-purple-500/20 hover:border-purple-400 transition-all duration-500"
          >
            <h3 className="text-xl font-medium mb-4 text-purple-400">
              {service.title}
            </h3>

            <motion.div
              initial={false}
              animate={{ height: isOpen ? "auto" : 90 }}
              transition={{ duration: 0.4 }}
              className="overflow-hidden"
            >
              <p className="text-white/70 leading-relaxed">
                {service.description}
              </p>
            </motion.div>

            {service.description.length > 160 && (
              <button
                onClick={() => setExpanded(isOpen ? null : index)}
                className="mt-4 text-sm text-purple-300 hover:text-purple-200 transition"
              >
                {isOpen ? "Ver menos" : "Ver más"}
              </button>
            )}
          </motion.div>
        );
      })}
    </div>
  </div>
</section>
    </main>
  );
}
