// Emite las fotos de integrantes como assets reales del build. Sin esto, las rutas
// "/src/assets/..." del array solo funcionan en dev y se rompen en build/preview
// (mismo patrón que useGallery.jsx).
const integrantesImages = import.meta.glob('/src/assets/integrantes/*.webp', {
  eager: true,
  query: '?url',
  import: 'default',
})

const equipoDiciplinario = [
  {
    id: 0,
    nombre: "Dra. Silvina M. Paz",
    rol: "Dirección académica e institucional",
    image: "/src/assets/integrantes/SilvinaPaz.webp",
    description: "Abogada con sólida formación en Derechos Humanos y Justicia Restaurativa",
  },
  {
    id: 1,
    nombre: "Dra. Silvana S. Paz",
    rol: "Dirección académica e institucional",
    image: "/src/assets/integrantes/SilvanaPaz.webp",
    description: "Abogada con sólida formación en Derechos Humanos y Justicia Restaurativa",
  },
  {
    id: 2,
    nombre: "Lic. Constanza Ochoa",
    rol: "Docente",
    image: "/src/assets/integrantes/Constanza.webp",
    description: "Psicóloga, trabaja en clínica con adolescentes y adultos desde un enfoque interdisciplinario",
  },
  {
    id: 3,
    nombre: "Lic. Alejandra Barranquero",
    rol: "Docente",
    image: "/src/assets/integrantes/AlejandraBarranquero.webp",
    description: "Artista plástica y educadora que impulsa procesos creativos con compromiso social",
  },
  {
    id: 4,
    nombre: "Lic. Eliana Catoggio",
    rol: "Docente",
    image: "/src/assets/integrantes/ElianaCatoggio.webp",
    description: "Licenciada en Trabajo Social que impulsa procesos creativos",
  },
  {
    id: 5,
    nombre: "Lic. Cynthia Beilis",
    rol: "Docente",
    image: "/src/assets/integrantes/Cintia.webp",
    description: "Formada en Administración de Empresas, Derecho y Psicología de la Familia. Especializada en gestión de recursos y alianzas institucionales",
  },
]

export function EquipoDiciplinario() {
  return (
    <section className="flex flex-col justify-center items-center w-full gap-16 py-12 px-10 md:py-20 md:px-32">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="relative">
          <div className="skew-custom absolute w-full translate-x-3 -translate-y-2 bg-fara-cyan px-5 py-6 md:translate-x-5 md:-translate-y-3 md:px-7 lg:py-9"></div>
          <div className="skew-custom absolute w-full -translate-x-3 translate-y-2 bg-fara-red px-5 py-6 md:-translate-x-3 md:translate-y-4 md:px-7 lg:py-9"></div>
          <h2 className="skew-custom text-xl relative w-full bg-fara-gold px-6 py-3 font-bold md:text-2xl lg:text-5xl lg:pr-12">
            Nuestro Equipo
          </h2>
        </div>
        <p className="text-lg text-center max-w-4xl md:text-xl lg:text-2xl">
          El área está integrada por profesionales del derecho, la psicología, el trabajo social, la educación y la facilitación restaurativa, con trayectoria territorial, académica e institucional.
        </p>
      </div>

      <div className="grid gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 max-w-5xl">
        {equipoDiciplinario.map((integrante) =>
          <div className="text-center" key={integrante.id}>
            <div className="overflow-hidden rounded-full w-30 h-30 m-auto flex items-center justify-center">
              <img
                src={integrantesImages[integrante.image] ?? integrante.image}
                alt={integrante.nombre}
                loading="lazy"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col mt-6">
              <span className="text-xl font-bold">{integrante.nombre}</span>
              <span className="text-lg font-medium">{integrante.rol}</span>
            </div>
            <p className="text-base mt-4">{integrante.description}</p>
          </div>
        )}
      </div>
    </section>
  )
}
