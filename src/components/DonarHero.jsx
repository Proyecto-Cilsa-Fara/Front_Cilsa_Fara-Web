import DonarHeroImage from "../assets/Donar-Hero.webp"
import { Link } from "react-router"

export function DonarHero() {
    return (
        <section className="w-full">
            <div className="relative">
                <img
                    src={DonarHeroImage}
                    className="w-full object-cover lg:h-150 xl:h-180"
                    height="700px"
                    alt="Imagen de un niño"
                />
                <div className="skew-custom absolute bottom-4 flex w-1/2 flex-col items-center justify-center bg-black/70 p-5 text-center md:h-2/3 lg:gap-5 xl:bottom-15">
                    <h2 className="z-10 px-2 text-left text-xs font-semibold text-white sm:text-xl md:text-2xl xl:px-14 xl:text-3xl">
                        La justicia restaurativa empieza cuando alguien cree que es posible. Ese alguien podés ser vos.
                    </h2>
                    <Link
                        to="/donar"
                        aria-label="Donar"
                        className="group relative flex w-full items-center justify-center focus:outline-0"
                    >
                        <div className="pointer-coarse:translate-none! pointer-coarse:-z-10! skew-custom absolute inset-0 -z-10 m-auto h-1/6 w-12 bg-[#E3A647] transition-transform duration-700 group-hover:z-5 group-hover:-translate-x-11 group-hover:-translate-y-16 group-focus:z-10 group-focus:-translate-x-11 group-focus:-translate-y-16 group-active:z-10 group-active:-translate-x-11 group-active:-translate-y-16 lg:w-15 lg:group-hover:-translate-x-25 lg:group-hover:-translate-y-28"></div>

                        <div className="pointer-coarse:translate-none! pointer-coarse:-z-10! skew-custom absolute inset-0 -z-10 m-auto h-1/7 w-20 bg-[#52A6C7] transition-transform duration-700 group-hover:z-5 group-hover:translate-x-24 group-hover:-translate-y-14 group-focus:z-10 group-focus:translate-x-24 group-focus:-translate-y-14 group-active:z-10 group-active:translate-x-24 group-active:-translate-y-14 lg:w-30 lg:group-hover:translate-x-50 lg:group-hover:-translate-y-21"></div>

                        <div className="pointer-coarse:translate-none! pointer-coarse:-z-10! skew-custom absolute inset-0 -z-10 m-auto h-1/4 w-13 bg-[#A82428] transition-transform duration-700 group-hover:z-5 group-hover:-translate-x-20 group-hover:translate-y-17 group-focus:z-10 group-focus:-translate-x-20 group-focus:translate-y-17 group-active:z-10 group-active:-translate-x-20 group-active:translate-y-17 lg:w-18 lg:group-hover:-translate-x-50 lg:group-hover:translate-y-25"></div>

                        <div className="pointer-coarse:z-10! skew-custom group-hover:bg-fara-lime group-focus:bg-fara-lime group-active:bg-fara-lime bg-fara-blue z-5 m-5 grid min-h-12 min-w-36 place-items-center border-b-4 border-gray-400 text-xl font-bold text-white shadow-md transition-colors duration-300 md:px-13 md:py-3 md:text-2xl lg:px-25 lg:py-7 lg:text-3xl">
                            DONÁ HOY
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}
