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
                className={`ml-4 grid w-full grid-cols-1 gap-6 overflow-x-auto p-[0px] py-5 transition-[height] duration-300 ease-in-out sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 ${!showAll ? "h-120 overflow-hidden" : "h-full"}`}
            >
                {INTEGRANTES.map((member, index) => (
                    <div key={index} className="relative m-5 mx-auto h-70 w-70">
                        <div className="absolute top-8 h-58 w-60 translate-y-10 bg-white"></div>
                        <img
                            src={member.photo}
                            alt={member.name}
                            className="relative z-5 mx-auto h-50 w-50 -translate-x-5 object-cover"
                        />
                        <div className="mx-auto flex h-63 w-55 -translate-x-5 -translate-y-40 flex-col justify-end bg-gray-200 py-7 text-center">
                            <h3 className={`mx-auto mb-1 w-47 text-lg font-semibold ${member.color}`}>{member.name}</h3>
                            <p className="text-base">{member.position}</p>
                        </div>
                    </div>
                ))}
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
