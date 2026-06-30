import LogoFara from "../../assets/LOGO-FARA-4k.webp";

export function FaraDescripcion() {
  return (
    <section className="flex flex-col w-full gap-16 py-12 px-10 md:py-20 md:px-32">
      <div className="flex flex-col items-center gap-6 lg:flex-row">
        <div className="md:flex-2">
          <h2 className="text-xl font-bold md:text-2xl lg:text-5xl mb-5">
            ¿Qué es FARA Género?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl lg:max-w-4/5">
            Somos una organización que promueve la justicia restaurativa en situaciones de violencia por motivos de género. Entendemos que el sistema punitivo tradicional muchas veces no logra dar respuestas integrales a las necesidades de quienes sufrieron daño ni fomentar la asunción de responsabilidad real en quienes lo causaron.
          </p>
          <p className="mt-4 text-lg md:text-xl lg:text-2xl lg:max-w-4/5">
            <strong>Atención: La justicia restaurativa en violencia de género no es reconciliación obligatoria ni mediación.</strong> Es un proceso voluntario, centrado en la escucha activa, el cuidado y una rigurosa evaluación de riesgos para garantizar la seguridad de todas las personas involucradas.
          </p>
        </div>
        <div className="md:flex-1">
          <img
            src={LogoFara}
            alt="Logo de FARA Género y Diversidad, con el isotipo y el nombre de la organización"
            className="max-w-full h-auto rounded-lg aspect-auto"
          />
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 text-white">
        <span className="bg-fara-blue px-3 py-5 text-base shadow-md transition-colors duration-300 text-center md:py-9 md:text-2xl uppercase">
          Escucha Activa
        </span>
        <span className="bg-fara-blue px-3 py-5 text-base shadow-md transition-colors duration-300 text-center md:py-9 md:text-2xl uppercase">
          Protección
        </span>
        <span className="bg-fara-blue px-3 py-5 text-base shadow-md transition-colors duration-300 text-center md:py-9 md:text-2xl uppercase">
          Reparación
        </span>
        <span className="bg-fara-blue px-3 py-5 text-base shadow-md transition-colors duration-300 text-center md:py-9 md:text-2xl uppercase">
          Transformación
        </span>
      </div>
    </section>
  )
}
