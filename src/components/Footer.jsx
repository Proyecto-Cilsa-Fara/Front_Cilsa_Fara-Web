import { Link } from "react-router"
import { ContactSection, ColorBar } from "./index"

const FOOTER_MESSAGE = "© 2025 Acción Restaurativa Argentina. Todos los derechos reservados."

export function Footer() {
    return (
        <footer className="w-full flex-col gap-4">
            <ContactSection />
            <p
                className="grid h-[calc(100%-1rem)] place-items-center p-4 text-sm"
                aria-label={`${FOOTER_MESSAGE} Hecho con amor por el equipo de desarrollo`}
            >
                {FOOTER_MESSAGE}{" "}
                <Link
                    to="https://github.com/Proyecto-Cilsa-Fara/Front_Cilsa_Fara-Web?tab=readme-ov-file#-equipo-de-desarrollo"
                    className="text-fara-blue hover:cursor-pointer hover:underline focus:underline active:underline"
                    aria-label="Ver todos los miembros del equipo de desarrollo"
                >
                    Hecho con <span aria-hidden="true">♥</span> por el equipo de desarrollo voluntario.
                </Link>
            </p>
            <ColorBar />
        </footer>
    )
}
