import { useEffect } from "react"
import { useLocation } from "react-router"
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
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

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
