import { ColorBar, ServiciosSection } from "../components"
import { ContactSection, DonarSection } from "../components/index"

export function LandingPage() {
    const FOOTER_MESSAGE = "© 2025 Acción Restaurativa Argentina. Todos los derechos reservados."

    return (
        <div className="flex h-screen grow flex-col">
            <header className="h-1/5">
                <ColorBar />

                {/* Reemplazar etiqueta nav por componente Navbar */}
                <nav className="flex items-center justify-between p-7">
                    <h1 className="text-3xl font-bold">Logo FARA</h1>
                    <h2 className="font-bold text-red-500">Aca va el componente Navbar</h2>
                    <span className="text-lg font-semibold">Links</span>
                </nav>
            </header>
            <main className="grid grow-[1] place-items-center">
                {/* Carrousel Hero Images (Reemplazar por componente Carrousel al div identificado)*/}
                <div id="Carrousel" className="flex h-100 w-full items-center justify-center bg-red-500 text-white">
                    <h1 className="text-3x1 font-bold">Aca va el componente Carrousel</h1>
                </div>

                {/* Acerca de FARA (Reemplazar por componente AcercaDeFara al div identificado)*/}
                <div id="acercaDeFara" className="flex h-50 w-full items-center justify-center bg-blue-500 text-white">
                    <h1 className="text-3x1 font-bold">Aca va el componente AcercaDeFara</h1>
                </div>

                {/* Areas de incidencia (Reemplazar por componente Areas al div identificado)*/}
                <div id="areas" className="flex h-200 w-full items-center justify-center border">
                    <h1 className="text-3x1 font-bold">Aca va el componente Areas</h1>
                </div>

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
