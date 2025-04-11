import {
    DonarSection,
    Areas,
    AcercaDeNosotros,
    SociosRestauradores,
    InstitucionalHero,
    Legales,
    Integrantes,
    Layout,
} from "../components/index"

export function InstitucionalPage() {
    return (
        <Layout>
            <InstitucionalHero />

            <AcercaDeNosotros />

            <Integrantes />

            <DonarSection />

            <Areas />

            <Legales />
        </Layout>
    )
}
