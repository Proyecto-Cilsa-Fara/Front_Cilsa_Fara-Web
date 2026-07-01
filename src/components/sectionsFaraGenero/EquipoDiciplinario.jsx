import React from 'react'

const equipoDiciplinario = [
  {
    id: 0,
    nombre: "Dra. Silvina M. Paz",
    rol: "Dirección académica e institucional",
    image: "/src/assets/integrantes/SilvinaPaz.webp",
    description: "Abogada con sólida formación en Derechos Humanos y Justicia Restaurativa",
    linkedIn: "/link",
    linkX: "/X"
  },
  {
    id: 1,
    nombre: "Dra. Silvana S. Paz",
    rol: "Dirección académica e institucional",
    image: "/src/assets/integrantes/SilvanaPaz.webp",
    description: "Abogada con sólida formación en Derechos Humanos y Justicia Restaurativa",
    linkedIn: "/link",
    linkX: "/X"
  },
  {
    id: 2,
    nombre: "Lic. Constanza Ochoa",
    rol: "Docente",
    image: "/src/assets/integrantes/Constanza.webp",
    description: "Psicóloga, trabaja en clínica con adolescentes y adultos desde un enfoque interdisciplinario",
    linkedIn: "/link",
    linkX: "/X"
  },
  {
    id: 3,
    nombre: "Lic. Alejandra Barranquero",
    rol: "Docente",
    image: "/src/assets/integrantes/AlejandraBarranquero.webp",
    description: "Artista plástica y educadora que impulsa procesos creativos con compromiso social",
    linkedIn: "/link",
    linkX: "/X"
  },
  {
    id: 4,
    nombre: "Lic. Eliana Catogio",
    rol: "Docente",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    description: "Description",
    linkedIn: "/link",
    linkX: "/X"
  },
  {
    id: 5,
    nombre: "Lic. Eliana Servera",
    rol: "Docente",
    image: "https://randomuser.me/api/portraits/men/75.jpg",
    description: "Description",
    linkedIn: "/link",
    linkX: "/X"
  },
  {
    id: 6,
    nombre: "Lic. Cynthia Beilis",
    rol: "Docente",
    image: "/src/assets/integrantes/Cintia.webp",
    description: "Formada en Administración de Empresas, Derecho y Psicología de la Familia. Especializada en gestión de recursos y alianzas institucionales",
    linkedIn: "/link",
    linkX: "/X"
  },
]

export function EquipoDiciplinario() {
  return (
    <section className="flex flex-col justify-center items-center w-full gap-16 py-12 px-10 md:py-20 md:px-32">
      <div className="flex flex-col items-center justify-center">
        <h2 className="text-xl font-bold md:text-2xl lg:text-5xl mb-5 text-center">
          Nuestro Equipo
        </h2>
        <p className="text-lg text-center max-w-4xl md:text-xl lg:text-2xl">
          El área está integrada por profesionales del derecho, la psicología, el trabajo social, la educación y la facilitación restaurativa, con trayectoria territorial, académica e institucional.
        </p>
      </div>

      <div className="grid gap-x-4 gap-y-8 md:grid-cols-3 lg:grid-cols-4 max-w-5xl">
        {equipoDiciplinario.map((integrante) =>
          <div className="text-center" key={integrante.id}>
            <div className="overflow-hidden rounded-full w-30 h-30 m-auto flex items-center justify-center">
              <img src={integrante.image} alt={integrante.nombre} className="" />
            </div>
            <div className="flex flex-col mt-6">
              <span className="text-xl font-bold">{integrante.nombre}</span>
              <span className="text-lg font-medium">{integrante.rol}</span>
            </div>
            <p className="text-base mt-4">{integrante.description}</p>
            <div className="flex justify-center gap-2 mt-6">
              <a href={integrante.linkedIn} aria-label={`${integrante.nombre} en LinkedIn`}>
                <svg aria-hidden="true" focusable="false" preserveAspectRatio="xMidYMid" width={20} height={20} viewBox="0 0 256 256"><path d="M218.123 218.127h-37.931v-59.403c0-14.165-.253-32.4-19.728-32.4-19.756 0-22.779 15.434-22.779 31.369v60.43h-37.93V95.967h36.413v16.694h.51a39.907 39.907 0 0 1 35.928-19.733c38.445 0 45.533 25.288 45.533 58.186l-.016 67.013ZM56.955 79.27c-12.157.002-22.014-9.852-22.016-22.009-.002-12.157 9.851-22.014 22.008-22.016 12.157-.003 22.014 9.851 22.016 22.008A22.013 22.013 0 0 1 56.955 79.27m18.966 138.858H37.95V95.967h37.97v122.16ZM237.033.018H18.89C8.58-.098.125 8.161-.001 18.471v219.053c.122 10.315 8.576 18.582 18.89 18.474h218.144c10.336.128 18.823-8.139 18.966-18.474V18.454c-.147-10.33-8.635-18.588-18.966-18.453" fill="#0A66C2" /></svg>
              </a>
              <a href={integrante.linkX} aria-label={`${integrante.nombre} en X`}>
                <svg aria-hidden="true" focusable="false" fill="none" width={20} height={20} viewBox="0 0 1200 1227"><path fill="#000" d="M714.163 519.284 1160.89 0h-105.86L667.137 450.887 357.328 0H0l468.492 681.821L0 1226.37h105.866l409.625-476.152 327.181 476.152H1200L714.137 519.284h.026ZM569.165 687.828l-47.468-67.894-377.686-540.24h162.604l304.797 435.991 47.468 67.894 396.2 566.721H892.476L569.165 687.854v-.026Z" /></svg>
              </a>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}