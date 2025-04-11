import { useEffect } from "react"
import { useLocation } from "react-router"
import { AcercaDe, ServiciosSection, DonarSection, AliadosSection, Areas, Carrousel, Layout } from "../components/index"

export function LandingPage() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

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
