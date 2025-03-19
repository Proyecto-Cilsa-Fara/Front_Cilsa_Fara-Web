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
        <div className="mx-auto max-w-4xl p-4 text-center">
            <h2 className="mb-2 text-xl font-bold md:text-2xl lg:text-3xl">NUESTROS EQUIPOS MULTIDISCIPLINARIOS</h2>
            <p className="mb-6 text-base md:text-lg lg:text-xl">
                La Fundación cuenta con equipos interdisciplinarios que estudian, analizan y desarrollan proyectos en
                múltiples áreas de incidencia.
            </p>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
                {areas.map((area, index) => (
                    <div
                        key={index}
                        className="relative flex h-48 flex-col justify-end bg-cover bg-center p-4 text-center font-bold text-white md:h-56 md:p-5 lg:h-64 lg:p-6"
                        style={{
                            backgroundImage: `url(${area.image})`,
                        }}
                    >
                        {/* Capa de color con opacidad */}
                        <div
                            className="absolute top-0 left-0 h-full w-full"
                            style={{
                                backgroundColor: area.color,
                                opacity: 0.5,
                            }}
                        ></div>

                        {/* Texto alineado al fondo */}
                        <span
                            className="relative z-10 mb-2 text-left text-lg text-white md:mb-3 md:text-xl lg:mb-4 lg:text-2xl"
                            style={{
                                textShadow: "2px 2px 5px rgba(0, 0, 0, 0.8)",
                            }}
                        >
                            {area.name}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}
