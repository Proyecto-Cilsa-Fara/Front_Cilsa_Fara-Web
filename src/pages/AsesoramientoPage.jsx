import { Layout, AsesoramientoHero, BannerCapacitaciones, CardsAsesoramiento } from "../components/index"

export function AsesoramientoPage() {
    return (
        <Layout>
            <AsesoramientoHero />

            <CardsAsesoramiento />

            <BannerCapacitaciones />
        </Layout>
    )
}
