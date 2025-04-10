import { CardCurso } from "./CardCurso"
import CardImage from "../assets/CardCursoImage.webp"
import DiplomaturaImage from "../assets/Diplomatura.webp"

const cursos = [
    {
        title: "Justicia restaurativa aplicada al ámbito judicial",
        description:
            "Esta diplomatura responde a una necesidad crucial de formación en el ámbito judicial y legal en la relación con las prácticas restaurativas.",
        link: "/#",
        image: DiplomaturaImage,
    },
    {
        title: "Nombre del curso que ocupa dos renglones max",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/#",
        image: CardImage,
    },
    {
        title: "Nombre del curso que ocupa dos renglones max",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/#",
        image: CardImage,
    },
    {
        title: "Nombre del curso que ocupa dos renglones max",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/#",
        image: CardImage,
    },
    {
        title: "Nombre del curso que ocupa dos renglones max",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/#",
        image: CardImage,
    },
    {
        title: "Nombre del curso que ocupa dos renglones max",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/#",
        image: CardImage,
    },
    {
        title: "Nombre del curso que ocupa dos renglones max",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/#",
        image: CardImage,
    },
    {
        title: "Nombre del curso que ocupa dos renglones max",
        description:
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        link: "/#",
        image: CardImage,
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
