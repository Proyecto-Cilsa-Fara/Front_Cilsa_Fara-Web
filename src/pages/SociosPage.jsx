import { AliadosSection, SociosRestauradores, Layout, Beneficios } from "../components/index"

export function SociosPage() {
    return (
        <Layout>
            <SociosRestauradores />

            <AliadosSection />

            <Beneficios />

            {/* Equipos-Areas (Reemplazar por componente Equipos-Areas al div identificado)*/}
            <div id="Equipos-Areas" className="bg-fara-gold w-full py-100 text-center text-3xl font-bold text-white">
                <h2>Acá va el componente Equipos-Areas</h2>
            </div>

            {/* BannerSumate (Reemplazar por componente BannerSumate al div identificado)*/}
            <div id="BannerSumate" className="bg-fara-red w-full py-50 text-center text-3xl font-bold text-white">
                <h2>Acá va el componente BannerSumate</h2>
            </div>
        </Layout>
    )
}
