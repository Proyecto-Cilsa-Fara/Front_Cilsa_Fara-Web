import { Link } from "react-router"
import { aliadosImages } from "../assets/aliados-fara"

export function AliadosSection() {
    /* Seccion de aliados */

    return (
        <section className="flex w-full flex-col items-center justify-center gap-15 px-5 py-20">
            <div className="relative">
                <div className="skew-custom absolute w-full translate-x-3 -translate-y-2 bg-[#52A6C7] px-5 py-6 md:translate-x-5 md:-translate-y-3 md:px-7 md:py-7"></div>
                <div className="skew-custom absolute w-full -translate-x-3 translate-y-2 bg-[#A82428] px-5 py-6 md:-translate-x-3 md:translate-y-4 md:px-7 md:py-7"></div>
                <div className="skew-custom text-md relative w-full bg-[#E3A647] px-8 py-3 font-bold md:text-3xl">
                    ALIADOS RESTAURATIVOS
                </div>
            </div>

            <p className="text-center text-sm md:text-base md:font-semibold">
                Ellos ya nos están acompañando en nuestra misión. <br />
                ¿Te interesa sumar tu empresa?
            </p>

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
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
                                className="h-auto w-full max-w-36 rounded-2xl"
                            />
                        </div>
                    )
                })}
            </div>

            <Link
                className="skew-custom grid min-h-12 min-w-12 place-items-center bg-[#E3A647] pr-8 pl-6 text-xl font-bold md:text-2xl"
                to="/socios"
                aria-label="Alíate a la fundación"
            >
                ALÍATE
            </Link>
        </section>
    )
}
