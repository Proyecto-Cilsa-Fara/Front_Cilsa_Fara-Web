import {
    ColorBar,
    ContactSection,
    DonarSection,
    Areas,
    NavBar,
    DonarFAB,
    AcercaDeNosotros,
    SociosRestauradores,
    Legales,
    Integrantes,
} from "../components/index"

export function InstitucionalPage() {
    const FOOTER_MESSAGE = "© 2025 Acción Restaurativa Argentina. Todos los derechos reservados."

    return (
        <div className="flex min-h-screen grow flex-col">
            <header className="fixed z-10 flex w-full flex-col">
                <ColorBar />

                <NavBar />
            </header>

            <main className="mt-30 grid grow-[1] place-items-center">
                <SociosRestauradores />

                <AcercaDeNosotros />

                <Integrantes />

                <DonarSection />

                <Areas />

                <Legales />

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
