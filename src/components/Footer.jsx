import { ContactSection, ColorBar } from "./index"

const FOOTER_MESSAGE = "© 2025 Acción Restaurativa Argentina. Todos los derechos reservados."

export function Footer() {
    return (
        <footer className="w-full flex-col gap-4">
            <ContactSection />
            <p className="grid h-[calc(100%-1rem)] place-items-center p-4 text-sm">{FOOTER_MESSAGE}</p>
            <ColorBar />
        </footer>
    )
}
