import { useEffect } from "react"
import { useLocation } from "react-router"
import {
    DonarSection,
    Legales,
    Integrantes,
    Layout,
} from "../components/index"
import {
    InstitucionalHero,
    AcercaDeNosotros,
    AreasDeIncidencia,
} from "../components/sectionsFaraInstitucional/index"

export function InstitucionalPage() {
    const { pathname, hash } = useLocation()
    useEffect(() => {
        if (hash) {
            const element = document.getElementById(hash.replace("#", ""))
            if (element) {
                element.scrollIntoView()
                return
            }
        }
        window.scrollTo(0, 0)
    }, [pathname, hash])

    return (
        <Layout>
            <InstitucionalHero />

            <AcercaDeNosotros />

            <Integrantes />

            <AreasDeIncidencia />

            <DonarSection />

            <Legales />
        </Layout>
    )
}
