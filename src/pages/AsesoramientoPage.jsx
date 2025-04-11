import { useEffect } from "react"
import { useLocation } from "react-router"
import { Layout, AsesoramientoHero, BannerCapacitaciones, CardsAsesoramiento } from "../components/index"

export function AsesoramientoPage() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <Layout>
            <AsesoramientoHero />

            <CardsAsesoramiento />

            <BannerCapacitaciones />
        </Layout>
    )
}
