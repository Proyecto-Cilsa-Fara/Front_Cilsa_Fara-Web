import React from 'react'
import { Link } from 'react-router'
import { useEmailContact } from '../../hooks/useEmailContact'

export function BannerAgenda() {

  const { onClikEmail, mailtoEmail } = useEmailContact("outlook", "Solicitud de asesoramiento para empresas");

  return (
    <section className="py-20 px-16">
      <div className="flex flex-col items-center justify-center gap-4 border border-fara-blue py-12 px-16">
        <h2 className="text-xl font-bold md:text-3xl lg:text-5xl mb-5 text-center">
          Transformemos los conflictos en crecimiento
        </h2>
        <p className="text-lg text-center max-w-4xl md:text-xl lg:text-2xl">
          Descubra cómo FARA puede acompañar a su organización en la construcción de equipos más saludables, colaborativos y resilientes.
        </p>
        <div className="flex gap-4">
          <a
            href={mailtoEmail}
            onClick={onClikEmail}
            className="skew-custom text-white bg-fara-blue hover:bg-fara-gold active:bg-fara-gold focus:bg-fara-gold text-center px-4 py-3 uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer font-bold"
          >
            Agendar Reunion
          </a>
        </div>
      </div>
    </section>
  )
}
