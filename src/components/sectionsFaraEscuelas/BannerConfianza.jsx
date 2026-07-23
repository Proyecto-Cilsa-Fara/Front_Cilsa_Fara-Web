import React from 'react'
import { useEmailContact } from '../../hooks/useEmailContact';

export function BannerConfianza() {
  const { onClikEmail, mailtoEmail } = useEmailContact("outlook", "Solicitud de asesoramiento para escuelas");

  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl md:text-6xl font-bold mb-4 leading-tight">
          ¿Por qué elegir FARA?
        </h2>
        <p className="text-base sm:text-lg mb-8">
          Somos una fundación con trayectoria y un enfoque claro. La confianza se construye con resultados y presencia constante.
        </p>
        <a
          href={mailtoEmail}
          onClick={onClikEmail}
          className="skew-custom bg-fara-blue active:bg-fara-gold hover:bg-fara-gold focus:bg-fara-gold grid min-h-12 place-items-center pr-8 pl-6 text-white uppercase transition-colors duration-300 ease-in-out hover:cursor-pointer font-bold"
        >
          Contactar
        </a>
      </div>
    </section>
  )
}
