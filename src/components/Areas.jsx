import {
    imgCircArt,
    Educacion,
    Delitos,
    Justicia,
    Niñez,
    Politicas,
    Explotacion,
    Violencia,
    GeneroDiversidad,
    RelacionesLaborales
} from "../assets/equipos-multidisciplinarios"
import { Link } from "react-router"

export function Areas() {
    const areas = [
        {
            name: "Justicia restaurativa para las víctimas",
            image: Justicia,
            color: "bg-fara-red/80",
            to: "/socios"
        },
        {
            name: "Procesos de restauración para conductas agresivas",
            image: Politicas,
            color: "bg-fara-blue/80",
            to: "/socios"
        },
        {
            name: "Bullying, acoso, amenazas y daños",
            image: Educacion,
            color: "bg-fara-gold/80",
            to: "/socios"
        },
        {
            name: "Violencia y explotación sexual",
            image: Explotacion,
            color: "bg-fara-gray/80",
            to: "/socios"
        },
        {
            name: "Delitos en línea, deepfake y suplantación de identidad",
            image: Delitos,
            color: "bg-fara-lime/80",
            to: "/socios"
        },
        {
            name: "Prácticas restaurativas en cárceles para prevenir la reincidencia",
            image: Niñez,
            color: "bg-fara-red/80",
            to: "/socios"
        },
        {
            name: "Educación restaurativa en escuelas",
            image: Violencia,
            color: "bg-fara-gold/80",
            to: "/escuelas"
        },
        {
            name: "Facilitación, mediación y círculos",
            image: imgCircArt,
            color: "bg-fara-blue/80",
            to: "/socios"
        },
        {
            name: "Género y diversidad",
            image: GeneroDiversidad,
            color: "bg-fara-gray/80",
            to: "/generoydiversidad"
        },
        {
            name: "Relaciones Laborales y conflictos en el trabajo",
            image: RelacionesLaborales,
            color: "bg-fara-blue/80",
            to: "/relacionestrabajo"
        },
    ]

    return (
        <section className="flex flex-col justify-center px-4 py-16 text-pretty lg:px-32 lg:py-32">
            <h2 className="mb-6 text-center text-2xl font-extrabold text-balance lg:text-3xl lg:font-bold">
                NUESTROS EQUIPOS MULTIDISCIPLINARIOS
            </h2>
            <p className="mb-12 grid max-w-[65ch] self-center text-center text-xl text-balance">
                La Fundación cuenta con equipos interdisciplinarios que estudian, analizan y desarrollan proyectos en
                múltiples áreas de incidencia.
            </p>
            <div className="grid gap-4 md:grid-cols-3 xl:grid-cols-4">
                {areas.map((area, index) => (
                    <Link
                        key={area.name + index}
                        className="relative flex h-64 flex-col justify-center p-4 drop-shadow-lg md:h-56 md:p-5 lg:h-88 group"
                        to={area.to}
                        aria-label={`Ver más acerca de ${area.name}.`}
                        style={{
                            backgroundImage: `url(${area.image})`,
                            backgroundSize: "cover",
                            backgroundPosition: "center",
                        }}
                    >
                        {/* Capa de color con opacidad */}
                        <div
                            className={`absolute top-0 left-0 h-full w-full ${area.color} group-hover:bg-black/60 transition-colors duration-300 ease-in-out`}
                        ></div>

                        {/* Texto alineado al fondo */}
                        <h3 className="uppercase relative z-10 mb-2 text-center text-2xl text-white font-bold lg:mb-4 lg:text-3xl">
                            {area.name}
                        </h3>
                    </Link>
                ))}
            </div>
        </section>
    )
}
