import { Link } from "react-router"
import * as aliadosImages from "../assets/aliados-fara"

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

            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
                <div className="p-2">
                    <img src={aliadosImages.AtalycImage} alt="Logo de ATALyC" className="h-auto rounded-2xl w-full max-w-36" />
                </div>
                <div className="p-2">
                    <img src={aliadosImages.BuenosAiresImage} alt="Logo de la Provincia de Buenos Aires" className="h-auto rounded-2xl w-full max-w-36" />
                </div>
                <div className="p-2">
                    <img src={aliadosImages.ComnapazMexicoImage} alt="Logo de Comnapaz México" className="h-auto rounded-2xl w-full max-w-36" />
                </div>
                <div className="p-2">
                    <img src={aliadosImages.FundacionGuillermoSnopekImage} alt="Logo de la Fundación Guillermo Snopek" className="h-auto rounded-2xl w-full max-w-36" />
                </div>
                <div className="p-2">
                    <img src={aliadosImages.InceipImage} alt="Logo de INCEIP" className="h-auto rounded-2xl w-full  max-w-36" />
                </div>
                <div className="p-2">
                    <img src={aliadosImages.MinisterioPublicoDeLaDefensaImage} alt="Logo del Ministerio Público de la Defensa" className="h-auto rounded-2xl w-full max-w-36" />
                </div>
                <div className="p-2">
                    <img src={aliadosImages.RACI} alt="Logo de RACI" className="h-auto rounded-2xl w-full  max-w-36" />
                </div>
                <div className="p-2">
                    <img src={aliadosImages.RockefellerCenterImage} alt="Logo de Rockefeller Center" className="h-auto rounded-2xl w-full  max-w-36" />
                </div>
                <div className="p-2">
                    <img src={aliadosImages.ServicioPenitenciarioBonaerenseImage} alt="Logo del Servicio Penitenciario Bonaerense" className="h-auto rounded-2xl w-full max-w-36" />
                </div>
                <div className="p-2">
                    <img src={aliadosImages.SipinnaImage} alt="Logo de SIPINNA" className="h-auto rounded-2xl w-full  max-w-36" />
                </div>
            </div>

            <Link
                className="skew-custom grid place-items-center bg-[#E3A647] min-h-12 min-w-12 pr-8 pl-6 text-xl font-bold md:text-2xl"
                to="/socios"
                aria-label="Alíate a la fundación"
            >
                ALÍATE
            </Link>
        </section>
    )
}
