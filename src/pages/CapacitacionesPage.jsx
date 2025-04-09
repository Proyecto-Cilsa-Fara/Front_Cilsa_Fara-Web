import { Layout, CapacitacionesHero } from "../components/index"

export function CapacitacionesPage() {
    return (
        <Layout>
            <CapacitacionesHero />

            <div className="w-full bg-gray-200 py-100 text-center">
                <h2 className="text-3xl font-bold">Acá va el componente Cursos</h2>
            </div>
        </Layout>
    )
}
