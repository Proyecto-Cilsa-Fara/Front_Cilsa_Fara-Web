import { CardCurso } from "./CardCurso"
import { CardCursoImage, DiplomaturaImage } from "../assets/capacitaciones"

const cursos = [
    {
        title: "Justicia restaurativa aplicada al ámbito judicial",
        description:
            "Esta diplomatura responde a una necesidad crucial de formación en el ámbito judicial y legal en la relación con las prácticas restaurativas.",
        link: "https://www.ude.edu.ar/extension/diplomaturas/diplomatura-en-justicia-restaurativa-aplicada-al-ambito-judicial/",
        image: DiplomaturaImage,
    },
    {
        title: "Justicia Restaurativa y juventud",
        description:
            "Aborda herramientas restaurativas para intervenir en conflictos que involucran a jóvenes en distintos contextos.",
        link: "https://forms.office.com/r/hRa3MLPNib",
        image: CardCursoImage,
    },
    {
        title: "Prevención y gestión de la violencia escolar",
        description:
            "Propone estrategias para prevenir, abordar y transformar situaciones de violencia en el ámbito educativo.",
        link: "https://forms.office.com/r/h9ZkeLjX2y",
        image: CardCursoImage,
    },
    {
        title: "Justicia Restaurativa en contextos de encierro",
        description:
            "Explora prácticas restaurativas aplicadas al contexto penitenciario y medidas alternativas a la prisión.",
        link: "https://forms.office.com/r/9vLDkWV5G0",
        image: CardCursoImage,
    },
    {
        title: "Justicia Restaurativa y género",
        description:
            "Reflexiona sobre la justicia restaurativa desde una perspectiva de género y su aplicación en casos específicos.",
        link: "https://forms.office.com/r/0PW5AmwpY7",
        image: CardCursoImage,
    },
    {
        title: "Capacitaciones a medida",
        description: "Contáctanos para indicarnos cuál es tu necesidad académica.",
        link: "https://forms.office.com/r/mG19C3APS1",
        image: CardCursoImage,
    },
]

export function GridCursos() {
    return (
        <section className="flex w-full items-center justify-center px-5 py-10">
            <div className="mb-5 grid grid-cols-1 gap-6 gap-y-12 p-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                {cursos.map((curso, index) => (
                    <CardCurso
                        key={index}
                        title={curso.title}
                        description={curso.description}
                        image={curso.image}
                        link={curso.link}
                    />
                ))}
            </div>
        </section>
    )
}
