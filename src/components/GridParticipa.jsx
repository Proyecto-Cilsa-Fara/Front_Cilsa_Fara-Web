import { CardParticipa } from "./CardParticipa"
import PasantiasImage from "../assets/PasantiasImage.webp"
import VoluntariadosImage from "../assets/VoluntariadosImage.webp"

const actividades = [
    {
        title: "Pasantías",
        description:
            "Destinadas a estudiantes de grado y posgrado de universidades nacionales y extranjeras, e integrantes de ONGs de derechos humanos nacionales y extranjeras.",
        link: "https://wa.me/5492215043359",
        image: PasantiasImage,
    },
    {
        title: "Voluntariados",
        description:
            "Se puede optar por participar de cualquiera de nuestras áreas de incidencia, comunicación y prensa, administración, gestión financiera o legal de FARA.",
        link: "https://wa.me/5492215043359",
        image: VoluntariadosImage,
    },
]

export function GridParticipa() {
    return (
        <section className="grid w-full place-items-center py-10 lg:px-5">
            <ul className="mb-5 grid h-full w-full grid-cols-1 gap-6 gap-y-12 p-4 xl:grid-cols-2">
                {actividades.map((actividades, index) => (
                    <CardParticipa
                        key={index}
                        title={actividades.title}
                        description={actividades.description}
                        image={actividades.image}
                        link={actividades.link}
                    />
                ))}
            </ul>
        </section>
    )
}
