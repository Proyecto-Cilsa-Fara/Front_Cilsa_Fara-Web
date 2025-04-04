import {
    DonarSection,
    Areas,
    AcercaDeNosotros,
    SociosRestauradores,
    Legales,
    Integrantes,
    Layout,
} from "../components/index"

export function InstitucionalPage() {
    return (
        <Layout>
            <SociosRestauradores />

            <AcercaDeNosotros />

            <Integrantes />

            <DonarSection />

            <Areas />

            <Legales />
        </Layout>
    )
}
