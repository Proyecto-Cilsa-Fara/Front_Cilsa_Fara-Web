import React from 'react'

export default function EquipoProfesional() {
  return (
    <section id='equipo' className="flex flex-col justify-center w-full gap-10 py-12 px-10 md:py-20 md:px-32 md:gap-16">
      <div className="flex flex-col justify-between items-start w-full gap-3">
        <div className="px-6 py-8 pr-16 bg-fara-blue text-white skew-custom">
          <h2 className="text-xl font-bold md:text-2xl lg:text-5xl mb-5">
            Nuestro Equipo Profesional
          </h2>
          <p className="text-lg max-w-3xl md:text-xl lg:text-2xl">
            Contamos con expertos certificados en múltiples disciplinas para brindar un abordaje integral.
          </p>
        </div>
      </div>

      <div className='max-w-6xl'>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 font-bold text-fara-gray">
          <ul className="flex flex-col gap-6">
            <li className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              <p className="text-base md:text-xl">Justicia Restaurativa</p>
            </li>
            <li className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              <p className="text-base md:text-xl">Derecho Laboral</p>
            </li>
            <li className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              <p className="text-base md:text-xl">Facilitación de Procesos Participativos</p>
            </li>
          </ul>
          <ul className="flex flex-col gap-6">
            <li className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              <p className="text-base md:text-xl">ADR (Resolución Alternativa)</p>
            </li>
            <li className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              <p className="text-base md:text-xl">Psicología Organizacional</p>
            </li>
            <li className="flex gap-2 items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
              <p className="text-base md:text-xl">Gestión Institucional</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
