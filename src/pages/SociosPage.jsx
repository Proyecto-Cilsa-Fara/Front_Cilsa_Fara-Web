import { ColorBar, ContactSection, NavBar, DonarFAB, AliadosSection, SociosRestauradores } from "../components/index"

export function SociosPage() {
    const FOOTER_MESSAGE = "© 2025 Acción Restaurativa Argentina. Todos los derechos reservados."

    return (
        <div className="flex min-h-screen grow flex-col">
            <header className="fixed z-10 flex w-full flex-col">
                <ColorBar />

                <NavBar />
            </header>

            <main className="mt-30 grid grow-[1] place-items-center">
                <SociosRestauradores />

                <AliadosSection />

                {/* Beneficios (Reemplazar por componente Beneficios al div identificado)*/}
                <div id="Beneficios" className="bg-fara-red w-full py-100 text-center text-3xl font-bold text-white">
                    <h2>Acá va el componente Beneficios</h2>
                </div>

                {/* Equipos-Areas (Reemplazar por componente Equipos-Areas al div identificado)*/}
                <div
                    id="Equipos-Areas"
                    className="bg-fara-gold w-full py-100 text-center text-3xl font-bold text-white"
                >
                    <h2>Acá va el componente Equipos-Areas</h2>
                </div>

                {/* BannerSumate (Reemplazar por componente BannerSumate al div identificado)*/}
                <div id="BannerSumate" className="bg-fara-red w-full py-50 text-center text-3xl font-bold text-white">
                    <h2>Acá va el componente BannerSumate</h2>
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
