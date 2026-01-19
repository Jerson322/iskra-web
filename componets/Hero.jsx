export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Imagen de fondo */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/0" />

      {/* Contenido */}
      <div className="relative z-10 h-full flex items-center justify-center px-6">
        <div className="max-w-3xl text-center text-white">
          <h1 className="text-4xl md:text-6xl font-semibold leading-tight animate-rise delay-1">
            Publicidad que conecta
            <span className="block text-white/80">
              estrategia, creatividad y resultados
            </span>
          </h1>

          <p className="mt-6 text-lg text-white/80 animate-rise delay-2">
            Somos Iskra, una agencia de publicidad que transforma ideas en
            campañas con impacto real.
          </p>

          <div className="mt-12 flex justify-center animate-rise delay-3">
            <a
              href="#contacto"
              className="relative inline-flex rounded-full p-[2px] overflow-hidden group"
            >
              {/* chispa */}
              <span className="absolute inset-0 rounded-full spark-border" />

              {/* botón */}
              <span
                className="relative z-10 rounded-full bg-black px-10 py-4
      text-white font-medium tracking-wide"
              >
                Cotiza ahora
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
