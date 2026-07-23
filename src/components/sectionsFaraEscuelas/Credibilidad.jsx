import React from 'react'

const impacto = [
  {
    stat: "+85%",
    titulo: "Mejora de la convivencia",
    descripcion: "Percepción positiva del clima escolar.",
  },
  {
    stat: "-60%",
    titulo: "Disminución de conflictos",
    descripcion: "Reducción drástica de sanciones punitivas.",
  },
  {
    stat: "Total",
    titulo: "Prevención de violencia",
    descripcion: "Detección temprana de focos de riesgo.",
  },
  {
    stat: "Sólido",
    titulo: "Habilidades socioemocionales",
    descripcion: "Fortalecimiento de la empatía grupal.",
  },
];

export function Credibilidad() {
  return (
    <section className="flex flex-col justify-center items-center w-full gap-16 py-12 px-10 md:py-20 md:px-32">
      <div className="flex flex-col items-center justify-center gap-8">
        <div class="relative">
          <div class="skew-custom absolute w-full translate-x-3 -translate-y-2 bg-fara-cyan px-5 py-6 md:translate-x-5 md:-translate-y-3 md:px-7 lg:py-9"></div>
          <div class="skew-custom absolute w-full -translate-x-3 translate-y-2 bg-fara-red px-5 py-6 md:-translate-x-3 md:translate-y-4 md:px-7 lg:py-9"></div>
          <h2 class="skew-custom text-xl relative w-full bg-fara-gold px-6 py-3 font-bold md:text-2xl lg:text-5xl lg:pr-12">
            ¿A quiénes acompañamos?
          </h2>
        </div>
        <p className="text-lg text-center max-w-3xl md:text-xl lg:text-2xl">
          El trabajo serio deja huella en las comunidades.
        </p>
      </div>
      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          {impacto.map(({ stat, titulo, descripcion }) => (
            <div
              key={titulo}
              className="relative overflow-hidden border border-neutral-200 p-6"
            >
              <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-fara-gold/20" />
              <div className="relative">
                <p className="text-3xl font-bold mb-4">
                  {stat}
                </p>
                <h3 className="text-base font-semibold mb-2">
                  {titulo}
                </h3>
                <p className="text-base leading-snug">
                  {descripcion}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
