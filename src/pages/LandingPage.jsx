import {
    AcercaDe,
    ColorBar,
    ServiciosSection,
    ContactSection,
    DonarSection,
    AliadosSection,
    Areas,
    Carrousel,
    NavBar,
    DonarFAB,
} from "../components/index"

export function LandingPage() {
    const FOOTER_MESSAGE = "© 2025 Acción Restaurativa Argentina. Todos los derechos reservados."

    return (
        <div className="flex min-h-screen grow flex-col">
            <header className="fixed z-10 flex w-full flex-col">
                <ColorBar />

                <NavBar />
            </header>

            <main className="mt-30 grid grow-[1] place-items-center">
                <Carrousel />

                {/* Acerca de FARA (Reemplazar por componente AcercaDeFara al div identificado)*/}
                <AcercaDe />

                <Areas />

                <ServiciosSection />

                <DonarSection />

                <AliadosSection />

                <ContactSection />

                <DonarFAB />
            </main>
            <footer className="flex-col gap-4">
                <p className="grid h-[calc(100%-1rem)] place-items-center p-4 text-sm">{FOOTER_MESSAGE}</p>
                <ColorBar />
            </footer>
        </div>
    )
}
