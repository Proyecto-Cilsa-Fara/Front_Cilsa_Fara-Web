import { Link } from "react-router";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";

export function GeneroHero() {

  const TITLE = "Genero y Diversidad"
  const DESCRIPTION =
    "Acompañamos, formamos y transformamos desde una mirada que reconoce el daño, cuida a las personas y exige responsabilidad."
  useDocumentMeta(TITLE, DESCRIPTION);

  return (
    <section className="w-full">
      <div className="bg-genero-image relative flex h-dvh w-full flex-col items-center justify-center gap-4 md:h-80 lg:h-150 xl:h-170">
        <div className="flex flex-col h-full w-full items-center justify-center gap-7 bg-black/50">
          <h1 className="text-white text-xl font-bold sm:text-2xl md:text-4xl xl:text-6xl">{TITLE}</h1>
          <p className="text-white text-base md:text-lg xl:text-xl text-center text-wrap max-w-3xl">{DESCRIPTION}</p>
          <div className="flex flex-col gap-4 md:flex-row">
            <Link
              to="/capacitaciones"
              className="skew-custom bg-fara-blue hover:bg-fara-cyan active:bg-fara-cyan focus:bg-fara-cyan text-center px-4 py-3 text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer font-bold"
              aria-label="Solicitar Acompañamiento"
            >
              Solicitar Acompañamiento
            </Link>
            <Link
              to="/capacitaciones"
              className="skew-custom bg-fara-red active:bg-fara-strong-red hover:bg-fara-strong-red focus:bg-fara-strong-red text-center px-4 py-3 text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer font-bold"
              aria-label="Pedir Capacitación"
            >
              Pedir Capacitación
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
