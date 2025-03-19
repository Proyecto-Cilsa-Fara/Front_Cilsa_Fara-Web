import { ColorBar, ServiciosSection } from "../components"
import { ContactSection, DonarSection } from "../components/index"
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
                <div id="acercaDeFara" className="flex h-50 w-full items-center justify-center bg-blue-500 text-white">
                    <h1 className="text-3x1 font-bold">Aca va el componente AcercaDeFara</h1>
                </div>

                {/* Areas de incidencia (Reemplazar por componente Areas al div identificado)*/}
                <Areas />

                <ServiciosSection />

                <DonarSection />

                {/* Aliados Restaurativos (Reemplazar por componente Aliados al div identificado)*/}
                <div id="aliados" className="flex h-150 w-full items-center justify-center border">
                    <h1 className="text-3x1 font-bold">Aca va el componente Aliados Restaurativos</h1>
                </div>
                <ContactSection />
            </main>
            <footer className="h-1/5 flex-col gap-4">
                <h2 className="grid h-[calc(100%-2rem)] place-items-center p-4">{FOOTER_MESSAGE}</h2>
                <ColorBar />
            </footer>
        </div>
    )
}
