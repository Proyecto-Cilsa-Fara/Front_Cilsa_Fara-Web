import { Link } from "react-router"

export function BannerCapacitaciones() {
    return (
        <section className="w-full bg-black px-8 py-16 text-center text-3xl font-bold text-white xl:py-20">
            <h2 className="text-outline-sm mx-auto mb-6 w-5/6 text-xl font-semibold text-white md:w-1/2 md:text-2xl xl:w-1/3 xl:text-3xl">
                ¡Conocé también todas nuestras propuestas de capacitaciones!
            </h2>
            <Link
                to="/capacitaciones"
                aria-label="Mirá todas nuestras capacitaciones"
                className="skew-custom bg-fara-blue hover:[.text-outline-lg] hover:bg-fara-red focus:bg-fara-red active:bg-fara-red hover:text-whitemd:text-3xl mx-auto grid min-h-12 w-5/6 min-w-48 place-items-center border-b-2 border-gray-200 pr-8 pl-6 text-base font-bold uppercase transition-colors duration-300 ease-in-out hover:text-white focus:text-white active:text-white md:w-1/2 md:text-xl xl:w-1/3"
            >
                Ver capacitaciones
            </Link>
        </section>
    )
}
