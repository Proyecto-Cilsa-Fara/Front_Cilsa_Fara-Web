import AreasIncidenciaData from "../../data/areas-incidencia.json"

export function AreasDeIncidencia() {
    return (
        <section className="flex flex-col justify-center px-4 py-16 text-pretty lg:px-32 lg:py-32">
            <h2 className="mb-6 text-center text-2xl font-extrabold text-balance lg:text-3xl lg:font-bold">
                NUESTROS EQUIPOS MULTIDISCIPLINARIOS
            </h2>
            <p className="mb-12 grid max-w-5xl self-center text-center text-xl text-balance">
                La Fundación cuenta con múltiples equipos de trabajo, que son grupos interdisciplinares de estudio, análisis y construcción de proyectos, y desarrollan su labor en diversas áreas de incidencia.
            </p>
            <div className="max-w-5xl">
                {AreasIncidenciaData.areasDeIncidencia.map((area) => (
                    <AreaIncidenciaCard key={area.id} area={area} />
                ))}
            </div>
        </section>
    )
}

function AreaIncidenciaCard({ area }) {
    return (
        <section id={area.id} className="flex gap-5 flex-col py-10 scroll-mt-32 md:flex-row">
            <div className="flex-1">
                <span className="text-2xl font-semibold text-fara-gray">Área de incidencia</span>
                <h2 className="text-4xl font-bold my-3"
                    style={{ color: area.colorTitulo }}>{area.titulo}</h2>
                {area.subtitulo && (
                    <p className="mb-4" style={{ color: area.colorTitulo }}>
                        {area.subtitulo}
                    </p>
                )}
                {area.descripcion && <p className="mb-4">{area.descripcion}</p>}
                <div className="autores">
                    {area.autores.map((grupo, i) => (
                        <p key={i} className="font-semibold">
                            {grupo.rol && <strong>{grupo.rol}: </strong>}
                            {grupo.nombres.join(", ")}
                        </p>
                    ))}
                </div>
            </div>
            <div className="flex-1">
                <h3 className="text-2xl font-semibold text-fara-gray mb-1">Objetivos</h3>
                <ol className="list-decimal pl-4">
                    {area.objetivos.map((obj, i) => (
                        <li key={i} className="mb-2">{obj}</li>
                    ))}
                </ol>
            </div>
        </section>
    )
}
