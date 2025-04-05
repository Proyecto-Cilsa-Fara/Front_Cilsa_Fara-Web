import { vIcon } from "../assets/icons/index"

export function BannerSumate() {
    return (
        <section className="bg-fara-red w-full px-8 py-16 text-center text-3xl font-bold text-white xl:py-20">
            <h2 className="text-outline-sm text-2xl font-bold text-white xl:text-3xl">
                ¡SUMATE HOY Y EMPEZÁ A SER PARTE!
            </h2>
            <img src={vIcon} alt="icono en V" className="mx-auto mt-5 hidden md:block" width="24px" height="24px" />
        </section>
    )
}
