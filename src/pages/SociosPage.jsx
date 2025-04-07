import { AliadosSection, SociosRestauradores, Layout, Beneficios, AreasDeIncidencia } from "../components/index"

export function SociosPage() {
    return (
        <Layout>
            <SociosRestauradores />

            <AliadosSection />

            <Beneficios />

            <AreasDeIncidencia />

            {/* BannerSumate (Reemplazar por componente BannerSumate al div identificado)*/}
            <div id="BannerSumate" className="bg-fara-red w-full py-50 text-center text-3xl font-bold text-white">
                <h2>Acá va el componente BannerSumate</h2>
            </div>
        </Layout>
    )
}
