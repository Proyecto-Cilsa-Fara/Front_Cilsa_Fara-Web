import ImagenAcercaDeNosotros from "../assets/Acerca-de-nosotros-image.webp"

export function AcercaDeNosotros() {
    return (
        <section className="w-full p-8 pt-20 pb-25 text-center text-black">
            <h1 className="text-xl font-bold sm:text-2xl md:py-10 md:text-3xl lg:text-4xl">ACERCA DE NOSOTROS</h1>
            <div className="flex w-full flex-col items-center md:flex-row md:py-10 2xl:px-40">
                <img
                    src={ImagenAcercaDeNosotros}
                    alt="Imagen de varias personas en una reunión"
                    className="aspect-auto w-120 object-cover py-5 md:aspect-3/4 md:w-80 xl:aspect-auto xl:w-128"
                />

                <p className="text-center text-base text-balance sm:px-20 sm:text-lg md:px-5 md:text-left md:text-2xl">
                    FARA (Fundación Acción Restaurativa Argentina) fue fundada por Silvina y Silvana Paz con el
                    compromiso de construir comunidades más justas, inclusivas y pacíficas. Su labor se centra en el
                    desarrollo de proyectos de innovación social basados en la justicia restaurativa, la dignidad humana
                    y el acceso a derechos fundamentales. A través de una metodología territorial y colaborativa, FARA
                    impulsa procesos de reparación, diálogo y fortalecimiento de vínculos, generando respuestas
                    integrales y humanas ante los conflictos sociales.
                </p>
            </div>
        </section>
    )
}
