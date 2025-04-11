import { Link } from "react-router"
import DonarSectionImage from "../assets/DonarSectionImage.webp"

export function DonarSection() {
    return (
        <section
            className="flex h-[calc(100svh-10rem)] w-full bg-cover"
            style={{ backgroundImage: `url(${DonarSectionImage})` }}
        >
            <div className="relative h-full w-7/8 lg:w-1/2">
                <div className="absolute inset-0 bg-black opacity-66 [clip-path:polygon(0_0,95%_0,78%_100%,0_100%)]"></div>
                <div className="absolute inset-0 bg-black opacity-66 [clip-path:polygon(0_8%,100%_8%,81%_100%,0_100%)]"></div>
                <div className="absolute inset-0 m-auto flex h-full flex-col justify-center gap-16 p-8">
                    <p className="max-w-4/5 text-lg font-light text-white lg:text-4xl">
                        Tu aporte hace posible que las voces sean escuchadas y se encuentren soluciones
                        <em>
                            <strong className="font-bold"> constructivas</strong>
                        </em>
                    </p>
                    <Link
                        to="/donar"
                        aria-label="Donar"
                        className="group relative w-full items-center justify-center focus:outline-0"
                    >
                        <div className="skew-custom absolute inset-0 m-auto h-1/6 w-12 bg-[#E3A647] transition-transform duration-300 group-hover:-translate-x-11 group-hover:-translate-y-20 group-focus:-translate-x-11 group-focus:-translate-y-20 group-active:-translate-x-11 group-active:-translate-y-20 lg:w-15 lg:group-hover:-translate-x-25 lg:group-hover:-translate-y-28"></div>

                        <div className="skew-custom absolute inset-0 m-auto h-1/7 w-20 bg-[#52A6C7] transition-transform duration-300 group-hover:translate-x-24 group-hover:-translate-y-24 group-focus:translate-x-24 group-focus:-translate-y-24 group-active:translate-x-24 group-active:-translate-y-24 lg:w-30 lg:group-hover:translate-x-50 lg:group-hover:-translate-y-30"></div>

                        <div className="skew-custom absolute inset-0 m-auto h-1/4 w-13 bg-[#A82428] transition-transform duration-300 group-hover:-translate-x-20 group-hover:translate-y-24 group-focus:-translate-x-20 group-focus:translate-y-24 group-active:-translate-x-20 group-active:translate-y-24 lg:w-18 lg:group-hover:-translate-x-50 lg:group-hover:translate-y-32"></div>

                        <div className="skew-custom group-hover:bg-fara-lime group-focus:bg-fara-lime group-active:bg-fara-lime bg-fara-blue relative z-[8] grid min-h-12 max-w-4/5 min-w-36 place-items-center border-b-4 border-b-white px-4 py-4 text-xl font-bold text-white shadow-md transition-colors duration-300 md:px-13 md:py-3 md:text-3xl lg:px-25 lg:py-7 lg:text-5xl">
                            APOYA LA JUSTICIA RESTAURATIVA
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}
