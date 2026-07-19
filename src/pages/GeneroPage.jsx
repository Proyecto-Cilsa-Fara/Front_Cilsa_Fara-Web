import { useLocation } from "react-router"
import { FraseRestaurativa, Layout } from "../components/index"
import { GeneroHero, FaraDescripcion, LineaDeTrabajo, ProgramaEmpoderanos, Formacion, RecursosInformativos, EquipoDiciplinario, ApoyoFara } from "../components/sectionsFaraGenero"
import { useEffect } from "react"

export function GeneroPage() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <Layout>
      <GeneroHero />
      <FaraDescripcion />
      <LineaDeTrabajo />
      <FraseRestaurativa
        frase="Restaurar no es volver atrás: es construir condiciones nuevas de dignidad igualdad y no repetición." />
      <ProgramaEmpoderanos />
      <Formacion />
      <RecursosInformativos />
      <EquipoDiciplinario />
      <FraseRestaurativa
        colorText="text-white"
        bg="bg-fara-blue"
        frase="La justicia restaurativa con perspectiva de género construye procesos cuidados para reconocer, reparar y transformar." />
      <ApoyoFara />
    </Layout>
  )
}
