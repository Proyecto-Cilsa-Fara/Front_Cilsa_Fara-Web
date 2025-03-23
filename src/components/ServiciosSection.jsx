import { BoneteIcon, ManoIcon, TuercaIcon } from "../assets/icons"
import { Link } from "react-router"

export function ServiciosSection() {
    return (
        <div className="bg-fara-teal grid min-h-screen place-items-center px-5 py-16 text-white md:px-20">
            <div className="grid gap-8 text-center md:grid-cols-3">
                <div className="flex h-full flex-col items-center gap-5">
                    <img src={BoneteIcon} className="h-37 p-10 lg:h-48" alt="Icono de un gorro de graduación" />
                    <h3 className="text-outline-sm text-2xl font-bold lg:text-3xl">CAPACITACIONES</h3>
                    <p className="text-md text-outline-sm flex-grow font-bold">
                        Capacitamos a profesionales y empleados estatales en resolución de conflictos y trabajo en
                        contextos de encierro.
                    </p>
                    <Link
                        to="/capacitaciones"
                        className="after:bg-fara-teal grid min-h-14 min-w-44 place-items-center bg-white text-lg font-bold [clip-path:polygon(0_15%,100%_0,100%_85%,0_100%)] after:absolute after:min-h-12 after:min-w-42 after:transition-colors after:duration-300 after:ease-in-out after:[clip-path:polygon(0_17%,100%_0,100%_83%,0_100%)] hover:cursor-pointer hover:after:bg-black focus:after:bg-black focus:after:outline-0 active:after:bg-black"
                        aria-label="Ver más sobre capacitaciones"
                    >
                        <span className="text-outline-sm z-1 uppercase">Ver más</span>
                    </Link>
                </div>
                <div className="flex h-full flex-col items-center gap-5">
                    <img src={TuercaIcon} className="h-37 p-10 lg:h-48" alt="Icono ilustrando servicios" />
                    <h3 className="text-outline-sm text-2xl font-bold lg:text-3xl">SERVICIOS</h3>
                    <p className="text-md text-outline-sm flex-grow font-bold">
                        Asesoramos a organismos y organizaciones en la gestión de conflictos con un enfoque integral y
                        restaurativo.
                    </p>
                    <Link
                        to="/asesoramiento"
                        className="after:bg-fara-teal grid min-h-14 min-w-44 place-items-center bg-white text-lg font-bold [clip-path:polygon(0_15%,100%_0,100%_85%,0_100%)] after:absolute after:min-h-12 after:min-w-42 after:transition-colors after:duration-300 after:ease-in-out after:[clip-path:polygon(0_17%,100%_0,100%_83%,0_100%)] hover:cursor-pointer hover:after:bg-black focus:after:bg-black focus:after:outline-0 active:after:bg-black"
                        aria-label="Consultar sobre servicios"
                    >
                        <span className="text-outline-sm z-1 uppercase">Consultar</span>
                    </Link>
                </div>
                <div className="flex h-full flex-col items-center gap-5">
                    <img
                        src={ManoIcon}
                        className="h-37 p-10 lg:h-48"
                        alt="Icono ilustrando una mano ofreciendo ayuda"
                    />
                    <h3 className="text-outline-sm text-2xl font-bold lg:text-3xl">VOLUNTARIADO</h3>
                    <p className="text-md text-outline-sm flex-grow font-bold">
                        Brindamos pasantías y voluntariados en las áreas de acción restaurativa de Fara.
                    </p>
                    <Link
                        to="/participa"
                        className="after:bg-fara-teal grid min-h-14 min-w-44 place-items-center bg-white text-lg font-bold [clip-path:polygon(0_15%,100%_0,100%_85%,0_100%)] after:absolute after:min-h-12 after:min-w-42 after:transition-colors after:duration-300 after:ease-in-out after:[clip-path:polygon(0_17%,100%_0,100%_83%,0_100%)] hover:cursor-pointer hover:after:bg-black focus:after:bg-black focus:after:outline-0 active:after:bg-black"
                        aria-label="Participar en voluntariado"
                    >
                        <span className="text-outline-sm z-1 uppercase">Participá</span>
                    </Link>
                </div>
            </div>
        </div>
    )
}
