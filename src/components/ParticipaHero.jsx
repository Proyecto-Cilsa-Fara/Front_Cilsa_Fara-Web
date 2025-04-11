import ParticipaHeroImage from "../assets/ParticipaHeroImage.webp"

export function ParticipaHero() {
    return (
        <section className="w-full">
            <div className="relative">
                <img
                    src={ParticipaHeroImage}
                    className="w-full scale-x-[-1] object-cover lg:h-150 xl:h-170"
                    height="700px"
                    alt="Imagen de una persona mirando una computadora"
                />
                <div className="bg-fara-lime/50 absolute bottom-0 flex h-1/2 w-full items-center justify-center text-center">
                    <div className="mx-auto flex h-1/3 w-5/6 -skew-x-12 items-center justify-center bg-white text-center">
                        <h2 className="skew-x-12 text-xl font-bold sm:text-2xl md:text-4xl xl:text-6xl">
                            Pasantías y voluntariados
                        </h2>
                    </div>
                </div>
            </div>
            <div className="skew-custom bg-fara-blue w-5/6 -translate-y-5 scale-x-[-1] justify-self-end p-3 text-center sm:p-10 md:-translate-y-10 lg:w-3/4">
                <p className="scale-x-[-1] p-1 text-right text-sm font-bold text-white sm:text-base md:p-5 md:text-lg lg:text-2xl xl:p-10">
                    Participá en cualquiera de nuestras áreas de incidencia a través de nuestros programas de pasantías
                    y voluntariado
                </p>
            </div>
        </section>
    )
}
