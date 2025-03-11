import WIP_IMAGE from "../assets/undraw_working.svg"
import { ColorBar } from "../components"

export function WIPPage() {
    const WIP_MESSAGE = "Página aún en construcción..."
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
                    src={WIP_IMAGE}
                    className="h-48 w-auto"
                    alt="Ilustración de dos personas en una oficina intercambiando documentos. Una está sentada en una silla frente a un escritorio con una computadora, mientras la otra está sentada en un taburete sosteniendo un papel con texto resaltado."
                    width="810"
                    height="463"
                />
                <h1 className="text-2xl font-bold tracking-tight text-gray-900">{WIP_MESSAGE}</h1>
            </main>
            <footer className="h-1/5 flex-col gap-4">
                <h2 className="grid h-[calc(100%-2rem)] place-items-center">{FOOTER_MESSAGE}</h2>
                <ColorBar />
            </footer>
        </div>
    )
}
