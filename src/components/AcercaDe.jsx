import FARA_BANNER_IMAGE from "../assets/BANNER-2-1024x267.webp"

export function AcercaDe() {
    return (
        <section className="bg-fara-cyan w-full p-8 text-center text-black lg:p-24">
            <div className="flex h-full flex-col items-center justify-evenly gap-4 bg-white p-8 shadow-2xl">
                <img
                    src={FARA_BANNER_IMAGE}
                    alt="Logotipo de la Fundación Acción Restaurativa Argentina con bloques de color y texto"
                    className="w-128 rounded-2xl shadow-md"
                    height="267px"
                    width="1024px"
                />
                <h1 className="text-2xl font-extrabold text-balance lg:text-4xl lg:font-bold">
                    FARA – Fundación Acción Restaurativa Argentina
                </h1>
                <hr className="my-1 w-4/5 border-1 border-black" />
                <p className="max-w-[75ch] text-xl text-balance lg:px-5">
                    Asesoramos, acompañamos y desarrollamos programas basados en el paradigma restaurativo, promoviendo
                    la resolución de conflictos y la reparación del daño. Capacitamos a operadores y profesionales para
                    implementar procesos restaurativos, fomentando el diálogo, la reconciliación y el fortalecimiento de
                    la comunidad.
                </p>
            </div>
        </section>
    )
}
