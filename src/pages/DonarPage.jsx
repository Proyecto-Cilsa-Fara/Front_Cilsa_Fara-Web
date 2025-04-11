import { Layout, DonarHero, BannerDonar, CarrouselDonar } from "../components/index"

export function DonarPage() {
    return (
        <Layout>
            <DonarHero />

            <CarrouselDonar />

            <BannerDonar />
        </Layout>
    )
}
