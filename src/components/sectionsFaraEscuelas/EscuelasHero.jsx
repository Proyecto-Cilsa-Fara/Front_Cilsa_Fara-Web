import React from 'react'
import { useDocumentMeta } from '../../hooks/useDocumentMeta';
import { Link } from 'react-router';
import { useEmailContact } from '../../hooks/useEmailContact';

export function EscuelasHero() {

  const TITLE = "Construyendo comunidades educativas más seguras, inclusivas y restaurativas"
  const DESCRIPTION =
    "La escuela construye ciudadanía y convivencia. Acompañamos a las instituciones en la prevención y transformación de conflictos con prácticas restaurativas."
  useDocumentMeta(TITLE, DESCRIPTION);

  const { onClikEmail, mailtoEmail } = useEmailContact("outlook", "Solicitud de asesoramiento para escuelas");

  return (
    <section className="w-full">
      <div className="bg-genero-image relative flex h-dvh w-full flex-col items-center justify-center gap-4 md:h-80 lg:h-150 xl:h-170">
        <div className="flex flex-col h-full w-full items-center justify-center gap-7 bg-black/50">
          <h1 className="text-white text-xl font-bold sm:text-2xl md:text-4xl xl:text-6xl max-w-4xl text-center">{TITLE}</h1>
          <p className="text-white text-base md:text-lg xl:text-xl text-center text-wrap max-w-3xl">{DESCRIPTION}</p>
          <div className="flex flex-col gap-4 md:flex-row">
            <a
              href={mailtoEmail}
              onClick={onClikEmail}
              className="skew-custom bg-fara-blue hover:bg-fara-cyan active:bg-fara-cyan focus:bg-fara-cyan text-center px-4 py-3 text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer font-bold"
              aria-label="Solicitar asesoramiento"
            >
              Solicitar asesoramiento
            </a>
            <Link
              to="/capacitaciones"
              className="skew-custom bg-fara-red active:bg-fara-strong-red hover:bg-fara-strong-red focus:bg-fara-strong-red text-center px-4 py-3 text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer font-bold"
              aria-label="Conocer nuestros programas"
            >
              Conocer nuestros programas
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
