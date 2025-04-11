import { useEffect } from "react"
import { useLocation } from "react-router"
import { Layout, DonarHero, BannerDonar, CarrouselDonar } from "../components/index"

export function DonarPage() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <Layout>
            <DonarHero />

            <CarrouselDonar />

            <BannerDonar />
        </Layout>
    )
}
