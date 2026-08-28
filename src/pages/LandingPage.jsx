import { useEffect } from "react"
import { useLocation } from "react-router"
import { AcercaDe, ServiciosSection, DonarSection, AliadosSection, Areas, Carrousel, Layout, Noticias } from "../components/index"
import { FaraSections } from "../components/sectionFaraLandingPage/FaraSections"

export function LandingPage() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace("#", ""))
            if (element) {
                element.scrollIntoView()
                // Si bien se puede usar { behavior: "smooth" } para dar una animación
                // lamentablemente no es accesible por la falta de control nativo que
                // nos permita ajustarlo acorde a los estándares de accesibilidad.
            }
        }
    }, [hash])

    return (
        <Layout>
            <Carrousel />

            <AcercaDe />

            <FaraSections />
            
            <Areas />

            <ServiciosSection />

            <Noticias />

            <DonarSection />

            <AliadosSection />
        </Layout>
    )
}
