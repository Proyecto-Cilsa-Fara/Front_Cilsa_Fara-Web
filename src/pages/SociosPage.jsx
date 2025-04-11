import {
    AliadosSection,
    SociosRestauradores,
    SociosHero,
    Layout,
    Beneficios,
    AreasDeIncidencia,
    BannerSumate,
} from "../components/index"

export function SociosPage() {
    return (
        <Layout>
            <SociosHero />

            <AliadosSection />

            <Beneficios />

            <AreasDeIncidencia />

            <BannerSumate />
        </Layout>
    )
}
