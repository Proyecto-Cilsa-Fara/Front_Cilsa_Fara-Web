import { Link } from "react-router"
import { useDocumentMeta } from "../../hooks/useDocumentMeta"
import { useEmailContact } from "../../hooks/useEmailContact"

export function GeneroHero() {
    const TITLE = "Género y Diversidad"
    const DESCRIPTION =
        "Acompañamos, formamos y transformamos desde una mirada que reconoce el daño, cuida a las personas y exige responsabilidad."
    useDocumentMeta(TITLE, DESCRIPTION)

    const { onClikEmail, mailtoEmail } = useEmailContact("outlook", "Solicitud de asesoramiento de Fara Género")

    return (
        <section className="w-full">
            <div className="bg-genero-image relative flex h-dvh w-full flex-col items-center justify-center gap-4 md:h-80 lg:h-150 xl:h-170">
                <div className="flex h-full w-full flex-col items-center justify-center gap-7 bg-black/50 text-white">
                    <h1 className="max-w-4xl px-4 text-5xl font-bold md:text-center md:text-4xl xl:text-6xl">
                        {TITLE}
                    </h1>
                    <p className="max-w-3xl px-4 text-start text-base text-wrap md:text-center md:text-lg xl:text-xl">
                        {DESCRIPTION}
                    </p>
                    <div className="flex w-full flex-col items-start gap-4 px-4 md:flex-row md:justify-center">
                        <a
                            href={mailtoEmail}
                            onClick={onClikEmail}
                            className="skew-custom bg-fara-blue hover:bg-fara-cyan active:bg-fara-cyan focus:bg-fara-cyan px-4 py-3 text-center font-bold text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer"
                            aria-label="Solicitar asesoramiento"
                        >
                            Solicitar asesoramiento
                        </a>
                        <Link
                            to="/capacitaciones"
                            className="skew-custom bg-fara-red active:bg-fara-strong-red hover:bg-fara-strong-red focus:bg-fara-strong-red px-4 py-3 text-center font-bold text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer"
                            aria-label="Pedir Capacitación"
                        >
                            Pedir Capacitación
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}
