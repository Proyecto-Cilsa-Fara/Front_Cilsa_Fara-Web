import React from 'react'

export function Metodologia() {
  return (
    <section className="flex flex-col justify-center w-full gap-8 py-12 md:py-20 md:gap-16 lg:items-center">
      <div className="flex flex-col items-end w-full">
        <div className="bg-fara-red skew-custom-inverse w-5/6 text-center text-white px-5 py-12">
          <h2 className="text-xl mb-5 font-bold md:text-2xl lg:text-5xl">Nuestra metodología</h2>
          <p className="text-lg text-center max-w-3xl mx-auto md:text-xl lg:text-2xl">
            Trabajamos desde los principios que constituyen nuestro ADN institucional
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 max-w-4xl">
        <div className="flex flex-col items-center w-48 gap-2 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stokelinecap="round" strokeLinejoin="round" className="lucide lucide-speech-icon lucide-speech"><path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" /><path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" /><path d="M17 15a3.5 3.5 0 0 0-.025-4.975" /></svg>
          <h3 className="font-bold">
            Diálogo
          </h3>
          <p className="text-base leading-snug">
            Escuchar para comprender
          </p>
        </div>

        <div className="flex flex-col items-center w-48 gap-2 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-check-icon lucide-circle-check"><circle cx="12" cy="12" r="10" /><path d="m9 12 2 2 4-4" /></svg>
          <h3 className="font-bold">
            Responsabilidad
          </h3>
          <p className="text-base leading-snug">
            Reconocer el impacto de nuestras acciones
          </p>
        </div>

        <div className="flex flex-col items-center w-48 gap-2 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-cross-icon lucide-cross"><path d="M4 9a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h4a1 1 0 0 1 1 1v4a2 2 0 0 0 2 2h2a2 2 0 0 0 2-2v-4a1 1 0 0 1 1-1h4a2 2 0 0 0 2-2v-2a2 2 0 0 0-2-2h-4a1 1 0 0 1-1-1V4a2 2 0 0 0-2-2h-2a2 2 0 0 0-2 2v4a1 1 0 0 1-1 1z" /></svg>
          <h3 className="font-bold">
            Reparación
          </h3>
          <p className="text-base leading-snug">
            Restablecer los vínculos dañados
          </p>
        </div>

        <div className="flex flex-col items-center w-48 gap-2 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>
          <h3 className="font-bold">
            Comunidad
          </h3>
          <p className="text-base leading-snug">
            Construir soluciones colectivas
          </p>
        </div>

        <div className="flex flex-col items-center w-48 gap-2 text-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield-icon lucide-shield"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /></svg>
          <h3 className="font-bold">
            Derechos Humanos
          </h3>
          <p className="text-base leading-snug">
            Garantizar la dignidad y participación de todas las personas
          </p>
        </div>
      </div>
    </section>
  )
}
