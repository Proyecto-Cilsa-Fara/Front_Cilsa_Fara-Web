import img1 from "../assets/Hero-Carrousel/Hero1.jpg";
import img2 from "../assets/Hero-Carrousel/Hero2.jpg";
import img3 from "../assets/Hero-Carrousel/Hero3.jpg";
import img4 from "../assets/Hero-Carrousel/Hero4.jpg";
import img5 from "../assets/Hero-Carrousel/Hero5.jpg";
import { useState, useEffect } from "react";

export function Carrousel() {
  const slides = [
    { image: img1, text: "Impulsamos prácticas restaurativas", color1: "#A82428A1", color2: "#A8242878", buttonText: "Contáctanos", buttonColor: "#e3a647" },
    { image: img2, text: "Las donaciones nos ayudan a restaurar vidas", color1: "#E3A647A1", color2: "#E3A647A1", buttonText: "Dona hoy", buttonColor: "#C0322D" },
    { image: img3, text: "Capacitate con nuestras pasantías restaurativas", color1: "#2FAEA5A1", color2: "#2FAEA5A1", buttonText: "Más información", buttonColor: "#C0322D" },
    { image: img4, text: "Súmate a nuestros voluntariados", color1: "#3999BFA1", color2: "#3999BFA1", buttonText: "Más información", buttonColor: "#C0322D" },
    { image: img5, text: "Nuestros servicios para organizaciones", color1: "#B9CE48A1", color2: "#B9CE48A1", buttonText: "Más información", buttonColor: "#C0322D" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const interval = setInterval(nextSlide, 12000);
    return () => clearInterval(interval);
  }, );

  return (
    <div className="w-full h-96 overflow-hidden relative">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            className="w-full flex-shrink-0 relative h-96 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.image})` }}
          >
            {/* Capa de color con transparencia 1 */}
            <div
              className="absolute w-full h-full"
              style={{
                background: `linear-gradient(to bottom, ${slide.color1}, ${slide.color1})`,
                opacity: 0.5,
                clipPath: 'polygon(0% 0%, 50% 0%, 40% 100%, 0% 100%)',
              }}
            ></div>

            {/* Capa de color con transparencia 2 */}
            <div
              className="absolute w-full h-full"
              style={{
                background: `linear-gradient(to bottom, ${slide.color2}, ${slide.color2})`,
                opacity: 0.5,
                clipPath: 'polygon(0% 10%, 55% 10%, 45% 100%, 0% 100%)',
              }}
            ></div>

            {/* Contenido */}
            <div className="absolute bottom-10 left-10 text-white w-1/2 max-w-[45%]">
              <h2 className="text-4xl font-bold drop-shadow-lg uppercase">{slide.text}</h2>
              <button
                className="mt-4 px-6 py-2 text-white text-lg hover:underline "
                style={{
                  backgroundColor: slide.buttonColor,
                  clipPath: 'polygon(0% 0%, 100% 0%, 90% 100%, 0% 100%)', // Forma del botón
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
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
      >
        ❮
      </button>

      {/* Botón siguiente */}
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-3 rounded-full"
      >
        ❯
      </button>
    </div>
  );
}

