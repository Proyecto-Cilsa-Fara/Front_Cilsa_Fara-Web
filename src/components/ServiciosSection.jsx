import { BoneteIcon, ManoIcon, TuercaIcon, CorrespondentIcon } from "../assets/icons"
import { Link } from "react-router"

export function ServiciosSection() {
    return (
        <div className="bg-fara-teal grid min-h-screen place-items-center px-5 py-16 text-white md:px-20">
            <div className="grid gap-8 text-center md:grid-cols-4">
                <div className="flex h-full flex-col items-center justify-evenly gap-8 bg-white px-10 pt-8 pb-12 [clip-path:polygon(0_5%,100%_0,100%_95%,0_100%)]">
                    <img src={BoneteIcon} className="h-37 p-10 lg:h-48" alt="Icono de un gorro de graduación" />
                    <h3 className="text-2xl font-bold text-black lg:text-3xl">CAPACITACIONES</h3>
                    <p className="flex-grow px-4 text-xl text-black">
                        Capacitamos a profesionales y empleados estatales en resolución de conflictos y trabajo en
                        contextos de encierro.
                    </p>
                    <Link
                        to="/capacitaciones"
                        className="group hover:bg-fara-teal hover:border-fara-teal focus:bg-fara-teal focus:border-fara-teal active:bg-fara-teal active:border-fara-teal grid min-h-12 min-w-44 place-items-center border-4 border-[#555555] bg-[#555555] text-lg font-bold transition-colors duration-300 ease-in-out"
                        aria-label="Ver más sobre capacitaciones"
                    >
                        <span className="text-white uppercase transition-colors duration-300 ease-in-out">Ver más</span>
                    </Link>
                </div>
                <div className="flex h-full flex-col items-center justify-evenly gap-8 bg-white px-10 pt-8 pb-12 [clip-path:polygon(0_5%,100%_0,100%_95%,0_100%)]">
                    <img src={TuercaIcon} className="h-37 p-10 lg:h-48" alt="Icono ilustrando servicios" />
                    <h3 className="text-2xl font-bold text-black lg:text-3xl">SERVICIOS</h3>
                    <p className="flex-grow px-4 text-xl text-black">
                        Asesoramos a organismos y organizaciones en la gestión de conflictos con un enfoque integral y
                        restaurativo.
                    </p>
                    <Link
                        to="/asesoramiento"
                        className="group hover:bg-fara-teal hover:border-fara-teal focus:bg-fara-teal focus:border-fara-teal active:bg-fara-teal active:border-fara-teal grid min-h-12 min-w-44 place-items-center border-4 border-[#555555] bg-[#555555] text-lg font-bold transition-colors duration-300 ease-in-out"
                        aria-label="Consultar sobre servicios"
                    >
                        <span className="text-white uppercase transition-colors duration-300 ease-in-out">
                            Consultar
                        </span>
                    </Link>
                </div>
                <div className="flex h-full flex-col items-center justify-evenly gap-8 bg-white px-10 pt-8 pb-12 [clip-path:polygon(0_5%,100%_0,100%_95%,0_100%)]">
                    <img
                        src={ManoIcon}
                        className="h-37 p-10 lg:h-48"
                        alt="Icono ilustrando una mano ofreciendo ayuda"
                    />
                    <h3 className="text-2xl font-bold text-black lg:text-3xl">VOLUNTARIADO</h3>
                    <p className="flex-grow px-4 text-xl text-black">
                        Brindamos pasantías y voluntariados en las áreas de acción restaurativa de FARA.
                    </p>
                    <Link
                        to="/participa"
                        className="group hover:bg-fara-teal hover:border-fara-teal focus:bg-fara-teal focus:border-fara-teal active:bg-fara-teal active:border-fara-teal grid min-h-12 min-w-44 place-items-center border-4 border-[#555555] bg-[#555555] text-lg font-bold transition-colors duration-300 ease-in-out"
                        aria-label="Participar en voluntariado"
                    >
                        <span className="text-white uppercase transition-colors duration-300 ease-in-out">
                            Participá
                        </span>
                    </Link>
                </div>
                <div className="flex h-full flex-col items-center justify-evenly gap-8 bg-white px-10 pt-8 pb-12 [clip-path:polygon(0_5%,100%_0,100%_95%,0_100%)]">
                    <img
                        src={CorrespondentIcon}
                        className="h-37 p-10 lg:h-48"
                        alt="Icono ilustrando una mano ofreciendo ayuda"
                    />
                    <h3 className="text-2xl font-bold text-black lg:text-3xl">CORRESPONSALES</h3>
                    <p className="flex-grow px-4 text-xl text-black">
                        Expertos que innovan en sus comunidades en la región iberoamericana.
                    </p>
                    <Link
                        to="/socios"
                        className="group hover:bg-fara-teal hover:border-fara-teal focus:bg-fara-teal focus:border-fara-teal active:bg-fara-teal active:border-fara-teal grid min-h-12 min-w-44 place-items-center border-4 border-[#555555] bg-[#555555] text-lg font-bold transition-colors duration-300 ease-in-out"
                        aria-label="Participar en voluntariado"
                    >
                        <span className="text-white uppercase transition-colors duration-300 ease-in-out">Ver más</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
