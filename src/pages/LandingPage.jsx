import { ColorBar, ServiciosSection } from "../components"
import { ContactSection, DonarSection, AliadosSection, AcercaDe } from "../components/index"
import { Areas } from "../components/Areas"
import { Carrousel } from "../components/Carrousel"
import NavBar from "../components/NavBar"

export function LandingPage() {
    const FOOTER_MESSAGE = "© 2025 Acción Restaurativa Argentina. Todos los derechos reservados."

    return (
        <div className="flex h-screen grow flex-col">
            <header className="top-0 h-auto">
                <ColorBar />
                {/* Reemplazar etiqueta nav por componente Navbar */}
                <NavBar />
            </header>

            <main className="grid grow-[1] place-items-center">
                {/* Carrousel Hero Images (Reemplazar por componente Carrousel al div identificado)*/}

                <Carrousel />

                {/* Acerca de FARA (Reemplazar por componente AcercaDeFara al div identificado)*/}
                <AcercaDe />

                {/* Areas de incidencia (Reemplazar por componente Areas al div identificado)*/}
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
