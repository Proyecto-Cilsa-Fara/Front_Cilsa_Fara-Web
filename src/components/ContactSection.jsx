import {
    EmailTransparentIcon,
    FacebookTransparentIcon,
    InstagramTransparentIcon,
    LinkedinTransparentIcon,
    WhatsappTransparentIcon,
} from "../assets/icons"
import { CONTACT_INFO } from "../utils/contactInfo"
import { Link } from "react-router"

export function ContactSection() {
    /* Seccion de contacto */

    return (
        <div className="flex w-full flex-col justify-center gap-18 bg-red-700 p-20 text-white md:flex-row">
            {/* Contacto */}
            <div className="text-center md:text-left">
                <h2 className="mb-4 text-3xl font-bold">CONTÁCTANOS</h2>
                <nav className="space-y-3" aria-label="Opciones de contacto">
                    <Link
                        to={CONTACT_INFO.PHONE_LINK}
                        target
                        className="flex items-center gap-3"
                        aria-label="Envíanos un mensaje por Whatsapp"
                    >
                        <img src={WhatsappTransparentIcon} className="w-10" alt="Whatsapp" />
                        <span className="text-lg font-semibold">{CONTACT_INFO.PHONE}</span>
                    </Link>
                    <Link
                        to={CONTACT_INFO.EMAIL_1_LINK}
                        className="flex items-center gap-3"
                        aria-label="Envíanos un correo electrónico"
                    >
                        <img src={EmailTransparentIcon} className="w-10" alt="Correo electrónico" />
                        <span className="text-lg font-semibold">{CONTACT_INFO.EMAIL_1}</span>
                    </Link>
                    <Link
                        to={CONTACT_INFO.EMAIL_2_LINK}
                        className="flex items-center gap-3"
                        aria-label="Envíanos un correo electrónico"
                    >
                        <img src={EmailTransparentIcon} className="w-10" alt="Correo electrónico" />
                        <span className="text-lg font-semibold">{CONTACT_INFO.EMAIL_2}</span>
                    </Link>
                </nav>
            </div>

            {/* Redes Sociales */}
            <div className="text-center md:text-left">
                <h2 className="mb-4 text-3xl font-bold">SÍGUENOS EN REDES</h2>
                <nav className="space-y-3" aria-label="Nuestras redes sociales">
                    <Link
                        to={CONTACT_INFO.FACEBOOK_LINK}
                        className="flex items-center gap-3"
                        aria-label="Síguenos en Facebook"
                    >
                        <img src={FacebookTransparentIcon} className="w-10" alt="Facebook" />
                        <span className="text-lg font-semibold">{CONTACT_INFO.FACEBOOK}</span>
                    </Link>
                    <Link
                        to={CONTACT_INFO.INSTAGRAM_LINK}
                        className="flex items-center gap-3"
                        aria-label="Síguenos en Instagram"
                    >
                        <img src={InstagramTransparentIcon} className="w-10" alt="Instagram" />
                        <span className="text-lg font-semibold">{CONTACT_INFO.INSTAGRAM}</span>
                    </Link>
                    <Link
                        to={CONTACT_INFO.LINKEDIN_LINK}
                        className="flex items-center gap-3"
                        aria-label="Síguenos en Linkedin"
                    >
                        <img src={LinkedinTransparentIcon} className="w-10" alt="Linkedin" />
                        <span className="text-lg font-semibold">{CONTACT_INFO.LINKEDIN}</span>
                    </Link>

                    {/*  EN EL SIGUIENTE ELEMENTO MODIFICAR LINKEDIN POR DATOS DE YOUTUBE CUANDO ESTEN  */}
                    <Link
                        to={CONTACT_INFO.LINKEDIN_LINK}
                        className="flex items-center gap-3"
                        aria-label="Síguenos en Youtube"
                    >
                        <img src={LinkedinTransparentIcon} className="w-10" alt="Youtube" />
                        <span className="text-lg font-semibold">{CONTACT_INFO.LINKEDIN}</span>
                    </Link>
                </nav>
            </div>
        </div>
    )
}
