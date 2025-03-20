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
} from "../components/index"

export function LandingPage() {
    const FOOTER_MESSAGE = "© 2025 Acción Restaurativa Argentina. Todos los derechos reservados."

    return (
        <div className="flex h-screen grow flex-col">
            <header className="top-0 h-auto">
                <ColorBar />

                <NavBar />
            </header>

            <main className="grid grow-[1] place-items-center">
                <Carrousel />

                {/* Acerca de FARA (Reemplazar por componente AcercaDeFara al div identificado)*/}
                <AcercaDe />

                <Areas />

                <ServiciosSection />

                <DonarSection />

                <AliadosSection />

                <ContactSection />
            </main>
            <footer className="h-1/5 flex-col gap-4">
                <h2 className="grid h-[calc(100%-2rem)] place-items-center p-4">{FOOTER_MESSAGE}</h2>
                <ColorBar />
            </footer>
        </div>
    )
}
