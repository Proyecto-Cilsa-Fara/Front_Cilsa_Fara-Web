import { Link } from "react-router"

export function BannerDonar() {
    return (
        <section className="w-full bg-black py-2 text-center md:py-5 xl:py-10">
            <Link
                to="https://cafecito.app/fundacionfara"
                aria-label="Realizar donación"
                className="group relative flex w-full items-center justify-center focus:outline-0"
            >
                <div className="pointer-coarse:translate-none! pointer-coarse:-z-10! skew-custom absolute inset-0 -z-10 m-auto h-1/6 w-12 bg-[#E3A647] transition-transform duration-700 group-hover:z-5 group-hover:-translate-x-11 group-hover:-translate-y-16 group-focus:z-10 group-focus:-translate-x-11 group-focus:-translate-y-16 group-active:z-10 group-active:-translate-x-11 group-active:-translate-y-16 lg:w-15 lg:group-hover:-translate-x-25 lg:group-hover:-translate-y-28"></div>

                <div className="pointer-coarse:translate-none! pointer-coarse:-z-10! skew-custom absolute inset-0 -z-10 m-auto h-1/7 w-20 bg-[#52A6C7] transition-transform duration-700 group-hover:z-5 group-hover:translate-x-24 group-hover:-translate-y-14 group-focus:z-10 group-focus:translate-x-24 group-focus:-translate-y-14 group-active:z-10 group-active:translate-x-24 group-active:-translate-y-14 lg:w-30 lg:group-hover:translate-x-50 lg:group-hover:-translate-y-21"></div>

                <div className="pointer-coarse:translate-none! pointer-coarse:-z-10! skew-custom absolute inset-0 -z-10 m-auto h-1/4 w-13 bg-[#A82428] transition-transform duration-700 group-hover:z-5 group-hover:-translate-x-20 group-hover:translate-y-17 group-focus:z-10 group-focus:-translate-x-20 group-focus:translate-y-17 group-active:z-10 group-active:-translate-x-20 group-active:translate-y-17 lg:w-18 lg:group-hover:-translate-x-50 lg:group-hover:translate-y-25"></div>

                <div className="pointer-coarse:z-10! skew-custom group-hover:bg-fara-lime group-focus:bg-fara-lime group-active:bg-fara-lime bg-fara-blue z-5 m-5 grid min-h-12 min-w-70 place-items-center border-b-4 border-gray-400 text-xl font-semibold text-white shadow-md transition-colors duration-300 md:px-13 md:py-3 md:text-2xl lg:px-25 lg:py-7 lg:text-3xl">
                    DONAR AHORA
                </div>
            </Link>
        </section>
    )
}
