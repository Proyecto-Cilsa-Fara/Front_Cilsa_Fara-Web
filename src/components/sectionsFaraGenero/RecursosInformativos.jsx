import { Link } from "react-router";

export function RecursosInformativos() {
  return (
    <section className="flex flex-col justify-center items-center gap-4 py-12 px-10 md:py-20 md:px-32">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold md:text-2xl lg:text-5xl mb-5 text-center">
          Recursos Informativos
        </h2>
        <p className="text-lg text-center max-w-4xl md:text-xl lg:text-2xl">
          Puede solicitar artículos y orientación.
        </p>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div className="border-2 border-fara-blue text-fara-blue px-4 py-5 text-base shadow-md md:p-8 md:text-xl">
          <div className="flex flex-col justify-center gap-3">
            <div className="flex-2 flex flex-col justify-center gap-2">
              <h3 className="font-bold">Nombre del recurso</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, incidunt!</p>
            </div>
            <Link to={"/"} aria-label="Acceder al recurso: Nombre del recurso" className="flex items-center hover:underline">
              Acceder al recurso
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right-icon lucide-arrow-right" aria-hidden="true" focusable="false"><path d="M5 12h14" /><path d="m12 5 7 7-7 7" /></svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
