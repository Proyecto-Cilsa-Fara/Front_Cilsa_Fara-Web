import SOCIOSRESTAURADORES from "../assets/socios-restauradores.webp"
import { Link } from "react-router"
import { useDocumentMeta } from "../hooks/useDocumentMeta"

export function SociosHero() {
    const TITLE = "Socios Restauradores"
    const DESCRIPTION =
        "Asociate a FARA para colaborar en la construcción de una comunidad más igualitaria, y poder acceder a documentos exclusivos, charlas y descuentos en nuestros servicios."
    useDocumentMeta(TITLE, DESCRIPTION)

    return (
        <section className="w-full">
            <div className="relative">
                <img
                    src={SOCIOSRESTAURADORES}
                    className="w-full scale-x-[-1] object-cover lg:h-150 xl:h-170"
                    height="700px"
                    alt="Imagen de una persona mirando una computadora"
                />
                <div className="bg-fara-gold/50 absolute bottom-0 flex h-1/2 w-full flex-col items-center justify-center gap-8 text-center">
                    <div className="mx-auto flex h-1/3 w-5/6 -skew-x-12 items-center justify-center bg-white text-center">
                        <h1 className="skew-x-12 text-xl font-bold sm:text-2xl md:text-4xl xl:text-6xl">{TITLE}</h1>
                    </div>
                    <Link
                        to="/socios#contacto"
                        aria-label="Apretá para sumarte a FARA"
                        className="active:bg-fara-blue hover:bg-fara-blue focus:bg-fara-blue skew-custom w-auto bg-black px-10 py-3 text-xl font-bold tracking-wide text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer md:text-2xl"
                    >
                        SUMATE HOY
                    </Link>
                </div>
            </div>
            <div className="skew-custom bg-fara-red w-5/6 -translate-y-5 scale-x-[-1] justify-self-end p-3 text-center sm:p-10 md:-translate-y-10 lg:w-3/4">
                <p className="scale-x-[-1] p-1 text-right text-sm font-bold text-white sm:text-base md:p-5 md:text-lg lg:text-2xl xl:p-10">
                    {DESCRIPTION}
                </p>
            </div>
        </section>
    )
}
