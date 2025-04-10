import AsesoramientoHeroImage from "../assets/AsesoramientoHeroImage.webp"

export function AsesoramientoHero() {
    return (
        <section className="w-full">
            <div className="relative">
                <img
                    src={AsesoramientoHeroImage}
                    className="w-full object-cover lg:h-150 xl:h-170"
                    height="700px"
                    alt="Imagen de una persona mirando una computadora"
                />
                <div className="bg-fara-red/85 absolute bottom-0 flex h-1/2 w-full items-center justify-center text-center">
                    <h2 className="text-xl font-bold text-white sm:text-2xl md:text-4xl xl:text-6xl">
                        Servicios para Organizaciones
                    </h2>
                </div>
            </div>
            <div className="skew-custom bg-fara-blue w-5/6 -translate-y-5 scale-x-[-1] justify-self-end p-3 text-center sm:p-10 md:-translate-y-10 lg:w-3/4">
                <p className="scale-x-[-1] p-1 text-right text-sm font-bold text-white sm:text-base md:p-5 md:text-lg lg:text-2xl xl:p-10">
                    Trabajamos junto a organizaciones, brindándoles servicios que se adecuen a sus realidades y
                    necesidades.
                </p>
            </div>
        </section>
    )
}
