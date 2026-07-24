import React from 'react'

export function Beneficios() {
  return (
    <section className="flex flex-col justify-center items-center w-full gap-16 py-12 px-10 md:py-20 md:px-32">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="relative">
          <div className="skew-custom absolute w-full translate-x-3 -translate-y-2 bg-fara-cyan px-5 py-6 md:translate-x-5 md:-translate-y-3 md:px-7 lg:py-9"></div>
          <div className="skew-custom absolute w-full -translate-x-3 translate-y-2 bg-fara-red px-5 py-6 md:-translate-x-3 md:translate-y-4 md:px-7 lg:py-9"></div>
          <h2 className="skew-custom text-xl relative w-full bg-fara-gold px-6 py-3 font-bold md:text-2xl lg:text-5xl lg:pr-12">
            Beneficios Medibles
          </h2>
        </div>
        <p className="text-lg text-center max-w-3xl md:text-xl lg:text-2xl">
          Impacto directo en la salud y productividad de su institución.
        </p>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
          <div
            className="flex gap-4 border border-neutral-200 border-l-fara-cyan border-l-2 hover:shadow-md transition-shadow duration-200 p-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-trending-up-icon lucide-trending-up"><path d="M16 7h6v6" /><path d="m22 7-8.5 8.5-5-5L2 17" /></svg>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Mejora del clima laboral
              </h3>
              <p>
                Ambientes más armónicos y colaborativos.
              </p>
            </div>
          </div>

          <div
            className="flex gap-4 border border-neutral-200 border-l-fara-cyan border-l-2 hover:shadow-md transition-shadow duration-200 p-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-x-icon lucide-calendar-x"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="m14 14-4 4" /><path d="m10 14 4 4" /></svg>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Reducción del ausentismo
              </h3>
              <p>
                Menos licencias por estrés o conflictos no resueltos.
              </p>
            </div>
          </div>

          <div
            className="flex gap-4 border border-neutral-200 border-l-fara-cyan border-l-2 hover:shadow-md transition-shadow duration-200 p-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-calendar-x-icon lucide-calendar-x"><path d="M8 2v4" /><path d="M16 2v4" /><rect width="18" height="18" x="3" y="4" rx="2" /><path d="M3 10h18" /><path d="m14 14-4 4" /><path d="m10 14 4 4" /></svg>
            <div>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Bienestar Emocional
              </h3>
              <p>
                Fomento de la salud mental en los equipos.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
