import React from 'react'
import { useComponents } from '../../components'
import { MainContainer, SectionContainer } from './publicLayout.element'

const PublicLayout = ({ children }) => {
  const { NewNavbar, Footer } = useComponents()
  return (
    <>
      <NewNavbar />
      <MainContainer>
        <SectionContainer>{children}</SectionContainer>
      </MainContainer>
      <Footer />
    </>
  )
}

export { PublicLayout }
