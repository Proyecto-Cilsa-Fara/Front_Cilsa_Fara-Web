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
        { name: "Justicia restaurativa para las víctimas", image: Justicia, color: "#C0322DCC" },
        { name: "Procesos de restauración para conductas agresivas", image: Politicas, color: "#47B3DED6" },
        { name: "Bullying, acoso, amenazas y daños", image: Educacion, color: "#E3A647D1" },
        { name: "Violencia y explotación sexual", image: Explotacion, color: "#555555C2" },
        { name: "Delitos en línea, deepfake y suplantación de identidad", image: Delitos, color: "#555555C2" },
        { name: "Prácticas restaurativas en cárceles para prevenir la reincidencia", image: Niñez, color: "#b9ce48B5" },
        { name: "Educación restaurativa en escuelas", image: Violencia, color: "#47B3DED6" },
        { name: "Facilitación, mediación y círculos", image: imgCircArt, color: "#C0322DCC" },
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
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 xl:grid-cols-4">
                {areas.map((area, index) => (
                    <Link
                        key={index}
                        className="relative flex h-64 flex-col justify-end bg-cover bg-center p-4 text-center font-bold text-white drop-shadow-lg transition-opacity duration-300 ease-in-out hover:cursor-pointer hover:opacity-50 focus:opacity-50 active:opacity-50 md:h-56 md:p-5 lg:h-88"
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
                        <h3 className="text-outline-sm relative z-10 mb-2 text-left text-xl text-white lg:mb-4 lg:text-2xl">
                            {area.name}
                        </h3>
                    </Link>
                ))}
            </div>
        </section>
    )
}
