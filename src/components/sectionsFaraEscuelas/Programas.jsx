import React from 'react'
import { ComunidadEscuela, FormacionEscuela, InstitucionalEscuela, PrevencionEscuela } from '../../assets/escuelas'
export function Programas() {
  return (
    <section className="flex flex-col justify-center items-center w-full gap-16 py-12 px-10 md:py-20 md:px-32">
      <div className="flex flex-col items-center justify-center gap-8">
        <div class="relative">
          <div class="skew-custom absolute w-full translate-x-3 -translate-y-2 bg-fara-cyan px-5 py-6 md:translate-x-5 md:-translate-y-3 md:px-7 lg:py-9"></div>
          <div class="skew-custom absolute w-full -translate-x-3 translate-y-2 bg-fara-red px-5 py-6 md:-translate-x-3 md:translate-y-4 md:px-7 lg:py-9"></div>
          <h2 class="skew-custom text-xl relative w-full bg-fara-gold px-6 py-3 font-bold md:text-2xl lg:text-5xl lg:pr-12">
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
            <div className="bg-neutral-100 h-40 flex items-center overflow-hidden">
              <img src={InstitucionalEscuela}
                className='aspect-square w-full content-center bg-cover'
                alt='Insitucional' />
            </div>
            <div className="p-5">
              <p className="text-xs font-medium mb-1">
                Institucional
              </p>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Escuelas restaurativas
              </h3>
              <p className="text-sm leading-relaxed">
                Acompañamiento integral para incorporar prácticas restaurativas en la cultura institucional.
              </p>
            </div>
          </div>

          <div
            className="border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="bg-neutral-100 h-40 flex items-center overflow-hidden">
              <img src={PrevencionEscuela}
                className='aspect-square w-full content-center bg-cover'
                alt='Insitucional' />
            </div>
            <div className="p-5">
              <p className="text-xs font-medium mb-1">
                Prevención
              </p>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Convivencia en acción
              </h3>
              <p className="text-sm leading-relaxed">
                Dispositivo preventivo para fortalecer vínculos, participación y pertenencia escolar.
              </p>
            </div>
          </div>

          <div
            className="border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="bg-neutral-100 h-40 flex items-center overflow-hidden">
              <img src={FormacionEscuela}
                className='aspect-square w-full content-center bg-cover'
                alt='Insitucional' />
            </div>
            <div className="p-5">
              <p className="text-xs font-medium mb-1">
                Formación
              </p>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Aulas que dialogan
              </h3>
              <p className="text-sm leading-relaxed">
                Capacitación para docentes y estudiantes en herramientas de gestión pacífica de conflictos.
              </p>
            </div>
          </div>

          <div
            className="border border-neutral-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
          >
            <div className="bg-neutral-100 h-40 flex items-center overflow-hidden">
              <img src={ComunidadEscuela}
                className='aspect-square w-full content-center bg-cover'
                alt='Insitucional' />
            </div>
            <div className="p-5">
              <p className="text-xs font-medium mb-1">
                Comunidad
              </p>
              <h3 className="text-lg font-semibold text-neutral-900 mb-2">
                Familias que acompañan
              </h3>
              <p className="text-sm leading-relaxed">
                Talleres y guías para integrar a los padres en el proceso restaurativo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
