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
            <div className="flex w-full items-center">
                {/* Botón de donar */}
                <div className="group relative flex w-1/2 items-center justify-center">
                    <div className="skew-custom absolute inset-0 -z-10 m-auto h-1/6 w-12 bg-[#E3A647] transition-transform duration-700 group-hover:z-10 group-hover:-translate-x-11 group-hover:-translate-y-16"></div>
                    <div className="skew-custom absolute inset-0 -z-10 m-auto h-1/7 w-20 bg-[#52A6C7] transition-transform duration-700 group-hover:z-10 group-hover:translate-x-24 group-hover:-translate-y-14"></div>
                    <div className="skew-custom absolute inset-0 -z-10 m-auto h-1/4 w-13 bg-[#A82428] transition-transform duration-700 group-hover:z-10 group-hover:-translate-x-20 group-hover:translate-y-17"></div>

                    <Link
                        className="skew-custom z-20 m-5 bg-black px-10 py-3 text-3xl font-bold text-white shadow-md transition-colors duration-700 hover:bg-[#B9CE48]"
                        to="/donar"
                        aria-label="Donar"
                    >
                        <span className="drop-shadow-[0.7px_0.7px_0.7px_black]">DONAR</span>
                    </Link>
                </div>

                {/* Texto de ayuda */}
                <div className="relative flex h-full w-4/5 flex-col items-end justify-center py-45 text-right">
                    <div className="poligonoDonar absolute inset-0 z-[1] h-full w-full bg-[#B9CE48] opacity-75"></div>
                    <div className="poligonoDonar2 absolute inset-0 z-[2] h-full w-full bg-[#B9CE48] opacity-75"></div>
                    {/* Texto al frente */}
                    <div className="w-full max-w-[90%] px-20 text-right md:max-w-2xl">
                        <h2 className="relative z-[3] text-4xl font-bold">¡NECESITAMOS TU AYUDA!</h2>
                        <p className="relative z-[3] mt-2 text-base">
                            La desigualdad nos rodea. Tu aporte a FARA ayuda a construir una sociedad más justa para
                            todos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}
