import { useState, useEffect, useRef } from "react"
import { INTEGRANTES } from "../assets/integrantes"

export function Integrantes() {
    const [showAll, setShowAll] = useState(false)
    const containerRef = useRef(null)
    const prevShowAllRef = useRef(showAll)

    useEffect(() => {
        if (prevShowAllRef.current === true && showAll === false) {
            containerRef.current?.scrollIntoView({
                behavior: "smooth",
                block: "start",
            })
        }
        prevShowAllRef.current = showAll
    }, [showAll])

    return (
        <section className="bg-fara-cyan w-full px-5 py-10 md:px-10 lg:px-15 xl:px-20 2xl:px-40">
            <h1 className="bg-fara-gold mx-auto w-70 py-1 text-center text-3xl font-bold">INTEGRANTES</h1>

            <div
                ref={containerRef}
                className={`mx-auto w-full p-0 py-5 transition-[height] duration-300 ease-in-out ${!showAll ? "integrantes h-140 overflow-hidden" : "h-full"}`}
            >
                {/* OJO: Acá sí los mapeás, pero no pongas `flex` en este contenedor */}
                <div className="flex flex-col gap-4">
                    {INTEGRANTES.map((member, index) => (
                        <div
                            key={index}
                            className="mx-auto mb-8 flex w-full max-w-5xl -skew-x-5 flex-col overflow-hidden bg-white shadow-2xl md:flex-row"
                        >
                            {/* Imagen */}
                            <div className="w-full skew-x-5 p-8 md:w-1/3">
                                <img
                                    src={member.photo}
                                    alt={member.name}
                                    className="aspect-square overflow-hidden rounded-2xl object-cover object-center"
                                    width="800px"
                                    height="800px"
                                />
                            </div>

                            {/* Contenido */}
                            <div className="flex w-full skew-x-5 flex-col justify-center p-6 md:w-2/3">
                                <h3 className={`mb-2 text-2xl font-bold ${member.color}`}>{member.name}</h3>
                                <p className="text-fara-gray mb-4 text-lg font-medium">{member.position}</p>
                                <p className="text-base text-black">{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <button
                className="active:bg-fara-gold hover:bg-fara-gold relative z-5 mx-auto block w-full bg-black py-3 text-center text-xl font-bold tracking-wide text-white uppercase shadow-2xl transition-colors duration-300 ease-in-out hover:cursor-pointer md:text-2xl"
                onClick={() => setShowAll(!showAll)}
                aria-label={showAll ? "Ver menos integrantes" : "Ver más integrantes"}
            >
                {showAll ? "VER MENOS" : "VER MÁS"}
            </button>
        </section>
    )
}
