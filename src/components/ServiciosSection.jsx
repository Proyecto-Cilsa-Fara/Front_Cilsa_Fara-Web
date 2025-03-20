import { BoneteIcon, ManoIcon, TuercaIcon } from "../assets/icons"
import { Link } from "react-router"

export function ServiciosSection() {
    return (
        <div className="bg-fara-teal grid min-h-screen place-items-center px-5 py-16 text-white md:px-20">
            <div className="grid gap-8 text-center md:grid-cols-3">
                <div className="flex h-full flex-col items-center gap-5">
                    <img src={BoneteIcon} className="h-37 p-10 lg:h-48" alt="Icono gorro de graduacion" />
                    <h3 className="text-outline-sm text-2xl font-bold lg:text-3xl">CAPACITACIONES</h3>
                    <p className="text-md text-outline-sm flex-grow font-bold">
                        Capacitamos a profesionales y empleados estatales en resolución de conflictos y trabajo en
                        contextos de encierro.
                    </p>
                    <Link
                        to="/capacitaciones"
                        className="group skew-custom bg-white p-1 hover:cursor-pointer"
                        aria-label="Ver más sobre capacitaciones"
                    >
                        <div className="skew-custom text-md bg-fara-teal text-outline-sm px-6 py-1.5 font-bold transition-colors duration-300 ease-in-out group-hover:bg-black group-focus:bg-black">
                            <span className="text-outline-sm">VER MÁS</span>
                        </div>
                    </Link>
                </div>
                <div className="flex h-full flex-col items-center gap-5">
                    <img src={TuercaIcon} className="h-37 p-10 lg:h-48" alt="Icono servicios" />
                    <h3 className="text-outline-sm text-2xl font-bold lg:text-3xl">SERVICIOS</h3>
                    <p className="text-md text-outline-sm flex-grow font-bold">
                        Asesoramos a organismos y organizaciones en la gestión de conflictos con un enfoque integral y
                        restaurativo.
                    </p>
                    <Link
                        to="/asesoramiento"
                        className="group skew-custom bg-white p-1 hover:cursor-pointer"
                        aria-label="Consultar sobre servicios"
                    >
                        <div className="skew-custom text-md bg-fara-teal text-outline-sm px-6 py-1.5 font-bold transition-colors duration-300 ease-in-out group-hover:bg-black group-focus:bg-black">
                            <span className="text-outline-sm group-hover:text-white">CONSULTAR</span>
                        </div>
                    </Link>
                </div>
                <div className="flex h-full flex-col items-center gap-5">
                    <img src={ManoIcon} className="h-37 p-10 lg:h-48" alt="Icono mano donar" />
                    <h3 className="text-outline-sm text-2xl font-bold lg:text-3xl">VOLUNTARIADO</h3>
                    <p className="text-md text-outline-sm flex-grow font-bold">
                        Brindamos pasantías y voluntariados en las áreas de acción restaurativa de Fara.
                    </p>
                    <Link
                        to="/participa"
                        className="group skew-custom bg-white p-1 hover:cursor-pointer"
                        aria-label="Participar en voluntariado"
                    >
                        <div className="skew-custom text-md bg-fara-teal text-outline-sm px-6 py-1.5 font-bold transition-colors duration-300 ease-in-out group-hover:bg-black group-focus:bg-black">
                            <span className="text-outline-sm">PARTICIPA</span>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}
