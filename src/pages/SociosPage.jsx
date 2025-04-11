import { useEffect } from "react"
import { useLocation } from "react-router"
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
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

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
