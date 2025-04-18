import { Link } from "react-router"
import { aliadosImages } from "../assets/aliados-fara"

export function AliadosSociosSection() {
    /* Seccion de aliados */

    return (
        <section className="flex w-full flex-col items-center justify-center gap-12 px-5 py-20 lg:gap-16 lg:px-32">
            <div className="relative">
                <div className="skew-custom absolute w-full translate-x-3 -translate-y-2 bg-[#52A6C7] px-5 py-6 md:translate-x-5 md:-translate-y-3 md:px-7 md:py-7"></div>
                <div className="skew-custom absolute w-full -translate-x-3 translate-y-2 bg-[#A82428] px-5 py-6 md:-translate-x-3 md:translate-y-4 md:px-7 md:py-7"></div>
                <h2 className="skew-custom text-md relative w-full bg-[#E3A647] px-8 py-3 font-bold md:text-3xl">
                    ALIADOS RESTAURATIVOS
                </h2>
            </div>

            <div className="grid place-items-center">
                <p className="self-center text-center text-lg text-pretty md:text-2xl md:font-semibold lg:max-w-[65ch]">
                    Ellos ya nos están acompañando en nuestra misión.
                </p>
                <p className="max-w-[65ch] self-center text-lg text-pretty md:text-2xl md:font-semibold">
                    ¿Te interesa sumar tu empresa?
                </p>
            </div>

            <div className="mt-[-2rem] grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:mt-0 lg:grid-cols-5">
                {aliadosImages.map((aliado, index) => {
                    const aliadoName = aliado
                        .split("/")
                        .pop()
                        .replace(/Image/i, "")
                        .replace(/\.[^/.]+$/, "")
                    return (
                        <div className="p-2" key={index}>
                            <img
                                src={aliado}
                                alt={"Logo de " + aliadoName}
                                className="h-auto w-full max-w-64 rounded-2xl"
                                height="700px"
                                width="700px"
                            />
                        </div>
                    )
                })}
            </div>

            <Link
                to="/socios#contacto"
                aria-label="Alíate a la fundación"
                className="skew-custom bg-fara-gold hover:[.text-outline-lg] hover:bg-fara-strong-red focus:bg-fara-strong-red active:bg-fara-strong-red hover:text-whitemd:text-3xl grid min-h-12 min-w-48 place-items-center pr-8 pl-6 text-xl font-bold uppercase transition-colors duration-300 ease-in-out hover:text-white focus:text-white active:text-white"
            >
                Hazte aliado
            </Link>
        </section>
    )
}
