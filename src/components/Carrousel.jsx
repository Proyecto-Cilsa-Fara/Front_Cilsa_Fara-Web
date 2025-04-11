import { img1, img2, img3, img4, img5 } from "../assets/hero-carrousel"
import { useState, useEffect, useRef, useCallback } from "react"
import { Link } from "react-router"

const slides = [
    {
        image: img1,
        text: "Impulsamos prácticas restaurativas",
        color: "#A82428A1",
        buttonText: "Contáctanos",
        buttonColor: "bg-fara-gold",
        link: "/#",
    },
    {
        image: img2,
        text: "Las donaciones nos ayudan a restaurar vidas",
        color: "#E3A647A1",
        buttonText: "Dona hoy",
        buttonColor: "bg-fara-red",
        link: "/donar",
    },
    {
        image: img3,
        text: "Capacitate con nuestras pasantías restaurativas",
        color: "#2FAEA5A1",
        buttonText: "Más información",
        buttonColor: "bg-fara-red",
        link: "/capacitaciones",
    },
    {
        image: img4,
        text: "Súmate a nuestros voluntariados",
        color: "#3999BFA1",
        buttonText: "Más información",
        buttonColor: "bg-fara-red",
        link: "/participa",
    },
    {
        image: img5,
        text: "Nuestros servicios para organizaciones",
        color: "#B9CE48A1",
        buttonText: "Más información",
        buttonColor: "bg-fara-red",
        link: "/asesoramiento",
    },
]

export function Carrousel() {
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
        <section className="relative h-[calc(100svh-10rem)] w-full overflow-x-hidden shadow-lg">
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
                    <li
                        key={index}
                        className="relative h-[calc(100svh-10rem)] w-full flex-shrink-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        <figure className="h-full w-full">
                            {/* Capas de color */}
                            <div
                                className="absolute h-full w-full [clip-path:polygon(0_0,85%_0,80%_100%,0_100%)] lg:[clip-path:polygon(0_0,50%_0,40%_100%,0_100%)]"
                                style={{
                                    background: `linear-gradient(to bottom, ${slide.color}, ${slide.color})`,
                                }}
                            ></div>

                            <div
                                className="absolute h-full w-full [clip-path:polygon(0_5%,95%_5%,90%_100%,0_100%)] lg:[clip-path:polygon(0_10%,55%_10%,45%_100%,0_100%)]"
                                style={{
                                    background: `linear-gradient(to bottom, ${slide.color}, ${slide.color})`,
                                }}
                            ></div>

                            {/* Contenido */}
                            <figcaption className="absolute top-1/2 left-15 flex w-2/3 -translate-y-1/2 flex-col gap-8 text-white lg:left-40">
                                <h3 className="text-outline-sm lg:[.text-outline-lg] grid h-36 max-w-[16ch] place-items-center text-2xl font-bold uppercase lg:text-4xl">
                                    {slide.text}
                                </h3>
                                <Link
                                    disabled={currentIndex !== index}
                                    className={`text-outline-sm hover:bg-fara-gray focus:bg-fara-gray active:bg-fara-gray grid min-h-12 w-64 place-items-center pr-8 pl-6 text-xl font-semibold text-white [clip-path:polygon(0_0,100%_0,90%_100%,0_100%)] hover:cursor-pointer lg:text-2xl ${slide.buttonColor}`}
                                    type="button"
                                    to={slide.link}
                                    aria-label={slide.buttonText}
                                >
                                    {slide.buttonText}
                                </Link>
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
        </section>
    )
}
