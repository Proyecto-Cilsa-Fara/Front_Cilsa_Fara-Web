import { BoneteIcon, ManoIcon, TuercaIcon } from "../assets/icons"

export function ServiciosSection() {
    return (
        <div className="bg-teal-500 py-5 text-white md:px-20">
            <div className="grid gap-8 p-5 text-center md:grid-cols-3">
                <div className="flex h-full flex-col items-center gap-5">
                    <img src={ManoIcon} className="h-37 p-10" alt="Icono mano donar" />
                    <h3 className="text-xl font-bold drop-shadow-[0.7px_0.7px_0.7px_black]">VOLUNTARIADO</h3>

                    <p className="text-md flex-grow font-bold drop-shadow-[0.7px_0.7px_0.7px_black]">
                        Capacitamos a profesionales y empleados estatales en resolución de conflictos y trabajo en
                        contextos de encierro.
                    </p>
                    <button className="skew-custom bg-white p-1 transition-all hover:bg-black hover:text-black">
                        <div className="skew-custom text-md bg-teal-500 px-6 py-1.5 font-bold drop-shadow-[0.7px_0.7px_0.7px_black]">
                            <span className="drop-shadow-[0.7px_0.7px_0.7px_black]">VER MÁS</span>
                        </div>
                    </button>
                </div>
                <div className="flex h-full flex-col items-center gap-5">
                    <img src={BoneteIcon} className="h-37 p-10" alt="Icono gorro de graduacion" />
                    <h3 className="text-xl font-bold drop-shadow-[0.7px_0.7px_0.7px_black]">CAPACITACIONES</h3>
                    <p className="text-md flex-grow font-bold drop-shadow-[0.7px_0.7px_0.7px_black]">
                        Asesoramos a organismos y organizaciones en la gestión de conflictos con un enfoque integral y
                        restaurativo.
                    </p>
                    <button className="skew-custom bg-white p-1 transition-all hover:bg-black hover:text-black">
                        <div className="skew-custom text-md bg-teal-500 px-6 py-1.5 font-bold drop-shadow-[0.7px_0.7px_0.7px_black]">
                            <span className="drop-shadow-[0.7px_0.7px_0.7px_black]">PARTICIPA</span>
                        </div>
                    </button>
                </div>
                <div className="flex h-full flex-col items-center gap-5">
                    <img src={TuercaIcon} className="h-37 p-10" alt="Icono servicios" />
                    <h3 className="text-xl font-bold drop-shadow-[0.7px_0.7px_0.7px_black]">SERVICIOS</h3>
                    <p className="text-md flex-grow font-bold drop-shadow-[0.7px_0.7px_0.7px_black]">
                        Brindamos pasantías y voluntariados en las áreas de acción restaurativa de Fara.
                    </p>
                    <button className="skew-custom bg-white p-1 transition-all hover:bg-black hover:text-black">
                        <div className="skew-custom text-md bg-teal-500 px-6 py-1.5 font-bold drop-shadow-[0.7px_0.7px_0.7px_black]">
                            <span className="drop-shadow-[0.7px_0.7px_0.7px_black]">CONSULTAR</span>
                        </div>
                    </button>
                </div>
            </div>
        </div>
    )
}
