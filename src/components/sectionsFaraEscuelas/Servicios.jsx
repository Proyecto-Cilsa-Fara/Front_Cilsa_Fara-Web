import React from 'react'

export function Servicios() {
  return (
    <section className="flex flex-col justify-center w-full gap-8 py-12 md:py-20 md:gap-16 lg:items-center">
      <div className="flex flex-col justify-center w-full">
        <div className="bg-fara-blue skew-custom2 w-5/6 text-center text-white px-5 py-12">
          <h2 className="text-xl mb-5 font-bold md:text-2xl lg:text-5xl">¿Qué hacemos?</h2>
          <p className="text-lg text-center max-w-3xl mx-auto md:text-xl lg:text-2xl">
            Trabajamos en dos frentes claros. Prevenimos los conflictos antes de que escalen y actuamos con decisión cuando ocurren.
          </p>
        </div>
      </div>

      <div className='flex flex-col gap-8 px-4 lg:flex-row'>
        <div className='flex flex-col gap-6'>
          <h3 className='flex items-center gap-2 font-semibold text-2xl border-b pb-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stokelinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
            Prevencion
          </h3>
          <ul className="grid gap-6 lg:grid-cols-2">
            <li className="bg-fara-lime/30 px-4 py-2 text-base shadow-md transition-colors duration-300 text-center md:px-7 md:py-8 md:text-xl font-semibold flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stokelinecap="round" strokeLinejoin="round" className="lucide lucide-book-open-icon lucide-book-open"><path d="M12 7v14" /><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z" /></svg>
              Programas de convivencia escolar
            </li>
            <li className="bg-fara-lime/30 px-4 py-2 text-base shadow-md transition-colors duration-300 text-center md:px-7 md:py-8 md:text-xl font-semibold flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stokelinecap="round" strokeLinejoin="round" className="lucide lucide-shield-user-icon lucide-shield-user"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="M6.376 18.91a6 6 0 0 1 11.249.003" /><circle cx="12" cy="11" r="4" /></svg>
              Prevención del bullying
            </li>
            <li className="bg-fara-lime/30 px-4 py-2 text-base shadow-md transition-colors duration-300 text-center md:px-7 md:py-8 md:text-xl font-semibold flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stokelinecap="round" strokeLinejoin="round" className="lucide lucide-monitor-smartphone-icon lucide-monitor-smartphone"><path d="M18 8V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h8" /><path d="M10 19v-3.96 3.15" /><path d="M7 19h5" /><rect width="6" height="10" x="16" y="12" rx="2" /></svg>
              Prevención del ciberbullying
            </li>
            <li className="bg-fara-lime/30 px-4 py-2 text-base shadow-md transition-colors duration-300 text-center md:px-7 md:py-8 md:text-xl font-semibold flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stokelinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
              Educación emocional
            </li>
            <li className="bg-fara-lime/30 px-4 py-2 text-base shadow-md transition-colors duration-300 text-center md:px-7 md:py-8 md:text-xl font-semibold flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stokelinecap="round" strokeLinejoin="round" className="lucide lucide-speech-icon lucide-speech"><path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" /><path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" /><path d="M17 15a3.5 3.5 0 0 0-.025-4.975" /></svg>
              Comunicación no violenta
            </li>
            <li className="bg-fara-lime/30 px-4 py-2 text-base shadow-md transition-colors duration-300 text-center md:px-7 md:py-8 md:text-xl font-semibold flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stokelinecap="round" strokeLinejoin="round" className="lucide lucide-earth-icon lucide-earth"><path d="M21.54 15H17a2 2 0 0 0-2 2v4.54" /><path d="M7 3.34V5a3 3 0 0 0 3 3a2 2 0 0 1 2 2c0 1.1.9 2 2 2a2 2 0 0 0 2-2c0-1.1.9-2 2-2h3.17" /><path d="M11 21.95V18a2 2 0 0 0-2-2a2 2 0 0 1-2-2v-1a2 2 0 0 0-2-2H2.05" /><circle cx="12" cy="12" r="10" /></svg>
              Ciudadanía y participación
            </li>
          </ul>
        </div>

        <div className='flex flex-col gap-6'>
          <h3 className='flex items-center gap-2 font-semibold text-2xl border-b pb-2'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stokelinecap="round" strokeLinejoin="round" className="lucide lucide-shield-check-icon lucide-shield-check"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z" /><path d="m9 12 2 2 4-4" /></svg>
            Acción y Abordaje
          </h3>
          <ul className="grid gap-6 lg:grid-cols-2">
            <li className="bg-fara-lime/30 px-4 py-2 text-base shadow-md transition-colors duration-300 text-center md:px-7 md:py-8 md:text-xl font-semibold flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stokelinecap="round" strokeLinejoin="round" className="lucide lucide-triangle-alert-icon lucide-triangle-alert"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3" /><path d="M12 9v4" /><path d="M12 17h.01" /></svg>
              Intervención en conflictos
            </li>
            <li className="bg-fara-lime/30 px-4 py-2 text-base shadow-md transition-colors duration-300 text-center md:px-7 md:py-8 md:text-xl font-semibold flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stokelinecap="round" strokeLinejoin="round" className="lucide lucide-messages-square-icon lucide-messages-square"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z" /><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1" /></svg>
              Facilitación de diálogos
            </li>
            <li className="bg-fara-lime/30 px-4 py-2 text-base shadow-md transition-colors duration-300 text-center md:px-7 md:py-8 md:text-xl font-semibold flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stokelinecap="round" strokeLinejoin="round" className="lucide lucide-refresh-cw-icon lucide-refresh-cw"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" /><path d="M21 3v5h-5" /><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" /><path d="M8 16H3v5" /></svg>
              Círculos restaurativos
            </li>
            <li className="bg-fara-lime/30 px-4 py-2 text-base shadow-md transition-colors duration-300 text-center md:px-7 md:py-8 md:text-xl font-semibold flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stokelinecap="round" strokeLinejoin="round" className="lucide lucide-heart-icon lucide-heart"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5" /></svg>
              Acompañamiento directivo
            </li>
            <li className="bg-fara-lime/30 px-4 py-2 text-base shadow-md transition-colors duration-300 text-center md:px-7 md:py-8 md:text-xl font-semibold flex items-center gap-1.5">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" stokelinecap="round" strokeLinejoin="round" className="lucide lucide-speech-icon lucide-speech"><path d="M8.8 20v-4.1l1.9.2a2.3 2.3 0 0 0 2.164-2.1V8.3A5.37 5.37 0 0 0 2 8.25c0 2.8.656 3.054 1 4.55a5.77 5.77 0 0 1 .029 2.758L2 20" /><path d="M19.8 17.8a7.5 7.5 0 0 0 .003-10.603" /><path d="M17 15a3.5 3.5 0 0 0-.025-4.975" /></svg>
              Trabajo con familias
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
