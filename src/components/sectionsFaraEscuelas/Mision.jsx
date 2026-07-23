import React from 'react'
import ConvivenciaEscolar from '../../assets/escuelas/Convivencia-Escolar.webp'
import { useEmailContact } from '../../hooks/useEmailContact';

export function Mision() {

  const { onClikEmail, mailtoEmail } = useEmailContact("outlook", "Solicitud de asesoramiento para escuelas");

  return (
    <section className="flex flex-col items-center w-full gap-6 py-12 px-10 lg:gap-20 md:py-20 md:px-18 lg:px-32 md:flex-row">
      <div className="hidden lg:block md:flex-1">
        <img
          src={ConvivenciaEscolar}
          alt="Logo de FARA Género y Diversidad, con el isotipo y el nombre de la organización"
          className="max-w-full h-auto rounded-lg aspect-square"
          loading="lazy"
        />
      </div>
      <div className="md:flex-2">
        <h2 className="text-xl font-bold md:text-2xl lg:text-5xl mb-5">
          Fortalecer la convivencia escolar con prácticas restaurativas
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl lg:max-w-4/5">
          Fortalecer la convivencia escolar mediante prácticas
          restaurativas que permitan prevenir situaciones de violencia,
          reparar daños, fortalecer vínculos y construir comunidades
          educativas saludables.
        </p>

        <div className='flex gap-4 text-white mt-8'>
          <div className='bg-fara-blue p-4 w-full'>
            <p className='text-base font-bold'>Preventiva</p>
            <p>Anticipamos el conflicto.</p>
          </div>
          <div className='bg-fara-blue p-4 w-full'>
            <p className='text-base font-bold'>Reparadora</p>
            <p>Sanamos las relaciones.</p>
          </div>
        </div>

        <a className='flex p-4 mt-8 items-center justify-between border-2 w-36 cursor-pointer' href={mailtoEmail}
          onClick={onClikEmail} aria-label='Conocer mas' > Contactar <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-chevron-right-icon lucide-chevron-right"><path d="m9 18 6-6-6-6" /></svg></a>
      </div>
    </section>
  )
}
