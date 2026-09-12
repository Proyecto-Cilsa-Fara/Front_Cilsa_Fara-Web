import React from 'react'

export function Servicios() {
  return (
    <section id="servicios" className="flex flex-col justify-center items-center w-full gap-16 py-12 px-10 md:py-20 md:px-32">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="relative">
          <div className="skew-custom absolute w-full translate-x-3 -translate-y-2 bg-fara-cyan px-5 py-6 md:translate-x-5 md:-translate-y-3 md:px-7 lg:py-9"></div>
          <div className="skew-custom absolute w-full -translate-x-3 translate-y-2 bg-fara-red px-5 py-6 md:-translate-x-3 md:translate-y-4 md:px-7 lg:py-9"></div>
          <h2 className="skew-custom text-xl relative w-full bg-fara-gold px-6 py-3 font-bold md:text-2xl lg:text-5xl lg:pr-12">
            Programas institucionales
          </h2>
        </div>
        <p className="text-lg text-center max-w-3xl md:text-xl lg:text-2xl">
          Soluciones integrales para cada actor de la comunidad educativa.
        </p>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-left">
          <div
            className="border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-chart-column-icon lucide-file-chart-column"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M14 2v5a1 1 0 0 0 1 1h5" /><path d="M8 18v-1" /><path d="M12 18v-6" /><path d="M16 18v-3" /></svg>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Diagnóstico Institucional
              </h3>
              <ul>
                <li>Evaluación de clima laboral</li>
                <li>Mapeo de conflictos</li>
                <li>Identificación de riesgos</li>
              </ul>
            </div>
          </div>

          <div
            className="border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-messages-square-icon lucide-messages-square"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" /></svg>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Facilitación de Conflictos
              </h3>
              <ul>
                <li>Mediación profesional</li>
                <li>Mesas de diálogo</li>
                <li>Gestión de acuerdos</li>
              </ul>
            </div>
          </div>

          <div
            className="border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw-icon lucide-refresh-cw"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Círculos Restaurativos
              </h3>
              <ul>
                <li>Reconstrucción de confianza</li>
                <li>Prevención de escalada</li>
                <li>Reparación grupal</li>
              </ul>
            </div>
          </div>

          <div
            className="border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="p-5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Capacitación y Formación
              </h3>
              <ul>
                <li>Liderazgo restaurativo</li>
                <li>Comunicación no violenta</li>
                <li>Gestión emocional</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
