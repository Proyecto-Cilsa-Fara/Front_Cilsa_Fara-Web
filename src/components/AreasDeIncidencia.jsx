import { Areas } from "../assets/areas-de-incidencia"
import { useState, useEffect } from "react"

export function AreasDeIncidencia() {
    const [areaSeleccionada, setAreaSeleccionada] = useState(Areas[0])

    useEffect(() => {
        // Precargar todas las imágenes
        Areas.forEach((area) => {
            const img = new Image()
            img.src = area.image
        })
    }, [])

    return (
        <section className="w-full">
            <h2 className="m-15 text-center text-xl font-bold md:text-3xl">NUESTROS EQUIPOS Y ÁREAS DE INCIDENCIA</h2>

            <div className="flex flex-col md:flex-row">
                <div className="bg-fara-yellow flex flex-col justify-center px-10 py-10 md:w-1/2 xl:pr-20 xl:pl-30">
                    <h2 className="text-fara-red mb-4 text-left text-xl font-bold md:pr-40 md:text-3xl">
                        {areaSeleccionada.subtittle}
                    </h2>

                    <p className="text-lg font-semibold italic">
                        {areaSeleccionada.members.map((member, index) => {
                            return (
                                <span key={index}>
                                    {member}
                                    {index < areaSeleccionada.members.length - 1 ? ", " : "."}
                                </span>
                            )
                        })}
                    </p>

                    <hr className="my-10" />

                    <h2 className="mb-2 text-lg font-bold">OBJETIVOS</h2>
                    <ul className="space-y-2 text-justify">
                        {areaSeleccionada.objetives.map((objetivo, index) => (
                            <li key={index} className="list-decimal pl-2 md:pl-5">
                                {objetivo}
                            </li>
                        ))}
                    </ul>
                </div>

                <div
                    style={{ backgroundImage: `url(${areaSeleccionada.image})` }}
                    className="transition-bg flex flex-col justify-between bg-cover bg-center text-center md:w-1/2 md:justify-end 2xl:h-220"
                >
                    <h2 className="text-outline-lg my-10 text-2xl font-bold text-white uppercase md:my-30 md:text-3xl lg:text-5xl xl:px-30">
                        {areaSeleccionada.tittle}
                    </h2>
                    <ul className="space-y-1 p-4">
                        {Areas.map((area) => (
                            <li key={area.tittle}>
                                <button
                                    onClick={() => setAreaSeleccionada(area)}
                                    className={`w-full border py-1 text-center text-base font-semibold text-white transition-colors duration-300 ease-in-out hover:cursor-pointer ${
                                        areaSeleccionada.tittle === area.tittle
                                            ? "bg-fara-red/80"
                                            : "active:bg-fara-gold/80 hover:bg-fara-gold/80 focus:bg-fara-gold/80 bg-gray-950/50"
                                    }`}
                                >
                                    {area.tittle}
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <span className="block py-4"></span>
        </section>
    )
}
