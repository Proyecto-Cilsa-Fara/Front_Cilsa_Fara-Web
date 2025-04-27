import { DiplomaturaImage, EncierroImage, EscolarImage, VoluntariadosImage } from "../assets/carrousel-donar"
import { useState, useEffect, useRef, useCallback } from "react"

const slides = [
    {
        image: DiplomaturaImage,
        tittle: "Capacitaciones",
        text: "Capacitamos a profesionales y empleados estatales en resolución de conflictos y trabajo en contextos de encierro, por ejemplo en nuestra Diplomatura en Justicia Restaurativa aplicada al Ámbito Judicial.",
    },
    {
        image: EncierroImage,
        tittle: "Nuestro trabajo en Cárceles",
        text: "Promovemos la Justicia Restaurativa dentro de establecimientos penitenciarios, acompañando procesos de diálogo, reparación y reinserción social a través de talleres, círculos de diálogo y formación a internos y personal penitenciario.",
    },
    {
        image: EscolarImage,
        tittle: "Nuestro trabajo en Escuelas",
        text: "Implementamos programas de convivencia pacífica y mediación escolar en instituciones educativas, brindando herramientas para la gestión positiva de conflictos y fortaleciendo comunidades escolares inclusivas y respetuosas.",
    },
    {
        image: VoluntariadosImage,
        tittle: "Voluntariados",
        text: "Ofrecemos espacios de voluntariado para quienes desean involucrarse activamente en proyectos de Justicia Restaurativa, facilitando talleres, acompañando procesos comunitarios y generando redes de solidaridad y transformación social.",
    },
]

export function CarrouselDonar() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const intervalRef = useRef(null)

    const resetInterval = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current)

        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
        }, 90000)
    }, [])

    const prevSlide = useCallback(() => {
        setCurrentIndex((currentIndex) => (currentIndex - 1 + slides.length) % slides.length)
        resetInterval()
    }, [resetInterval])

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
        resetInterval()
    }, [resetInterval])

    useEffect(() => {
        resetInterval()
        return () => clearInterval(intervalRef.current)
    }, [resetInterval])

    return (
        <section className="w-full">
            <div className="w-full py-10 text-center md:py-15">
                <h2 className="text-lg font-bold sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">
                    Nuestro trabajo en Argentina y el mundo
                </h2>
            </div>
            <div className="relative h-140 w-full overflow-x-hidden shadow-lg">
                {/* Botón anterior */}
                <button
                    aria-disabled={currentIndex < 1}
                    type="button"
                    onClick={currentIndex > 0 ? prevSlide : undefined}
                    onMouseDown={(e) => e.preventDefault()}
                    onBlur={(e) => e.target.blur()}
                    aria-label="Slide anterior"
                    className="absolute top-1/2 left-1 z-1 min-h-12 min-w-12 -translate-y-1/2 transform rounded-full bg-black text-white hover:cursor-pointer hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black active:bg-gray-100 active:text-black lg:left-4"
                >
                    ❮
                </button>

                {/* Slides del carrusel */}
                <ul
                    className="flex transition-transform duration-1500 ease-in-out lg:duration-3000"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {slides.map((slide, index) => (
                        <li key={index} className="bg-fara-gray relative h-140 w-full flex-shrink-0 bg-cover bg-center">
                            <figure className="h-full w-full">
                                {/* Contenido */}
                                <figcaption className="absolute top-1/2 left-1/2 flex h-4/5 w-2/3 -translate-x-1/2 -translate-y-1/2 flex-col gap-2 md:gap-8">
                                    <div className="mx-auto flex h-full w-full -skew-x-2 flex-col items-center justify-center gap-4 bg-white p-8 text-center md:max-w-400 md:-skew-x-5 md:flex-row md:gap-8 md:p-6 lg:p-16">
                                        <img
                                            src={slide.image}
                                            alt={slide.tittle}
                                            className="aspect-3/2 w-80 overflow-hidden rounded-2xl object-cover object-top md:skew-x-5 lg:w-1/3"
                                            width="1024px"
                                            height="400px"
                                        />
                                        <div className="flex w-full skew-x-2 flex-col justify-center gap-4 md:skew-x-5 md:gap-8 md:p-2 lg:w-2/3">
                                            <h3 className="flex w-full text-left text-lg font-bold uppercase md:min-h-[2rlh] md:text-xl lg:text-2xl xl:text-4xl">
                                                {slide.tittle}
                                            </h3>
                                            <p className="flex w-full skew-x-2 items-center text-left text-xs text-balance sm:text-sm md:min-h-[5rlh] md:text-lg xl:text-2xl">
                                                {slide.text}
                                            </p>
                                        </div>
                                    </div>
                                </figcaption>
                            </figure>
                        </li>
                    ))}
                </ul>

                {/* Botón siguiente */}
                <button
                    type="button"
                    onClick={nextSlide}
                    onMouseDown={(e) => e.preventDefault()}
                    onBlur={(e) => e.target.blur()}
                    aria-label="Slide siguiente"
                    className="absolute top-1/2 right-1 min-h-12 min-w-12 -translate-y-1/2 transform rounded-full bg-black text-white hover:cursor-pointer hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black active:bg-gray-100 active:text-black lg:right-4"
                >
                    ❯
                </button>
            </div>
        </section>
    )
}
