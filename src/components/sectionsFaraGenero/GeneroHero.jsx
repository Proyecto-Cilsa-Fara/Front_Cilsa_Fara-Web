import { Link } from "react-router";
import { useDocumentMeta } from "../../hooks/useDocumentMeta";

export function GeneroHero() {

  const TITLE = "Género y Diversidad"
  const DESCRIPTION =
    "Acompañamos, formamos y transformamos desde una mirada que reconoce el daño, cuida a las personas y exige responsabilidad."
  useDocumentMeta(TITLE, DESCRIPTION);

  return (
    <section className="w-full">
      <div className="bg-genero-image relative flex h-dvh w-full flex-col items-center justify-center gap-4 md:h-80 lg:h-150 xl:h-170">
        <div className="flex flex-col h-full w-full items-center justify-center gap-7 bg-black/50 text-white">
          <h1 className="px-4 text-5xl font-bold md:text-4xl xl:text-6xl max-w-4xl md:text-center">{TITLE}</h1>
          <p className="text-base text-start px-4 md:text-lg xl:text-xl md:text-center text-wrap max-w-3xl">{DESCRIPTION}</p>
          <div className="flex flex-col items-start gap-4 w-full px-4 md:flex-row md:justify-center">
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
