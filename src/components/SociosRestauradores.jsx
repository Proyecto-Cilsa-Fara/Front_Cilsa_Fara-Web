import SOCIOSRESTAURADORES from "../assets/socios-restauradores.webp"
import { Link } from "react-router"

export function SociosRestauradores() {
    return (
        <section className="w-full">
            <div className="relative">
                <img src={SOCIOSRESTAURADORES} className="w-full" alt="Imagen de personas en reunión" />
                <div className="skew-custom absolute bottom-0 left-0 z-5 h-8 w-2/3 bg-white md:h-13"></div>
            </div>
            <div className="bg-fara-gold flex w-full flex-col items-center gap-8 py-15 text-center sm:py-25 md:py-35">
                <h1 className="text-outline-lg text-2xl font-bold tracking-wider drop-shadow-lg sm:text-3xl md:text-4xl lg:text-5xl">
                    SOCIOS RESTAURADORES
                </h1>
                <Link
                    to="/socios"
                    aria-label="Apretá para sumarte a FARA"
                    className="active:bg-fara-blue hover:bg-fara-blue focus:bg-fara-blue skew-custom w-auto bg-black px-10 py-3 text-xl font-bold tracking-wide text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer md:text-2xl"
                >
                    SUMATE HOY
                </Link>
            </div>
            <div className="skew-custom bg-fara-red w-5/6 -translate-y-10 scale-x-[-1] justify-self-end p-5 text-center sm:p-10 md:-translate-y-15 lg:w-3/4">
                <p className="scale-x-[-1] p-2 text-right text-base font-bold text-white md:p-5 md:text-lg lg:text-2xl xl:p-10">
                    Asociate a FARA para colaborar en la construcción de una comunidad más igualitaria, y poder acceder
                    a documentos exclusivos, charlas y descuentos en nuestros servicios.
                </p>
            </div>
        </section>
    )
}
