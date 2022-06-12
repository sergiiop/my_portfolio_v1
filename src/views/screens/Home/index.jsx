import { FirstContainer, HomeContainer, Span } from './Home.element'
import { useComponents } from '../../components'
import { useLayouts } from '../../layouts'

const Home = () => {
  const {
    SubtitleComponent,
    TitleComponent,
    ParagraphComponent,
    LogoComponent,
    SocialsIcon
  } = useComponents()

  const { PublicLayout } = useLayouts()

  return (
    <PublicLayout>
      <HomeContainer>
        <FirstContainer>
          <SubtitleComponent>
            Hello, <Span>I'm</Span>
          </SubtitleComponent>
          <TitleComponent>Sergio Pérez</TitleComponent>
          <SubtitleComponent>Systems Engineer</SubtitleComponent>
          <ParagraphComponent>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam nisi
            tempore repellat repellendus iusto deleniti asperiores in, ipsam
            odit quia explicabo, a quas doloremque aliquam aut sunt! Alias,
            ipsam totam.
          </ParagraphComponent>
          <LogoComponent />
        </FirstContainer>
        <SocialsIcon />
      </HomeContainer>
    </PublicLayout>
  )
}

export { Home }
