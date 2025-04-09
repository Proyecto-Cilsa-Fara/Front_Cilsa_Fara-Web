const beneficios = [
    {
        title: "Contenido Interactivo Exclusivo",
        description: "Sobre Justicia Restaurativa y temas de expertise de FARA.",
    },
    { title: "Consultoría Externa", description: "Son de hasta 6 (seis) horas anuales." },
    {
        title: "Charlas Magistrales Exclusivas",
        description: "Impartida con expertos y aliados institucionales.",
    },
    {
        title: "Acceso Preferencial y Descuentos",
        description: "Descuentos exclusivos en curso y capacitaciones de FARA.",
    },
]

export function Beneficios() {
    return (
        <section className="w-full">
            <div className="bg-fara-red skew-custom2 w-5/6 translate-y-15 text-center">
                <h2 className="px-5 py-12 text-lg font-bold text-white md:text-2xl xl:text-3xl">
                    ALIATE HOY Y DISFRUTÁ DE NUESTROS BENEFICIOS
                </h2>
            </div>
            <div className="relative -z-5 mx-auto flex justify-center bg-[#E2B7B8] p-10">
                <ul
                    className="mt-10 py-15 text-center text-xl md:px-10 md:text-left md:text-2xl"
                    style={{ listStyleType: "disc" }}
                >
                    {beneficios.map((beneficio, index) => (
                        <li key={index} className="mb-5 px-2">
                            <h2 className="text-shadow-custom text-shadow-none font-bold md:inline-block">
                                {beneficio.title}:
                            </h2>
                            <p className="ml-2 md:inline-block">{beneficio.description}</p>
                        </li>
                    ))}
                </ul>
                <div className="bg-fara-red skew-custom2 absolute right-0 bottom-0 w-5/6 scale-x-[-1] py-4"></div>
            </div>
        </section>
    )
}
