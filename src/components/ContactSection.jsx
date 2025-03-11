import { EmailIcon, FacebookIcon, InstagramIcon, LinkedinIcon, WhatsappIcon } from "../assets/icons"
import { CONTACT_INFO } from "../utils/contactInfo"

export function ContactSection() {
    /* Seccion de contacto */

    return (
        <div className="flex w-full flex-col justify-center gap-16 bg-red-700 p-12 text-white md:flex-row">
            {/* Contacto */}
            <div className="text-center md:text-left">
                <h2 className="mb-4 text-3xl font-bold">CONTÁCTANOS</h2>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                        <div className="rounded-lg bg-white p-1">
                            <img src={WhatsappIcon} className="text-3xl text-red-700" />
                        </div>
                        <span className="text-lg font-semibold">{CONTACT_INFO.PHONE}</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="rounded-lg bg-white p-1">
                            <img src={EmailIcon} className="text-3xl text-red-700" />
                        </div>
                        <span className="text-lg">{CONTACT_INFO.EMAIL_1}</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="rounded-lg bg-white p-1">
                            <img src={EmailIcon} className="text-3xl text-red-700" />
                        </div>
                        <span className="text-lg">{CONTACT_INFO.EMAIL_2}</span>
                    </li>
                </ul>
            </div>

            {/* Redes Sociales */}
            <div className="text-center md:text-left">
                <h2 className="mb-4 text-3xl font-bold">SÍGUENOS EN REDES</h2>
                <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                        <div className="rounded-lg bg-white p-1">
                            <img src={FacebookIcon} className="text-3xl text-red-700" />
                        </div>
                        <span className="text-lg">{CONTACT_INFO.FACEBOOK}</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="rounded-lg bg-white p-1">
                            <img src={InstagramIcon} className="text-3xl text-red-700" />
                        </div>
                        <span className="text-lg">{CONTACT_INFO.INSTAGRAM}</span>
                    </li>
                    <li className="flex items-center gap-3">
                        <div className="rounded-lg bg-white p-1">
                            <img src={LinkedinIcon} className="text-3xl text-red-700" />
                        </div>
                        <span className="text-lg font-semibold underline">{CONTACT_INFO.LINKEDIN}</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
