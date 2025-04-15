import FARA_BANNER_IMAGE from "../assets/BANNER-2-1024x267.webp"
import { useDocumentMeta } from "../hooks/useDocumentMeta"

export function AcercaDe() {
    const TITLE = "FARA – Fundación Acción Restaurativa Argentina"
    const DESCRIPTION =
        "FARA Argentina: Trabajamos para reparar el perjuicio causado por conflictos, promoviendo la justicia restaurativa, el bienestar y el desarrollo personal. Capacitaciones, publicaciones y más."
    useDocumentMeta(TITLE, DESCRIPTION)

    return (
        <section className="bg-fara-cyan w-full p-8 text-center text-black lg:p-24">
            <div className="flex h-full w-full flex-col items-center justify-evenly gap-4 bg-white p-8 shadow-2xl">
                <img
                    src={FARA_BANNER_IMAGE}
                    alt="Logotipo de la Fundación Acción Restaurativa Argentina con bloques de color y texto"
                    className="w-128 rounded-2xl shadow-md"
                    height="267px"
                    width="1024px"
                />
                <h1 className="w-full text-2xl font-extrabold text-balance lg:text-4xl lg:font-bold">{TITLE}</h1>
                <hr className="my-1 w-4/5 border-1 border-black" />
                <p className="max-w-[75ch] text-left text-xl lg:px-5">
                    Asesoramos, acompañamos y desarrollamos programas basados en el{" "}
                    <strong>paradigma restaurativo</strong>, promoviendo la resolución de conflictos y la reparación del
                    daño. Capacitamos a operadores y profesionales para implementar procesos restaurativos, fomentando
                    el <strong>diálogo</strong>, la <strong>reconciliación</strong> y el fortalecimiento de la
                    comunidad. A través de <em>iniciativas restaurativas en las comunidades</em> —como la{" "}
                    <strong>facilitación</strong>, los <strong>círculos restaurativos</strong> y las{" "}
                    <strong>reuniones de familias</strong>— y un <em>sólido entrenamiento en justicia restaurativa</em>{" "}
                    —incluyendo <strong>formación</strong>, <strong>apoyo</strong>, <strong>consultorías</strong> y{" "}
                    <strong>orientación personalizada</strong>— ayudamos a construir espacios de justicia más humanos y
                    colaborativos.
                </p>
            </div>
        </section>
    )
}
