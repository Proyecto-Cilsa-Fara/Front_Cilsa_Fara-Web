import { useEffect } from "react"
import { useLocation } from "react-router"
import { Layout, ParticipaHero, GridParticipa } from "../components/index"

export function ParticipaPage() {
    const { pathname } = useLocation()
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [pathname])

    return (
        <Layout>
            <ParticipaHero />

            <GridParticipa />
        </Layout>
    )
}
