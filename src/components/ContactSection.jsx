import {
    EmailTransparentIcon,
    FacebookTransparentIcon,
    InstagramTransparentIcon,
    LinkedinTransparentIcon,
    YoutubeTransparentIcon,
    WhatsappTransparentIcon,
} from "../assets/icons"
import { CONTACT_INFO } from "../utils/contactInfo"
import { Link } from "react-router"

export function ContactSection() {
    /* Seccion de contacto */

    return (
        <div className="flex w-full flex-col justify-center gap-9 bg-red-700 p-10 text-white lg:flex-row lg:gap-18 lg:p-20">
            {/* Contacto */}
            <div className="text-center lg:text-left">
                <h2 className="mb-4 text-xl font-bold lg:text-3xl">CONTÁCTANOS</h2>
                <nav className="space-y-3" aria-label="Opciones de contacto">
                    <Link
                        to={CONTACT_INFO.PHONE_LINK}
                        className="flex items-center gap-3"
                        aria-label="Envíanos un mensaje por Whatsapp"
                    >
                        <img src={WhatsappTransparentIcon} className="w-10" alt="Whatsapp" />
                        <span className="text-sm font-semibold lg:text-lg">{CONTACT_INFO.PHONE}</span>
                    </Link>
                    <Link
                        to={CONTACT_INFO.EMAIL_1_LINK}
                        className="flex items-center gap-3"
                        aria-label="Envíanos un correo electrónico"
                    >
                        <img src={EmailTransparentIcon} className="w-10" alt="Correo electrónico" />
                        <span className="text-sm font-semibold lg:text-lg">{CONTACT_INFO.EMAIL_1}</span>
                    </Link>
                    <Link
                        to={CONTACT_INFO.EMAIL_2_LINK}
                        className="flex items-center gap-3"
                        aria-label="Envíanos un correo electrónico"
                    >
                        <img src={EmailTransparentIcon} className="w-10" alt="Correo electrónico" />
                        <span className="text-sm font-semibold lg:text-lg">{CONTACT_INFO.EMAIL_2}</span>
                    </Link>
                </nav>
            </div>

            {/* Redes Sociales */}
            <div className="text-center lg:text-left">
                <h2 className="mb-4 text-xl font-bold lg:text-3xl">SÍGUENOS EN REDES</h2>
                <nav className="space-y-3" aria-label="Nuestras redes sociales">
                    <Link
                        to={CONTACT_INFO.FACEBOOK_LINK}
                        className="flex items-center gap-3"
                        aria-label="Síguenos en Facebook"
                    >
                        <img src={FacebookTransparentIcon} className="w-10" alt="Facebook" />
                        <span className="text-sm font-semibold lg:text-lg">{CONTACT_INFO.FACEBOOK}</span>
                    </Link>
                    <Link
                        to={CONTACT_INFO.INSTAGRAM_LINK}
                        className="flex items-center gap-3"
                        aria-label="Síguenos en Instagram"
                    >
                        <img src={InstagramTransparentIcon} className="w-10" alt="Instagram" />
                        <span className="text-sm font-semibold lg:text-lg">{CONTACT_INFO.INSTAGRAM}</span>
                    </Link>
                    <Link
                        to={CONTACT_INFO.LINKEDIN_LINK}
                        className="flex items-center gap-3"
                        aria-label="Síguenos en Linkedin"
                    >
                        <img src={LinkedinTransparentIcon} className="w-10" alt="Linkedin" />
                        <span className="text-sm font-semibold lg:text-lg">{CONTACT_INFO.LINKEDIN}</span>
                    </Link>
                    <Link
                        to={CONTACT_INFO.YOUTUBE_LINK}
                        className="flex items-center gap-3"
                        aria-label="Síguenos en Youtube"
                    >
                        <img src={YoutubeTransparentIcon} className="w-10" alt="Youtube" />
                        <span className="text-sm font-semibold lg:text-lg">{CONTACT_INFO.YOUTUBE}</span>
                    </Link>
                </nav>
            </div>
        </div>
    )
}
