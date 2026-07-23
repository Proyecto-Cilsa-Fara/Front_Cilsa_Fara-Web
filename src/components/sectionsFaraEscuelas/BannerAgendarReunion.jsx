import React from 'react'
import { useEmailContact } from '../../hooks/useEmailContact';

export function BannerAgendarReunion() {

  const { onClikEmail, mailtoEmail } = useEmailContact("outlook", "Solicitud de asesoramiento para escuelas");

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-semibold mb-4 leading-tight">
          Educar para convivir. Dialogar para transformar.
        </h2>
        <p className="text-base sm:text-lg mb-8">
          Conversemos sobre cómo implementar prácticas restaurativas en tu institución educativa.
        </p>
        <a
          href={mailtoEmail}
          onClick={onClikEmail}
          className="skew-custom bg-fara-red active:bg-fara-gold hover:bg-fara-gold focus:bg-fara-gold grid min-h-12 place-items-center pr-8 pl-6 text-white uppercase transition-colors duration-300 ease-in-out hover:cursor-pointer font-bold"
        >
          Agendar una reunión
        </a>
      </div>
    </section>
  )
}
