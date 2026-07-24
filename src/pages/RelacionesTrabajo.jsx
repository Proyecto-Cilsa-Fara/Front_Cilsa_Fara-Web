import React, { useEffect } from 'react'
import { Layout, FraseRestaurativa } from '../components'
import { useLocation } from 'react-router'
import { BannerAgenda, Beneficios, Conflicto, Principios, RelacionesHero, Servicios } from '../components/sectionsFaraRT';
import { ConflictosAbordados } from '../components/sectionsFaraRT/ConflictosAbordados';
import EquipoProfesional from '../components/sectionsFaraRT/EquipoProfesional';

export function RelacionesTrabajo() {

  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname]);

  return (
    <Layout>
      <RelacionesHero />
      <Conflicto />
      <Servicios />
      <ConflictosAbordados />
      <Principios />
      <Beneficios />
      <EquipoProfesional />
      <FraseRestaurativa
        frase="Las organizaciones saludables no son aquellas que no tienen conflictos, sino aquellas que cuentan con herramientas para transformarlos constructivamente."
      />
      <BannerAgenda />
    </Layout>
  )
}
