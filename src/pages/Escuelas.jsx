import React, { useEffect } from 'react'
import { useLocation } from 'react-router'
import { FraseRestaurativa, Layout } from '../components'
import { BannerAgendarReunion, BannerConfianza, BannerContacto, Comunidad, Credibilidad, EscuelasHero, Metodologia, Mision, Programas, Servicios } from '../components/sectionsFaraEscuelas'

export function Escuelas() {

  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])


  return (
    <Layout>
      <EscuelasHero />
      <Mision />
      <Servicios />
      <Programas />
      <Comunidad />
      <BannerAgendarReunion />
      <Metodologia />
      <Credibilidad />
      <BannerConfianza />
      <FraseRestaurativa
        frase="Prevenir es construir comunidad. Actuar restaurativamente es transformar los conflictos en oportunidades de aprendizaje, crecimiento y convivencia."
      />
      <BannerContacto />
    </Layout>
  )
}
