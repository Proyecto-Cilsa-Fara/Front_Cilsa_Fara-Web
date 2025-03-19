import { Link } from "react-router"

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

            <Link
                className="skew-custom bg-[#E3A647] px-10 py-2 text-xl font-bold md:text-2xl"
                to="/"
                aria-label="Alíate a la fundación"
            >
                ALÍATE
            </Link>
        </section>
    )
}
