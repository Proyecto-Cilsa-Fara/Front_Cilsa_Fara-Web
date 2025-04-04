import { AcercaDe, ServiciosSection, DonarSection, AliadosSection, Areas, Carrousel, Layout } from "../components/index"

export function LandingPage() {
    return (
        <Layout>
            <Carrousel />

            <AcercaDe />

            <Areas />

            <ServiciosSection />

            <DonarSection />

            <AliadosSection />
        </Layout>
    )
}
