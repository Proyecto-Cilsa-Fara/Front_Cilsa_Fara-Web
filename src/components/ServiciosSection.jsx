import { BoneteIcon, ManoIcon, TuercaIcon } from "../assets/icons"
import { Link } from "react-router"

export function ServiciosSection() {
    return (
        <div className="bg-fara-teal grid min-h-screen place-items-center px-5 py-16 text-white md:px-20">
            <div className="grid gap-8 text-center md:grid-cols-3">
                <div className="flex h-full flex-col items-center justify-evenly gap-4 bg-white p-8 [clip-path:polygon(0_5%,100%_0,100%_95%,0_100%)]">
                    <img src={BoneteIcon} className="h-37 p-10 lg:h-48" alt="Icono de un gorro de graduación" />
                    <h3 className="text-2xl font-bold text-black lg:text-3xl">CAPACITACIONES</h3>
                    <p className="flex-grow text-lg text-black">
                        Capacitamos a profesionales y empleados estatales en resolución de conflictos y trabajo en
                        contextos de encierro.
                    </p>
                    <Link
                        to="/capacitaciones"
                        className="group bg-fara-teal border-fara-teal grid min-h-12 min-w-44 place-items-center border-4 text-lg font-bold transition-colors duration-300 ease-in-out hover:bg-white focus:bg-white active:bg-white"
                        aria-label="Ver más sobre capacitaciones"
                    >
                        <span className="text-white uppercase transition-colors duration-300 ease-in-out group-hover:text-black group-focus:text-black group-active:text-black">
                            Ver más
                        </span>
                    </Link>
                </div>
                <div className="flex h-full flex-col items-center justify-evenly gap-4 bg-white p-8 [clip-path:polygon(0_5%,100%_0,100%_95%,0_100%)]">
                    <img src={TuercaIcon} className="h-37 p-10 lg:h-48" alt="Icono ilustrando servicios" />
                    <h3 className="text-2xl font-bold text-black lg:text-3xl">SERVICIOS</h3>
                    <p className="flex-grow text-lg text-black">
                        Asesoramos a organismos y organizaciones en la gestión de conflictos con un enfoque integral y
                        restaurativo.
                    </p>
                    <Link
                        to="/asesoramiento"
                        className="group bg-fara-teal border-fara-teal grid min-h-12 min-w-44 place-items-center border-4 text-lg font-bold transition-colors duration-300 ease-in-out hover:bg-white focus:bg-white active:bg-white"
                        aria-label="Consultar sobre servicios"
                    >
                        <span className="text-white uppercase transition-colors duration-300 ease-in-out group-hover:text-black group-focus:text-black group-active:text-black">
                            Consultar
                        </span>
                    </Link>
                </div>
                <div className="flex h-full flex-col items-center justify-evenly gap-4 bg-white p-8 [clip-path:polygon(0_5%,100%_0,100%_95%,0_100%)]">
                    <img
                        src={ManoIcon}
                        className="h-37 p-10 lg:h-48"
                        alt="Icono ilustrando una mano ofreciendo ayuda"
                    />
                    <h3 className="text-2xl font-bold text-black lg:text-3xl">VOLUNTARIADO</h3>
                    <p className="flex-grow text-lg text-black">
                        Brindamos pasantías y voluntariados en las áreas de acción restaurativa de Fara.
                    </p>
                    <Link
                        to="/participa"
                        className="group bg-fara-teal border-fara-teal grid min-h-12 min-w-44 place-items-center border-4 text-lg font-bold transition-colors duration-300 ease-in-out hover:bg-white focus:bg-white active:bg-white"
                        aria-label="Participar en voluntariado"
                    >
                        <span className="text-white uppercase transition-colors duration-300 ease-in-out group-hover:text-black group-focus:text-black group-active:text-black">
                            Participá
                        </span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
