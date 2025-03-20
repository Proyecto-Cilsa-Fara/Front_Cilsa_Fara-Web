import PAGE_NOT_FOUND_IMAGE from "../assets/undraw_page-not-found.svg"
import { ColorBar } from "../components"

export function ErrorPage() {
    const ERROR_MESSAGE = "¡UPS! Esa página no existe..."
    const FOOTER_MESSAGE = "© 2025 Acción Restaurativa Argentina. Todos los derechos reservados."

    return (
        <div className="flex h-screen grow flex-col">
            <header className="h-1/5">
                <ColorBar />
            </header>
            <main className="grid grow-[1] place-items-center">
                {/*
                    Graphic from https://undraw.co/
                */}
                <img
                    src={PAGE_NOT_FOUND_IMAGE}
                    className="h-48 w-auto"
                    alt="Ilustración de un error 404 con montañas de fondo y un sol parcialmente cubierto por nubes. El número '0' está estilizado como una lupa con una planta creciendo en su interior."
                    width="860"
                    height="571"
                />
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">{ERROR_MESSAGE}</h1>
            </main>
            <footer className="h-1/5 flex-col gap-4">
                <h2 className="grid h-[calc(100%-1rem)] place-items-center">{FOOTER_MESSAGE}</h2>
                <ColorBar />
            </footer>
        </div>
    )
}
