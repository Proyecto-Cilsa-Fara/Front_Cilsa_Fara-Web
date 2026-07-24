import React from 'react'

export function Principios() {
  return (
    <section id='metodologia' className="flex flex-col justify-center w-full gap-8 py-12 md:py-20 md:gap-16 lg:items-center">
      <div className="flex flex-col items-end w-full">
        <div className="bg-fara-red skew-custom-inverse w-5/6 text-center text-white px-5 py-12">
          <h2 className="text-xl mb-5 font-bold md:text-2xl lg:text-5xl">Nuestros cinco principios</h2>
          <p className="text-lg text-center max-w-3xl mx-auto md:text-xl lg:text-2xl">
            No aplicamos recetas. Aplicamos principios humanos inquebrantables.
          </p>
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-x-16 gap-y-12 max-w-4xl">
        <div className="flex flex-col items-center w-48 gap-2 text-center">
          <div className="w-16 h-16 rounded-full bg-fara-lime/70 mb-3 text-black font-bold p-4 text-2xl">
            1
          </div>
          <h3 className="font-bold">
            Diálogo
          </h3>
          <p className="text-base leading-snug">
            Generamos espacios seguros para la escucha activa y la comprensión de las perspectivas de todas las partes.
          </p>
        </div>

        <div className="flex flex-col items-center w-48 gap-2 text-center">
          <div className="w-16 h-16 rounded-full bg-fara-lime/70 mb-3 text-black font-bold p-4 text-2xl">
            2
          </div>
          <h3 className="font-bold">
            Responsabilidad
          </h3>
          <p className="text-base leading-snug">
            Fomentamos que cada individuo asuma su rol en el conflicto y su impacto en los demás.
          </p>
        </div>

        <div className="flex flex-col items-center w-48 gap-2 text-center">
          <div className="w-16 h-16 rounded-full bg-fara-lime/70 mb-3 text-black font-bold p-4 text-2xl">
            3
          </div>
          <h3 className="font-bold">
            Reparación
          </h3>
          <p className="text-base leading-snug">
            Buscamos soluciones que subsanen el daño causado y permitan seguir adelante de manera constructiva.
          </p>
        </div>

        <div className="flex flex-col items-center w-48 gap-2 text-center">
          <div className="w-16 h-16 rounded-full bg-fara-lime/70 mb-3 text-black font-bold p-4 text-2xl">
            4
          </div>
          <h3 className="font-bold">
            Comunidad
          </h3>
          <p className="text-base leading-snug">
            Fortalecemos los vínculos grupales para crear una red de soporte organizacional sólida.
          </p>
        </div>

        <div className="flex flex-col items-center w-48 gap-2 text-center">
          <div className="w-16 h-16 rounded-full bg-fara-lime/70 mb-3 text-black font-bold p-4 text-2xl">
            5
          </div>
          <h3 className="font-bold">
            Derechos Humanos
          </h3>
          <p className="text-base leading-snug">
            Garantizamos que todo el proceso se rija por la dignidad humana y el marco legal vigente.
          </p>
        </div>
      </div>
    </section>
  )
}
