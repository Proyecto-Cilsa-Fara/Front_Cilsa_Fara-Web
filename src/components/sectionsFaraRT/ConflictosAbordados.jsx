import React from 'react'

export function ConflictosAbordados() {
  return (
    <section className="flex flex-col justify-center items-center w-full gap-16 py-12 px-10 md:py-20 md:px-32">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="relative">
          <div className="skew-custom absolute w-full translate-x-3 -translate-y-2 bg-fara-cyan px-5 py-6 md:translate-x-5 md:-translate-y-3 md:px-7 lg:py-9"></div>
          <div className="skew-custom absolute w-full -translate-x-3 translate-y-2 bg-fara-red px-5 py-6 md:-translate-x-3 md:translate-y-4 md:px-7 lg:py-9"></div>
          <h2 className="skew-custom text-xl relative w-full bg-fara-gold px-6 py-3 font-bold md:text-2xl lg:text-5xl lg:pr-12">
            Lo que abordamos
          </h2>
        </div>
        <p className="text-lg text-center max-w-3xl md:text-xl lg:text-2xl">
          Acompañamos a empresas, organismos públicos, instituciones educativas, organizaciones sociales y equipos de trabajo en la prevención, gestión y transformación de conflictos laborales.
        </p>
      </div>

      <div className="max-w-6xl mx-auto text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-6 text-left">
          <div
            className="flex flex-col items-center justify-center gap-2 border border-neutral-200 hover:shadow-md transition-shadow duration-200 px-8 py-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-message-square-x-icon lucide-message-square-x"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z" /><path d="m14.5 8.5-5 5" /><path d="m9.5 8.5 5 5" /></svg>
            <h3 className="text-lg text-center font-semibold text-neutral-900">
              Problemas de comunicación
            </h3>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-2 border border-neutral-200 hover:shadow-md transition-shadow duration-200 px-8 py-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-user-x-icon lucide-user-x"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><line x1="17" x2="22" y1="8" y2="13" /><line x1="22" x2="17" y1="8" y2="13" /></svg>
            <h3 className="text-lg text-center font-semibold text-neutral-900">
              Conflictos entre compañeros
            </h3>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-2 border border-neutral-200 hover:shadow-md transition-shadow duration-200 px-8 py-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-bomb-icon lucide-bomb"><circle cx="11" cy="13" r="9" /><path d="M14.35 4.65 16.3 2.7a2.41 2.41 0 0 1 3.4 0l1.6 1.6a2.4 2.4 0 0 1 0 3.4l-1.95 1.95" /><path d="m22 2-1.5 1.5" /></svg>
            <h3 className="text-lg text-center font-semibold text-neutral-900">
              Tensiones entre áreas
            </h3>
          </div>
          <div
            className="flex flex-col items-center  justify-center gap-2 border border-neutral-200 hover:shadow-md transition-shadow duration-200 px-8 py-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-gavel-icon lucide-gavel"><path d="m14 13-8.381 8.38a1 1 0 0 1-3.001-3l8.384-8.381" /><path d="m16 16 6-6" /><path d="m21.5 10.5-8-8" /><path d="m8 8 6-6" /><path d="m8.5 7.5 8 8" /></svg>
            <h3 className="text-lg text-center font-semibold text-neutral-900">
              Violencia laboral
            </h3>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-2 border border-neutral-200 hover:shadow-md transition-shadow duration-200 px-8 py-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-circle-alert-icon lucide-circle-alert"><circle cx="12" cy="12" r="10" /><line x1="12" x2="12" y1="8" y2="12" /><line x1="12" x2="12.01" y1="16" y2="16" /></svg>
            <h3 className="text-lg text-center font-semibold text-neutral-900">
              Hostigamiento
            </h3>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-2 border border-neutral-200 hover:shadow-md transition-shadow duration-200 px-8 py-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-frown-icon lucide-frown"><circle cx="12" cy="12" r="10" /><path d="M16 16s-1.5-2-4-2-4 2-4 2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" /></svg>
            <h3 className="text-lg text-center font-semibold text-neutral-900">
              Maltrato
            </h3>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-2 border border-neutral-200 hover:shadow-md transition-shadow duration-200 px-8 py-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-exclamation-point-icon lucide-file-exclamation-point"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
            <h3 className="text-lg text-center font-semibold text-neutral-900">
              Procesos disciplinarios
            </h3>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-2 border border-neutral-200 hover:shadow-md transition-shadow duration-200 px-8 py-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-waypoints-icon lucide-waypoints"><path d="m10.586 5.414-5.172 5.172" /><path d="m18.586 13.414-5.172 5.172" /><path d="M6 12h12" /><circle cx="12" cy="20" r="2" /><circle cx="12" cy="4" r="2" /><circle cx="20" cy="12" r="2" /><circle cx="4" cy="12" r="2" /></svg>
            <h3 className="text-lg text-center font-semibold text-neutral-900">
              Reorganizaciones
            </h3>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-2 border border-neutral-200 hover:shadow-md transition-shadow duration-200 px-8 py-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-network-icon lucide-network"><rect x="16" y="16" width="6" height="6" rx="1" /><rect x="2" y="16" width="6" height="6" rx="1" /><rect x="9" y="2" width="6" height="6" rx="1" /><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3" /><path d="M12 12V8" /></svg>
            <h3 className="text-lg text-center font-semibold text-neutral-900">
              Crisis de liderazgo
            </h3>
          </div>
          <div
            className="flex flex-col items-center justify-center gap-2 border border-neutral-200 hover:shadow-md transition-shadow duration-200 px-8 py-5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-users-round-icon lucide-users-round"><path d="M18 21a8 8 0 0 0-16 0" /><circle cx="10" cy="8" r="5" /><path d="M22 20c0-3.37-2-6.5-4-8a5 5 0 0 0-.45-8.3" /></svg>
            <h3 className="text-lg text-center font-semibold text-neutral-900">
              Equipos interdisciplinarios
            </h3>
          </div>
        </div>
      </div>
    </section>
  )
}
