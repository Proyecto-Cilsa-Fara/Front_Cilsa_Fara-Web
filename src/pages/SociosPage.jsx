import { useEffect } from "react"
import { useLocation } from "react-router"
import {
    AliadosSociosSection,
    SociosHero,
    Layout,
    Beneficios,
    AreasDeIncidencia,
    BannerSumate,
} from "../components/index"

export function SociosPage() {
    const { pathname, hash } = useLocation()

    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace("#", ""))
            if (element) {
                element.scrollIntoView()
                // Si bien se puede usar { behavior: "smooth" } para dar una animación
                // lamentablemente no es accesible por la falta de control nativo que
                // nos permita ajustarlo acorde a los estándares de accesibilidad.
                return
            }
        }
        window.scrollTo(0, 0)
    }, [pathname, hash])

    return (
        <Layout>
            <SociosHero />

            <AliadosSociosSection />

            <Beneficios />

            <AreasDeIncidencia />

            <BannerSumate />
        </Layout>
    )
}
