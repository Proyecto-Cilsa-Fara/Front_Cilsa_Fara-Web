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
        <div className="bg-fara-strong-red flex w-full flex-col justify-center gap-9 p-10 text-white md:flex-row md:gap-18 md:p-20">
            {/* Contacto */}
            <div className="text-center md:text-left">
                <h2 className="mb-4 text-xl font-bold uppercase lg:text-3xl">Contacto institucional</h2>
                <nav className="space-y-3" aria-label="Opciones de contacto">
                    <Link
                        to={CONTACT_INFO.PHONE_LINK}
                        className="flex min-h-12 items-center gap-3"
                        aria-label="Envíanos un mensaje por Whatsapp"
                    >
                        <img
                            src={WhatsappTransparentIcon}
                            className="w-10"
                            alt="Logo de Whatsapp"
                            width="61px"
                            height="61px"
                        />
                        <span className="text-sm font-semibold lg:text-lg">{`Whatsapp: ${CONTACT_INFO.PHONE}`}</span>
                    </Link>
                    <Link
                        to={CONTACT_INFO.EMAIL_1_LINK}
                        className="flex min-h-12 items-center gap-3"
                        aria-label="Envía un correo electrónico a las fundadoras"
                    >
                        <img
                            src={EmailTransparentIcon}
                            className="w-10"
                            alt="Icono del correo electrónico Gmail"
                            width="61px"
                            height="61px"
                        />
                        <span className="text-sm font-semibold lg:text-lg">{`Email: ${CONTACT_INFO.EMAIL_1}`}</span>
                    </Link>
                    <Link
                        to={CONTACT_INFO.EMAIL_2_LINK}
                        className="flex min-h-12 items-center gap-3"
                        aria-label="Envíanos un correo electrónico"
                    >
                        <img
                            src={EmailTransparentIcon}
                            className="w-10"
                            alt="Icono del correo electrónico Hotmail"
                            width="61px"
                            height="61px"
                        />
                        <span className="text-sm font-semibold lg:text-lg">{`Email: ${CONTACT_INFO.EMAIL_2}`}</span>
                    </Link>
                </nav>
            </div>

            {/* Redes Sociales */}
            <div className="text-center md:text-left">
                <h2 className="mb-4 text-xl font-bold uppercase lg:text-3xl">Redes sociales</h2>
                <nav className="space-y-3" aria-label="Nuestras redes sociales">
                    <Link
                        to={CONTACT_INFO.FACEBOOK_LINK}
                        className="flex min-h-12 items-center gap-3"
                        aria-label="Síguenos en Facebook"
                    >
                        <img
                            src={FacebookTransparentIcon}
                            className="w-10"
                            alt="Logo de Facebook"
                            width="61px"
                            height="61px"
                        />
                        <span className="text-sm font-semibold lg:text-lg">{`Facebook: ${CONTACT_INFO.FACEBOOK}`}</span>
                    </Link>
                    <Link
                        to={CONTACT_INFO.INSTAGRAM_LINK}
                        className="flex min-h-12 items-center gap-3"
                        aria-label="Síguenos en Instagram"
                    >
                        <img
                            src={InstagramTransparentIcon}
                            className="w-10"
                            alt="Logo de Instagram"
                            width="61px"
                            height="61px"
                        />
                        <span className="text-sm font-semibold lg:text-lg">{`Instagram: ${CONTACT_INFO.INSTAGRAM}`}</span>
                    </Link>
                    <Link
                        to={CONTACT_INFO.LINKEDIN_LINK}
                        className="flex min-h-12 items-center gap-3"
                        aria-label="Síguenos en Linkedin"
                    >
                        <img
                            src={LinkedinTransparentIcon}
                            className="w-10"
                            alt="Logo de Linkedin"
                            width="61px"
                            height="61px"
                        />
                        <span className="text-sm font-semibold lg:text-lg">{`LinkedIn: ${CONTACT_INFO.LINKEDIN}`}</span>
                    </Link>
                    <Link
                        to={CONTACT_INFO.YOUTUBE_LINK}
                        className="flex min-h-12 items-center gap-3"
                        aria-label="Síguenos en Youtube"
                    >
                        <img
                            src={YoutubeTransparentIcon}
                            className="w-10"
                            alt="Logo de Youtube"
                            width="61px"
                            height="61px"
                        />
                        <span className="text-sm font-semibold lg:text-lg">{`Youtube: ${CONTACT_INFO.YOUTUBE}`}</span>
                    </Link>
                </nav>
            </div>
        </div>
    )
}
