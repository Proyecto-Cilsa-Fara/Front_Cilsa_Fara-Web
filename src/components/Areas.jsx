import {
    imgCircArt,
    Educacion,
    Delitos,
    Justicia,
    Niñez,
    Politicas,
    Explotacion,
    Violencia,
} from "../assets/equipos-multidisciplinarios"
import { Link } from "react-router"

export function Areas() {
    const areas = [
        {
            name: "Violencia y explotación sexual",
            image: Explotacion,
            color: "bg-fara-gray/80",
            to: "/institucional#violencia-genero",
        },
        {
            name: "Niñez y Juventud",
            image: Niñez,
            color: "bg-fara-gold/80",
            to: "/institucional#ninez-juventud",
        },
        {
            name: "Justicia restaurativa para las víctimas",
            image: Justicia,
            color: "bg-fara-blue/80",
            to: "/institucional#justicia-victimas",
        },
        {
            name: "Políticas públicas restaurativas",
            image: Politicas,
            color: "bg-fara-red/80",
            to: "/institucional#politicas-publicas",
        },
        {
            name: "Facilitación y Mediación en la justicia",
            image: Delitos,
            color: "bg-fara-red/80",
            to: "/institucional#facilitacion-mediacion",
        },
        {
            name: "Educación e inclusión de grupos vulnerables",
            image: Educacion,
            color: "bg-fara-lime/80",
            to: "/institucional#educacion-inclusion",
        },
        {
            name: "Escuela de oficios para emprendedores",
            image: Violencia,
            color: "bg-fara-gold/80",
            to: "/institucional#escuela-oficios",
        },
        {
            name: "Círculos de Arte",
            image: imgCircArt,
            color: "bg-fara-blue/80",
            to: "/institucional#circulos-arte",
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
                        className="group relative flex h-64 flex-col justify-center p-4 drop-shadow-lg md:h-56 md:p-5 lg:h-88"
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
                            className={`absolute top-0 left-0 h-full w-full ${area.color} transition-colors duration-300 ease-in-out group-hover:bg-black/60`}
                        ></div>

                        {/* Texto alineado al fondo */}
                        <h3 className="relative z-10 mb-2 text-center text-2xl font-bold text-white uppercase lg:mb-4 lg:text-3xl">
                            {area.name}
                        </h3>
                    </Link>
                ))}
            </div>
        </section>
    )
}
