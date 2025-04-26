import { DiplomaturaImage } from "../assets/capacitaciones"
import { useState, useEffect, useRef, useCallback } from "react"

const slides = [
    {
        image: DiplomaturaImage,
        tittle: "Capacitaciones",
        text: "Capacitamos a profesionales y empleados estatales en resolución de conflictos y trabajo en contextos de encierro, por ejemplo en nuestra Diplomatura en Justicia Restaurativa aplicada al Ámbito Judicial.",
    },
    {
        image: DiplomaturaImage,
        tittle: "Capacitaciones",
        text: "Capacitamos a profesionales y empleados estatales en resolución de conflictos y trabajo en contextos de encierro, por ejemplo en nuestra Diplomatura en Justicia Restaurativa aplicada al Ámbito Judicial.",
    },
    {
        image: DiplomaturaImage,
        tittle: "Capacitaciones",
        text: "Capacitamos a profesionales y empleados estatales en resolución de conflictos y trabajo en contextos de encierro, por ejemplo en nuestra Diplomatura en Justicia Restaurativa aplicada al Ámbito Judicial.",
    },
]

export function CarrouselDonar() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const intervalRef = useRef(null)

    const resetInterval = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current)

        intervalRef.current = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
        }, 6000)
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
                        <li key={index} className="relative h-140 w-full flex-shrink-0 bg-[#555555] bg-cover bg-center">
                            <figure className="h-full w-full">
                                {/* Contenido */}
                                <figcaption className="absolute top-1/2 left-1/2 flex w-2/3 -translate-x-1/2 -translate-y-1/2 flex-col gap-2 md:gap-8">
                                    <div className="mx-auto flex h-full w-full max-w-200 -skew-x-5 flex-col items-center justify-center bg-white p-4 text-center md:flex-row md:p-6 lg:p-8">
                                        <img
                                            src={slide.image}
                                            alt={slide.tittle}
                                            className="h-40 max-w-50 skew-x-5 sm:h-full"
                                        />
                                        <div className="flex skew-x-5 flex-col p-2 text-center md:gap-4">
                                            <h3 className="place-items-center text-lg font-bold uppercase md:text-2xl lg:text-4xl">
                                                {slide.tittle}
                                            </h3>
                                            <p className="px-5 text-left text-xs sm:text-sm md:text-base md:text-lg">
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
