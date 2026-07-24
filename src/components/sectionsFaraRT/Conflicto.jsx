import React from 'react'
import { RelacionesConflicto } from '../../assets/relaciones-laborales'

export function Conflicto() {
  return (
    <section className="flex flex-col items-center w-full gap-6 py-12 px-10 lg:gap-20 md:py-20 md:px-18 lg:px-32 md:flex-row">
      <div className="md:flex-2">
        <h2 className="text-xl font-bold md:text-2xl lg:text-5xl mb-5">
          Gestionar el conflicto es proteger el capital humano
        </h2>
        <p className="text-lg mb-4 md:text-xl lg:text-2xl lg:max-w-4/5">
          Los conflictos en el ámbito laboral son inherentes a las relaciones humanas, pero su gestión inadecuada puede erosionar la cultura organizacional. En FARA, no solo buscamos resolver disputas, sino restaurar el tejido social de su organización.
        </p>

        <p className="text-lg md:text-xl mb-4 lg:text-2xl lg:max-w-4/5">
          Utilizamos prácticas restaurativas que priorizan la comunicación, la responsabilidad y la reparación del daño, permitiendo que los equipos salgan fortalecidos de las crisis.
        </p>

        <div className='flex gap-3'>
          <a className='bg-fara-old-lime/50 font-semibold p-4  cursor-pointer' href="#metodologia"
            aria-label='Conocer metodologia' >
            Metodologia
          </a>
          <a className='flex p-4 items-center justify-between cursor-pointer' href="#equipo"
            aria-label='Conocer equipo' >
            Equipo
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg>
          </a>
        </div>
      </div>
      <div className="hidden lg:block md:flex-1">
        <img
          src={RelacionesConflicto}
          alt="Logo de FARA Género y Diversidad, con el isotipo y el nombre de la organización"
          className="max-w-full h-auto aspect-square"
          loading="lazy"
        />
      </div>
    </section>
  )
}
