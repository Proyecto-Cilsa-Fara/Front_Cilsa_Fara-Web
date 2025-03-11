import { EmailIcon, FacebookIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from "../assets/icons"
import { CONTACT_INFO } from "../utils/contactInfo"
import { Link } from "react-router"

export function ContactSection() {
    /* Seccion de contacto */

    return (
        <div className="flex w-full flex-col justify-center gap-16 bg-red-700 p-12 text-white md:flex-row">
            {/* Contacto */}
            <div className="text-center md:text-left">
                <h2 className="mb-4 text-3xl font-bold">CONTÁCTANOS</h2>
                <nav className="space-y-3">
                    <Link to={CONTACT_INFO.PHONE_LINK} target className="flex items-center gap-3">
                        <div className="rounded-lg bg-white p-1">
                            <img src={WhatsappIcon} className="text-3xl text-red-700" />
                        </div>
                        <span className="text-lg font-semibold">{CONTACT_INFO.PHONE}</span>
                    </Link>
                    <Link to={CONTACT_INFO.EMAIL_1_LINK} className="flex items-center gap-3">
                        <div className="rounded-lg bg-white p-1">
                            <img src={EmailIcon} className="text-3xl text-red-700" />
                        </div>
                        <span className="text-lg">{CONTACT_INFO.EMAIL_1}</span>
                    </Link>
                    <Link to={CONTACT_INFO.EMAIL_2_LINK} className="flex items-center gap-3">
                        <div className="rounded-lg bg-white p-1">
                            <img src={EmailIcon} className="text-3xl text-red-700" />
                        </div>
                        <span className="text-lg">{CONTACT_INFO.EMAIL_2}</span>
                    </Link>
                </nav>
            </div>

            {/* Redes Sociales */}
            <div className="text-center md:text-left">
                <h2 className="mb-4 text-3xl font-bold">SÍGUENOS EN REDES</h2>
                <nav className="space-y-3">
                    <Link to={CONTACT_INFO.FACEBOOK_LINK} className="flex items-center gap-3">
                        <div className="rounded-lg bg-white p-1">
                            <img src={FacebookIcon} className="text-3xl text-red-700" />
                        </div>
                        <span className="text-lg">{CONTACT_INFO.FACEBOOK}</span>
                    </Link>
                    <Link to={CONTACT_INFO.INSTAGRAM_LINK} className="flex items-center gap-3">
                        <div className="rounded-lg bg-white p-1">
                            <img src={InstagramIcon} className="text-3xl text-red-700" />
                        </div>
                        <span className="text-lg">{CONTACT_INFO.INSTAGRAM}</span>
                    </Link>
                    <Link to={CONTACT_INFO.LINKEDIN_LINK} className="flex items-center gap-3">
                        <div className="rounded-lg bg-white p-1">
                            <img src={LinkedinIcon} className="text-3xl text-red-700" />
                        </div>
                        <span className="text-lg font-semibold underline">{CONTACT_INFO.LINKEDIN}</span>
                    </Link>
                </nav>
            </div>
        </div>
    )
}
