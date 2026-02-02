import ScrollReveal from "./ScrollReveal";
import Image from "next/image";
import backgroundImage from "@/public/images/steps-bg.jpg"; // Fondo borroso
import mainImage from "@/public/images/publi-modified.png"; // Imagen principal encima

export default function HighlightOverlaySection() {
  return (
    <section className="relative w-full flex items-center justify-center overflow-hidden">
      {/* Imagen de fondo borrosa */}
      <div className="absolute inset-0 -z-10">
        <Image
          src={backgroundImage}
          alt="Fondo digital"
          fill
          className="object-cover filter  brightness-75"
          priority
        />
      </div>

      {/* Contenedor central */}
      <div className="relative z-10 max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-12 px-6 py-24">
        {/* Imagen principal encima */}
        <div className="flex-shrink-0 w-full lg:w-1/2 relative">
          <Image
            src={mainImage}
            alt="Presencia digital"
            width={1200}
            height={800}
            className="rounded-xl shadow-xl object-contain mx-auto"
          />
        </div>

        {/* Texto centrado */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <ScrollReveal>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 drop-shadow-lg">
              Convertimos presencia digital <br /> en posicionamiento real
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={150}>
            <p className="text-lg md:text-xl text-white/90 leading-relaxed drop-shadow-sm">
              ISKRA es la agencia estratégica de publicidad e influencia que
              convierte la presencia digital en posicionamiento real, mediante
              campañas con creadores basadas en criterio, negociación
              profesional y ejecución impecable.
            </p>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
