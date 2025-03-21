import { img1, img2, img3, img4, img5 } from "../assets/hero-carrousel"
import { useState, useEffect, useRef, useCallback } from "react"

const slides = [
    {
        image: img1,
        text: "Impulsamos prácticas restaurativas",
        color: "#A82428A1",
        buttonText: "Contáctanos",
        buttonColor: "#e3a647",
    },
    {
        image: img2,
        text: "Las donaciones nos ayudan a restaurar vidas",
        color: "#E3A647A1",
        buttonText: "Dona hoy",
        buttonColor: "#C0322D",
    },
    {
        image: img3,
        text: "Capacitate con nuestras pasantías restaurativas",
        color: "#2FAEA5A1",
        buttonText: "Más información",
        buttonColor: "#C0322D",
    },
    {
        image: img4,
        text: "Súmate a nuestros voluntariados",
        color: "#3999BFA1",
        buttonText: "Más información",
        buttonColor: "#C0322D",
    },
    {
        image: img5,
        text: "Nuestros servicios para organizaciones",
        color: "#B9CE48A1",
        buttonText: "Más información",
        buttonColor: "#C0322D",
    },
]

export function Carrousel() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const intervalRef = useRef(null)

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length)
        resetInterval()
    }, [])

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length)
        resetInterval()
    }, [])

    const resetInterval = useCallback(() => {
        if (intervalRef.current) clearInterval(intervalRef.current)
        intervalRef.current = setInterval(nextSlide, 3000)
    }, [nextSlide])

    useEffect(() => {
        resetInterval()
        return () => clearInterval(intervalRef.current)
    }, [resetInterval])

    return (
        <div className="relative h-[calc(100vh-10rem)] w-full overflow-x-hidden shadow-lg">
            <div
                className="flex transition-transform duration-1000 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {slides.map((slide, index) => (
                    <div
                        key={index}
                        className="relative h-[calc(100vh-10rem)] w-full flex-shrink-0 bg-cover bg-center"
                        style={{ backgroundImage: `url(${slide.image})` }}
                    >
                        {/* Capa de color con transparencia 1 */}
                        <div
                            className="absolute h-full w-full [clip-path:polygon(0_0,65%_0,60%_100%,0_100%)] lg:[clip-path:polygon(0_0,50%_0,40%_100%,0_100%)]"
                            style={{
                                background: `linear-gradient(to bottom, ${slide.color}, ${slide.color})`,
                            }}
                        ></div>

                        {/* Capa de color con transparencia 2 */}
                        <div
                            className="absolute h-full w-full [clip-path:polygon(0_5%,75%_5%,70%_100%,0_100%)] lg:[clip-path:polygon(0_10%,55%_10%,45%_100%,0_100%)]"
                            style={{
                                background: `linear-gradient(to bottom, ${slide.color}, ${slide.color})`,
                            }}
                        ></div>

                        {/* Contenido */}
                        <div className="absolute top-2/5 left-15 w-1/2 text-white lg:left-40">
                            <h2 className="text-outline-sm lg:[.text-outline-lg] max-w-[16ch] text-xl font-bold uppercase md:text-3xl lg:text-4xl">
                                {slide.text}
                            </h2>
                            <button
                                className="text-outline-sm mt-4 grid min-h-12 min-w-12 place-items-center pr-8 pl-6 text-sm font-semibold text-white hover:cursor-pointer hover:bg-white lg:text-xl"
                                style={{
                                    backgroundColor: slide.buttonColor,
                                    clipPath: "polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)",
                                }}
                            >
                                {slide.buttonText}
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {/* Botón anterior */}
            <button
                onClick={prevSlide}
                className="absolute top-1/2 left-1 min-h-12 min-w-12 -translate-y-1/2 transform rounded-full bg-black text-white hover:cursor-pointer hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black active:bg-gray-100 active:text-black lg:left-4"
            >
                ❮
            </button>

            {/* Botón siguiente */}
            <button
                onClick={nextSlide}
                className="absolute top-1/2 right-1 min-h-12 min-w-12 -translate-y-1/2 transform rounded-full bg-black text-white hover:cursor-pointer hover:bg-gray-100 hover:text-black focus:bg-gray-100 focus:text-black active:bg-gray-100 active:text-black lg:right-4"
            >
                ❯
            </button>
        </div>
    )
}
