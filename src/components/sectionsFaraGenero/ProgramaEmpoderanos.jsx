import React from 'react'
import { Link } from "react-router";

export function ProgramaEmpoderanos() {
  return (
    <section className="flex flex-col justify-center items-center w-full gap-16 py-12 px-10 md:py-20 md:px-32">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold md:text-2xl lg:text-5xl mb-5 text-center">
          Programa "Empoderarnos para Transformar"
        </h2>
        <p className="text-lg text-center max-w-3xl md:text-xl lg:text-2xl">
          Programa territorial destinado a mujeres y diversidades, orientado al fortalecimiento personal, comunitario y jurídico desde una perspectiva restaurativa.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2">
        <span className="bg-fara-lime/30 px-4 py-5 text-base shadow-md transition-colors duration-300 text-center md:px-7 md:py-8 md:text-xl font-semibold">
          Derechos de acción
        </span>
        <span className="bg-fara-lime/30 px-4 py-5 text-base shadow-md transition-colors duration-300 text-center md:px-7 md:py-8 md:text-xl font-semibold">
          Redes de cuidado
        </span>
        <span className="bg-fara-lime/30 px-4 py-5 text-base shadow-md transition-colors duration-300 text-center md:px-7 md:py-8 md:text-xl font-semibold">
          Salud mental integral
        </span>
        <span className="bg-fara-lime/30 px-4 py-5 text-base shadow-md transition-colors duration-300 text-center md:px-7 md:py-8 md:text-xl font-semibold">
          Autonomía económica
        </span>
        <span className="bg-fara-lime/30 px-4 py-5 text-base shadow-md transition-colors duration-300 text-center md:px-7 md:py-8 md:text-xl font-semibold">
          Acceso a la justicia
        </span>
        <span className="bg-fara-lime/30 px-4 py-5 text-base shadow-md transition-colors duration-300 text-center md:px-7 md:py-8 md:text-xl font-semibold">
          Participación ciudadana
        </span>
      </div>

      <Link
        to="/capacitaciones"
        className="skew-custom bg-fara-blue hover:bg-fara-cyan active:bg-fara-cyan focus:bg-fara-cyan text-center px-4 py-3 text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer font-bold"
      >
        Conocer el programa
      </Link>
    </section>
  )
}
