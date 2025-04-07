import { AliadosSection, SociosRestauradores, Layout, Beneficios, AreasDeIncidencia, BannerSumate } from "../components/index"

export function SociosPage() {
    return (
        <Layout>
            <SociosRestauradores />

            <AliadosSection />

            <Beneficios />

            <AreasDeIncidencia />

            <BannerSumate />
        </Layout>
    )
}
