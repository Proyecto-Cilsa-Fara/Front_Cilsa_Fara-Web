import {
    imgCircArt,
    Educacion,
    Oficios,
    Facilitacion,
    Justicia,
    Niñez,
    Politicas,
    Violencia,
} from "../assets/equipos-multidisciplinarios"
import { Link } from "react-router"

export function Areas() {
    const areas = [
        { name: "Círculos de arte", image: imgCircArt, color: "#3999BFAB" },
        { name: "Educación e inclusión de grupos vulnerables", image: Educacion, color: "#E3A647D1" },
        { name: "Escuela de oficios emprendedores", image: Oficios, color: "#B9CE48C4" },
        { name: "Facilitación y mediación", image: Facilitacion, color: "#C0322DC2" },
        { name: "Justicia para víctimas", image: Justicia, color: "#C0322DC2" },
        { name: "Niñez y juventud", image: Niñez, color: "#2FAEA5B5" },
        { name: "Políticas Públicas", image: Politicas, color: "#47B3DED6" },
        { name: "Violencia de género y otras violencias", image: Violencia, color: "#E3A647CC" },
    ]

    return (
        <section className="flex flex-col justify-center px-4 py-16 text-pretty lg:px-32 lg:py-32">
            <h2 className="mb-6 text-center text-2xl font-bold md:text-3xl lg:text-5xl">
                NUESTROS EQUIPOS MULTIDISCIPLINARIOS
            </h2>
            <p className="mb-12 max-w-[65ch] self-center text-pretty md:text-2xl lg:text-3xl">
                La Fundación cuenta con equipos interdisciplinarios que estudian, analizan y desarrollan proyectos en
                múltiples áreas de incidencia.
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                {areas.map((area, index) => (
                    <Link
                        key={index}
                        className="relative flex h-64 flex-col justify-end bg-cover bg-center p-4 text-center font-bold text-white drop-shadow-lg hover:cursor-pointer md:h-56 md:p-5 lg:h-96"
                        to="/socios"
                        aria-label={`Ver más acerca de ${area.name}.`}
                        style={{
                            backgroundImage: `url(${area.image})`,
                        }}
                    >
                        {/* Capa de color con opacidad */}
                        <div
                            className="absolute top-0 left-0 h-full w-full"
                            style={{
                                backgroundColor: area.color,
                            }}
                        ></div>

                        {/* Texto alineado al fondo */}
                        <h3 className="text-outline-sm relative z-10 mb-2 text-left text-sm text-white md:mb-3 md:text-xl lg:mb-4 lg:text-3xl">
                            {area.name}
                        </h3>
                    </Link>
                ))}
            </div>
        </section>
    )
}
