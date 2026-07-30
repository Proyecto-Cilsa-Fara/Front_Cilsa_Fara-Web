const recursos = [
  {
    category: "Contenido Descargable",
    items: [
      {
        title: "Materiales descargables",
        description:
          "Ministerio de las Mujeres y Diversidad de la Provincia de Buenos Aires. Cuadernillos, guías prácticas y material de trabajo con perspectiva de género.",
        url: "https://www.gba.gob.ar/mujeres/materiales",
      },
      {
        title: "Guías y publicaciones",
        description:
          "Publicaciones oficiales con información actualizada sobre derechos, políticas públicas y abordajes en violencia de género.",
        url: "https://www.gba.gob.ar/mujeres/guias",
      },
      {
        title: "Recursero Provincial",
        description:
          "Directorio de recursos provinciales para la atención, contención y derivación en situaciones de violencia por razones de género.",
        url: "https://www.gba.gob.ar/mujeres/recursero",
      },
      {
        title: "Ordenanza Nº 12.663",
        description:
          "Mesa Local Intersectorial para la Prevención, Abordaje y Salida de las Violencias por Razones de Género — Municipalidad de La Plata.",
        url: "https://www.concejodeliberante.laplata.gob.ar/uploads/digesto/nuevos/or12663.pdf",
      },
    ],
  },
  {
    category: "Organismos y Recursos",
    items: [
      {
        title: "Ministerio de Mujeres PBA",
        description:
          "Portal oficial con acceso a programas, legislación, materiales y canales de asistencia en toda la provincia.",
        url: "https://www.gba.gob.ar/mujeres",
      },
      {
        title: "Argentina.gob.ar - Géneros",
        description:
          "Portal nacional con información sobre políticas de género, diversidad sexual y prevención de violencias.",
        url: "https://www.argentina.gob.ar/generos",
      },
      {
        title: "Oficina de la Mujer - CSJN",
        description:
          "Datos, investigaciones y recursos de la Oficina de la Mujer de la Corte Suprema de Justicia de la Nación.",
        url: "https://www.csjn.gov.ar/om",
      },
      {
        title: "Oficina de Violencia Doméstica",
        description:
          "Dispositivo de la CSJN que brinda atención inmediata y asesoramiento en situaciones de violencia doméstica.",
        url: "https://www.csjn.gov.ar/oficina-de-violencia-domestica",
      },
      {
        title: "Centro de Asistencia a la Víctima",
        description:
          "Asistencia integral, patrocinio jurídico y acompañamiento psicológico para víctimas de delitos.",
        url: "https://www.argentina.gob.ar/justicia/centrodeasistenciaalavictima",
      },
    ],
  },
  {
    category: "Legislación Clave",
    items: [
      {
        title: "Ley 26.485",
        description:
          "Ley de Protección Integral para Prevenir, Sancionar y Erradicar la Violencia contra las Mujeres.",
        url: "https://www.argentina.gob.ar/normativa",
      },
      {
        title: "Ley 27.499 — Ley Micaela",
        description:
          "Capacitación obligatoria en género y violencia de género para todas las personas que integran los tres poderes del Estado.",
        url: "https://www.argentina.gob.ar/normativa",
      },
      {
        title: "Ley 26.743",
        description:
          "Ley de Identidad de Género. Derecho al reconocimiento de la identidad de género autopercibida.",
        url: "https://www.argentina.gob.ar/normativa",
      },
    ],
  },
];

export function RecursosInformativos() {
  return (
    <section className="flex flex-col justify-center items-center gap-12 py-12 px-10 md:py-20 md:px-32">
      <div className="flex flex-col items-center justify-center gap-16">
        <div className="relative">
          <div className="skew-custom absolute w-full translate-x-3 -translate-y-2 bg-fara-cyan px-5 py-6 md:translate-x-5 md:-translate-y-3 md:px-7 lg:py-9"></div>
          <div className="skew-custom absolute w-full -translate-x-3 translate-y-2 bg-fara-red px-5 py-6 md:-translate-x-3 md:translate-y-4 md:px-7 lg:py-9"></div>
          <h2 className="skew-custom text-xl relative w-full bg-fara-gold px-6 py-3 font-bold md:text-2xl lg:text-5xl lg:pr-12">
            Recursos Informativos
          </h2>
        </div>
        <p className="text-lg text-center max-w-4xl md:text-xl lg:text-2xl">
          Accedé a materiales descargables, organismos de consulta y legislación
          clave con perspectiva de género.
        </p>
      </div>

      {recursos.map((grupo) => (
        <div key={grupo.category} className="w-full flex flex-col gap-6">
          <h3 className="text-lg font-bold md:text-xl lg:text-2xl text-fara-blue border-b-2 border-fara-blue/20 pb-2">
            {grupo.category}
          </h3>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {grupo.items.map((recurso) => (
              <div
                key={recurso.title}
                className="border-2 border-fara-blue text-fara-blue px-4 py-5 text-base shadow-md md:p-8 md:text-xl flex flex-col"
              >
                <div className="flex flex-col justify-center gap-3 flex-1">
                  <div className="flex flex-col justify-center gap-2 flex-1">
                    <h4 className="font-bold">{recurso.title}</h4>
                    <p className="text-sm md:text-base text-balance">
                      {recurso.description}
                    </p>
                  </div>
                  <a
                    href={recurso.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Acceder al recurso: ${recurso.title}`}
                    className="flex items-center hover:underline mt-auto"
                  >
                    Acceder al recurso
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="lucide lucide-arrow-right-icon lucide-arrow-right ml-1"
                      aria-hidden="true"
                      focusable="false"
                    >
                      <path d="M5 12h14" />
                      <path d="m12 5 7 7-7 7" />
                    </svg>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
