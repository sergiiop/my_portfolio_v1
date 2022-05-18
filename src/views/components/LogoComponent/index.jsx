import { useAssets } from '../../../assets'
import { HeroImg, LogoContainer } from './Logo.styled'

const LogoComponent = () => {
  const { useImages } = useAssets()
  const { Hero } = useImages()
  return (
    <LogoContainer>
      <HeroImg src={Hero} alt='Yo' />
    </LogoContainer>
  )
}

export { LogoComponent }
