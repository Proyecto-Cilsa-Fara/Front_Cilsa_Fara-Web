import { Link } from "react-router";

export function ApoyoFara() {
  return (
    <section className="py-20 px-16">
      <div className="flex flex-col items-center justify-center gap-4 bg-fara-lime/70 p-8">
        <h2 className="text-xl font-bold md:text-3xl lg:text-5xl mb-5 text-center uppercase">
          ¡Sumate a la transformación!
        </h2>
        <p className="text-lg text-center max-w-4xl md:text-xl lg:text-2xl">
          Tu apoyo sostiene espacios de escucha, formación y reparación para quienes más lo necesitan.
        </p>
        <div className="flex gap-4">
          <Link
            to="/capacitaciones"
            className="skew-custom bg-fara-gold hover:bg-fara-blue active:bg-fara-blue focus:bg-fara-blue text-center px-4 py-3 uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer hover:text-white font-bold"
          >
            Pedir una capacitación
          </Link>
        </div>
      </div>
    </section>
  )
}