import ImagenAcercaDeNosotros from "../assets/Acerca-de-nosotros-image.webp"

export function AcercaDeNosotros() {
    return (
        <section className="w-full p-8 py-50 text-center text-black">
            <h1 className="text-xl font-bold sm:text-2xl md:py-10 md:text-3xl lg:text-4xl">ACERCA DE NOSOTROS</h1>
            <div className="flex w-full flex-col items-center md:flex-row md:py-10 2xl:px-40">
                <img
                    src={ImagenAcercaDeNosotros}
                    alt="Imagen de varias personas en una reunión"
                    className="aspect-auto w-120 object-cover py-5 md:aspect-3/4 md:w-80 xl:aspect-auto xl:w-128"
                />

                <p className="text-center text-base text-balance sm:px-20 sm:text-lg md:px-5 md:text-left md:text-2xl">
                    FARA fue fundada por Silvina y Silvana Paz, con el objetivo de implementar una metodología de acción
                    e investigación, respetuosa de los Derechos Humanos fundamentales de todos los individuos, a fin
                    restaurar y fortalecer los lazos sociales y humanitarios. Esto es realizado mediante proyectos de
                    innovación social que dan una respuesta integral a los conflictos sociales suscitados en distintos
                    ámbitos, obteniendo respuestas eficaces.
                </p>
            </div>
        </section>
    )
}
