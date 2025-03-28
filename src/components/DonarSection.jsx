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
                <Link
                    to="/donar"
                    aria-label="Donar"
                    className="group relative flex w-full items-center justify-center focus:outline-0 md:w-1/2"
                >
                    <div className="skew-custom absolute inset-0 -z-10 m-auto h-1/6 w-12 bg-[#E3A647] transition-transform duration-700 group-hover:z-5 group-hover:-translate-x-11 group-hover:-translate-y-16 group-focus:z-10 group-focus:-translate-x-11 group-focus:-translate-y-16 group-active:z-10 group-active:-translate-x-11 group-active:-translate-y-16 lg:w-15 lg:group-hover:-translate-x-25 lg:group-hover:-translate-y-28"></div>

                    <div className="skew-custom absolute inset-0 -z-10 m-auto h-1/7 w-20 bg-[#52A6C7] transition-transform duration-700 group-hover:z-5 group-hover:translate-x-24 group-hover:-translate-y-14 group-focus:z-10 group-focus:translate-x-24 group-focus:-translate-y-14 group-active:z-10 group-active:translate-x-24 group-active:-translate-y-14 lg:w-30 lg:group-hover:translate-x-50 lg:group-hover:-translate-y-21"></div>

                    <div className="skew-custom absolute inset-0 -z-10 m-auto h-1/4 w-13 bg-[#A82428] transition-transform duration-700 group-hover:z-5 group-hover:-translate-x-20 group-hover:translate-y-17 group-focus:z-10 group-focus:-translate-x-20 group-focus:translate-y-17 group-active:z-10 group-active:-translate-x-20 group-active:translate-y-17 lg:w-18 lg:group-hover:-translate-x-50 lg:group-hover:translate-y-25"></div>

                    <div className="skew-custom group-hover:bg-fara-lime group-focus:bg-fara-lime group-active:bg-fara-lime z-5 m-5 grid min-h-12 min-w-36 place-items-center bg-black text-2xl font-bold text-white shadow-md transition-colors duration-300 md:px-13 md:py-3 md:text-3xl lg:px-25 lg:py-7 lg:text-5xl">
                        DONAR
                    </div>
                </Link>

                {/* Texto de ayuda */}
                <div className="relative flex h-full w-full flex-col items-end justify-center py-60 text-right md:w-4/5 md:items-center md:justify-center md:py-70 lg:py-100">
                    <div className="poligonoDonar bg-fara-lime absolute inset-0 z-[1] h-full w-full opacity-75"></div>
                    <div className="poligonoDonar2 bg-fara-lime absolute inset-0 z-[2] h-full w-full opacity-75"></div>
                    {/* Texto al frente */}
                    <div className="w-full max-w-[90%] px-4 text-right md:max-w-2xl md:px-20">
                        <h2 className="relative z-[3] text-base font-bold md:text-4xl lg:text-5xl">
                            ¡NECESITAMOS TU AYUDA!
                        </h2>
                        <p className="relative z-[3] mt-2 text-xs md:p-2 md:text-xl lg:text-2xl">
                            La desigualdad nos rodea. Tu aporte a FARA ayuda a construir una sociedad más justa para
                            todos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
