import { useEffect } from "react"
import { useLocation } from "react-router"
import { Layout, CapacitacionesHero, GridCursos } from "../components/index"

export function CapacitacionesPage() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <Layout>
            <CapacitacionesHero />

            <GridCursos />
        </Layout>
    )
}
