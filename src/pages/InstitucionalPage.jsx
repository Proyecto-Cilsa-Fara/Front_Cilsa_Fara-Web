import { ColorBar, ContactSection, DonarSection, Areas, NavBar, DonarFAB, AcercaDeNosotros } from "../components/index"

export function InstitucionalPage() {
    const FOOTER_MESSAGE = "© 2025 Acción Restaurativa Argentina. Todos los derechos reservados."

    return (
        <div className="flex min-h-screen grow flex-col">
            <header className="fixed z-10 flex w-full flex-col">
                <ColorBar />

                <NavBar />
            </header>

            <main className="mt-30 grid grow-[1] place-items-center">
                {/* Socios Restauradores (Reemplazar por componente SociosRestauradores al div identificado)*/}
                <div
                    id="SociosRestauradores"
                    className="bg-fara-red w-full py-100 text-center text-3xl font-bold text-white"
                >
                    <h1>Acá va el componente SOCIOS RESTAURADORES</h1>
                </div>

                <AcercaDeNosotros />

                {/* Integrantes (Reemplazar por componente Integrantes al div identificado)*/}
                <div id="Integrantes" className="bg-fara-teal w-full py-100 text-center text-3xl font-bold text-white">
                    <h1>Acá va el componente INTEGRANTES</h1>
                </div>

                <DonarSection />

                <Areas />

                {/* Legales (Reemplazar por componente Legales al div identificado)*/}
                <div id="Legales" className="bg-fara-gold w-full py-80 text-center text-3xl font-bold text-white">
                    <h1>Acá va el componente LEGALES</h1>
                </div>

                <ContactSection />

                <DonarFAB />
            </main>
            <footer className="w-full flex-col gap-4">
                <p className="grid h-[calc(100%-1rem)] place-items-center p-4 text-sm">{FOOTER_MESSAGE}</p>
                <ColorBar />
            </footer>
        </div>
    )
}
