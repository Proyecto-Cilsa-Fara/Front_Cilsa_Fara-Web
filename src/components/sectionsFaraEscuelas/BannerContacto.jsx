import React from 'react'
import { useEmailContact } from '../../hooks/useEmailContact';

export function BannerContacto() {

  const { onClikEmail, mailtoEmail } = useEmailContact("outlook", "Solicitud de asesoramiento para escuelas");

  return (
    <section className="flex flex-col justify-center w-full pt-12 md:pt-20 lg:items-center">
      <div className="flex flex-col items-start flex-1">
        <div className="bg-fara-cyan/20 skew-custom w-5/6 px-5 py-8 lg:py-16">
          <h2 className="text-3xl font-bold md:text-4xl lg:text-6xl">Escribinos</h2>
        </div>
      </div>
      <div className='flex-1 px-6 py-4'>
        <p className="text-lg mx-auto md:text-xl lg:text-2xl mb-6">
          El primer paso para transformar la convivencia escolar es una conversación. <br /> Dejanos tu mensaje y te respondemos pronto.
        </p>
        <a
          href={mailtoEmail}
          onClick={onClikEmail}
          className="skew-custom bg-fara-red active:bg-fara-gold hover:bg-fara-gold focus:bg-fara-gold grid min-h-12 place-items-center pr-8 pl-6 text-white uppercase transition-colors duration-300 ease-in-out hover:cursor-pointer font-bold"
        >
          Enviar
        </a>
      </div>
    </section>
  )
}
