import { Link } from "react-router";
import { BoneteIcon } from "../../assets/icons";

export function Formacion() {
  return (
    <section className="flex flex-col justify-center items-center w-full gap-10 py-12 px-10 md:py-20 md:px-32 md:gap-16">
      <div className="flex flex-col justify-between items-start w-full gap-3">
        <div className="px-6 py-8 bg-fara-red text-white skew-custom">
          <h2 className="text-xl font-bold md:text-2xl lg:text-5xl mb-5">
            Formación y Capacitaciones
          </h2>
          <p className="text-lg max-w-3xl md:text-xl lg:text-2xl">
            Ofrecemos módulos de formación especializada para profesionales e instituciones.
          </p>
        </div>
        <Link
          to="/capacitaciones"
          className="skew-custom bg-fara-gold hover:bg-fara-lime active:bg-fara-lime focus:bg-fara-lime text-center px-4 py-3 uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer font-bold"
        >
          Pedir una capacitación
        </Link>
      </div>

      <div className="grid gap-6 lg:grid-cols-2 font-bold w-full text-fara-gray">
        <div className="flex flex-col gap-6">
          <span className="flex gap-2 items-center">
            <img className="w-6 h-6" src={BoneteIcon} alt="icono de un bonete" />
            <p className="text-base md:text-xl">Introducción a la Justicia Restaurativa</p>
          </span>
          <span className="flex gap-2 items-center">
            <img className="w-6 h-6" src={BoneteIcon} alt="icono de un bonete" />
            <p className="text-base md:text-xl">Facilitación de Prácticas Restaurativas</p>
          </span>
          <span className="flex gap-2 items-center">
            <img className="w-6 h-6" src={BoneteIcon} alt="icono de un bonete" />
            <p className="text-base md:text-xl">Herramientas Restaurativas para Organizaciones</p>
          </span>
          <span className="flex gap-2 items-center">
            <img className="w-6 h-6" src={BoneteIcon} alt="icono de un bonete" />
            <p className="text-base md:text-xl">Atención a Víctimas con Enfoque de Trauma</p>
          </span>
          <span className="flex gap-2 items-center">
            <img className="w-6 h-6" src={BoneteIcon} alt="icono de un bonete" />
            <p className="text-base md:text-xl">Diseño de Programas Restaurativos</p>
          </span>
        </div>
        <div className="flex flex-col gap-6">
          <span className="flex gap-2 items-center">
            <img className="w-6 h-6" src={BoneteIcon} alt="icono de un bonete" />
            <p className="text-base md:text-xl">Justicia Restaurativa y Perspectiva de Género</p>
          </span>
          <span className="flex gap-2 items-center">
            <img className="w-6 h-6" src={BoneteIcon} alt="icono de un bonete" />
            <p className="text-base md:text-xl">Abordaje de las Violencias en el Ámbito Educativo</p>
          </span>
          <span className="flex gap-2 items-center">
            <img className="w-6 h-6" src={BoneteIcon} alt="icono de un bonete" />
            <p className="text-base md:text-xl">Evaluación de Riesgo y Seguridad</p>
          </span>
          <span className="flex gap-2 items-center">
            <img className="w-6 h-6" src={BoneteIcon} alt="icono de un bonete" />
            <p className="text-base md:text-xl">Trabajo con Ofensores</p>
          </span>
        </div>
      </div>
    </section>
  )
}
