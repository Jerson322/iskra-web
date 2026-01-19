import ScrollReveal from "./ScrollReveal";

export default function StrengthSection() {
  return (
    <section className="bg-zinc-50 py-32">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <ScrollReveal>
          <div className="text-center mb-24">
            <span className="text-sm uppercase tracking-widest text-gray-400">
              Diferencial Iskra
            </span>

            <h2 className="mt-4 text-4xl md:text-5xl font-bold">
              Nuestra verdadera fortaleza
            </h2>

            <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
              Influencer marketing estratégico para grandes marcas
            </p>
          </div>
        </ScrollReveal>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-12">

          <ScrollReveal delay={100}>
            <div className="group rounded-3xl border border-gray-200 p-10 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white text-lg font-semibold">
                01
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Estrategia primero
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Diseñamos la estrategia completa antes de conectar marcas
                con el influencer ideal.
              </p>

            </div>
          </ScrollReveal>

          <ScrollReveal delay={200}>
            <div className="group rounded-3xl border border-gray-200 p-10 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white text-lg font-semibold">
                02
              </div>

              <h3 className="text-xl font-semibold mb-4">
                El puente real
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Actuamos como el enlace directo entre empresas e influencers,
                alineando valores y objetivos reales.
              </p>

            </div>
          </ScrollReveal>

          <ScrollReveal delay={300}>
            <div className="group rounded-3xl border border-gray-200 p-10 text-left transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">

              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-black text-white text-lg font-semibold">
                03
              </div>

              <h3 className="text-xl font-semibold mb-4">
                Precios justos
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Trabajamos con tarifas transparentes que cuidan tanto a la
                marca como al creador.
              </p>

            </div>
          </ScrollReveal>

        </div>
      </div>
    </section>
  );
}
