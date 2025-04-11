import { IconAsesoramiento1, IconAsesoramiento2 } from "../assets/icons"

const cardData = [
    {
        icon: IconAsesoramiento1,
        title: "Consultoría y acompañamiento a ONG’s",
        description:
            "Una de nuestras misiones es fortalecer la gestión de las organizaciones de la sociedad civil en el abordaje de casos, desde un enfoque multidimensional e interdisciplinario en justicia restaurativa, género e interculturalidad. \n \n Proponemos un seguimiento externo, para analizar las fortalezas y debilidades de la organización, y así potenciar los servicios restaurativos que se pretenden brindar. \n \n Por un costo anual, prestamos asistencia técnica a cargo de las integrantes de la Fundación, a través de la plataforma virtual y/o presencial que se adapte a las necesidades de la ONG.",
    },
    {
        icon: IconAsesoramiento2,
        title: "Asesoramiento a organismos del Estado",
        description:
            "FARA propone fortalecer la gestión de los gobiernos, en la promoción de sociedades pacíficas, que garanticen derechos humanos en la gestión de la conflictividad social desde un enfoque multidimensional e interdisciplinario. \n \n En función de los requerimientos de cada organización y de las características del grupo de impacto, desarrollamos diferentes servicios a organismos del Estado, que van desde capacitaciones, hasta planes de asesoramiento y experiencias en territorio. \n \n Los mismos se presentan como propuestas de programas restaurativos, respaldados por los conocimientos y experiencias profesionales de FARA.",
    },
]

export function CardsAsesoramiento() {
    return (
        <section className="w-full py-5 md:py-16">
            <div className="flex flex-col items-center justify-center gap-15 px-5 py-10 text-center lg:px-20">
                {cardData.map((card, index) => {
                    return (
                        <div
                            key={index}
                            className="bg-fara-teal mx-auto max-w-200 -skew-y-6 px-6 py-15 xl:px-10 xl:py-20"
                        >
                            <div className="justify-centerc flex skew-y-6 flex-col items-center gap-5 bg-white p-2 sm:flex-row md:p-5">
                                <img src={card.icon} alt={`Icono ${index + 1}`} className="w-1/3 fill-[#21708e]" />
                                <div className="flex flex-col gap-2 text-center sm:text-left">
                                    <h2 className="mb-4 text-center text-xl font-bold sm:text-left sm:text-2xl md:text-3xl">
                                        {card.title}
                                    </h2>
                                    <p className="text-left text-base leading-7 text-balance whitespace-pre-line sm:text-xl">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}
