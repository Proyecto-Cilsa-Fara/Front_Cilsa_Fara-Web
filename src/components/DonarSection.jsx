import { Link } from "react-router"
import DonacionesImage from "../assets/donaciones-a-bahia-blanca.webp"

export function DonarSection() {
    return (
        <section className="relative flex w-full items-center justify-center bg-gray-100">
            {/* Imagen de fondo */}
            <div
                className="absolute inset-0 bg-cover opacity-15"
                aria-hidden="true"
                style={{
                    backgroundImage: `url(${DonacionesImage})`,
                }}
            ></div>

            {/* Contenido */}
            <div className="flex w-full items-center md:flex-row">
                {/* Botón de donar */}
                <div className="group relative flex w-full items-center justify-center md:w-1/2">
                    <div className="skew-custom absolute inset-0 -z-10 m-auto h-1/6 w-12 bg-[#E3A647] transition-transform duration-700 group-hover:z-10 group-hover:-translate-x-11 group-hover:-translate-y-16"></div>
                    <div className="skew-custom absolute inset-0 -z-10 m-auto h-1/7 w-20 bg-[#52A6C7] transition-transform duration-700 group-hover:z-10 group-hover:translate-x-24 group-hover:-translate-y-14"></div>
                    <div className="skew-custom absolute inset-0 -z-10 m-auto h-1/4 w-13 bg-[#A82428] transition-transform duration-700 group-hover:z-10 group-hover:-translate-x-20 group-hover:translate-y-17"></div>

                    <Link
                        className="skew-custom z-20 m-5 bg-black px-6 py-2 text-xl font-bold text-white shadow-md transition-colors duration-700 hover:bg-[#B9CE48] md:px-10 md:py-3 md:text-3xl"
                        to="/donar"
                        aria-label="Donar"
                    >
                        <span className="drop-shadow-[0.7px_0.7px_0.7px_black]">DONAR</span>
                    </Link>
                </div>

                {/* Texto de ayuda */}
                <div className="relative flex h-full w-full flex-col items-end justify-center py-20 text-right sm:py-40 md:w-4/5 md:items-center md:justify-center md:py-60">
                    <div className="poligonoDonar absolute inset-0 z-[1] h-full w-full bg-[#B9CE48] opacity-75"></div>
                    <div className="poligonoDonar2 absolute inset-0 z-[2] h-full w-full bg-[#B9CE48] opacity-75"></div>
                    {/* Texto al frente */}
                    <div className="w-full max-w-[90%] px-4 text-right md:max-w-2xl md:px-20">
                        <h2 className="relative z-[3] text-base font-bold md:text-4xl">¡NECESITAMOS TU AYUDA!</h2>
                        <p className="relative z-[3] mt-2 text-xs md:p-2 md:text-xl">
                            La desigualdad nos rodea. Tu aporte a FARA ayuda a construir una sociedad más justa para
                            todos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
