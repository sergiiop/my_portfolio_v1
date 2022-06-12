import { useComponents } from '../../components'
import { MainContainer, SectionContainer } from './publicLayout.element'

const PublicLayout = ({ children }) => {
  const { NewNavbar } = useComponents()
  return (
    <>
      <NewNavbar />
      <MainContainer>
        <SectionContainer>{children}</SectionContainer>
      </MainContainer>
    </>
  )
}

export { PublicLayout }
