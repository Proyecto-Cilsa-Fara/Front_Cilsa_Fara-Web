import React from 'react'

export function Comunidad() {
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
          La transformación escolar es un trabajo colectivo. Caminamos junto a cada actor de la comunidad educativa.
        </p>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <div className="flex flex-wrap justify-center gap-x-10 gap-y-8">
          <div className="flex flex-col items-center w-24">
            <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-user-round-icon lucide-user-round"><circle cx="12" cy="8" r="5" /><path d="M20 21a8 8 0 0 0-16 0" /></svg>
            </div>
            <p className="text-base leading-snug">Equipo Directivos</p>
          </div>

          <div className="flex flex-col items-center w-24">
            <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" class="lucide lucide-square-user-round-icon lucide-square-user-round"><path d="M18 21a6 6 0 0 0-12 0" /><circle cx="12" cy="11" r="4" /><rect width="18" height="18" x="3" y="3" rx="2" /></svg>
            </div>
            <p className="text-base leading-snug">Docentes</p>
          </div>

          <div className="flex flex-col items-center w-24">
            <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-graduation-cap-icon lucide-graduation-cap"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z" /><path d="M22 10v6" /><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5" /></svg>
            </div>
            <p className="text-base leading-snug">Estudiantes</p>
          </div>

          <div className="flex flex-col items-center w-24">
            <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-icon lucide-users"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><path d="M16 3.128a4 4 0 0 1 0 7.744" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><circle cx="9" cy="7" r="4" /></svg>
            </div>
            <p className="text-base leading-snug">Familias</p>
          </div>

          <div className="flex flex-col items-center w-24">
            <div className="w-16 h-16 rounded-full bg-neutral-900 flex items-center justify-center mb-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-landmark-icon lucide-landmark"><path d="M10 18v-7" /><path d="M11.119 2.205a2 2 0 0 1 1.762 0l7.84 3.846A.5.5 0 0 1 20.5 7h-17a.5.5 0 0 1-.22-.949z" /><path d="M14 18v-7" /><path d="M18 18v-7" /><path d="M3 22h18" /><path d="M6 18v-7" /></svg>
            </div>
            <p className="text-base leading-snug">Organismos educativos</p>
          </div>
        </div>
      </div>
    </section>
  )
}
