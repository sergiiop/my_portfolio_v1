import {
  CallToActionContainer,
  FirstContainer,
  HomeContainer,
  Span
} from './Home.element'
import { useComponents } from '../../components'
import { useLayouts } from '../../layouts'
import { useAssets } from '../../../assets'

const Home = () => {
  const {
    SubtitleComponent,
    TitleComponent,
    ParagraphComponent,
    LogoComponent,
    SocialsIcon,
    CallToAction
  } = useComponents()

  const { PublicLayout } = useLayouts()
  const { useDocs } = useAssets()
  const { CV } = useDocs()

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
            I am a Systems Engineer with a passion for the web and learning, I am passionate about development on the frontend side but I am also very knowledgeable on the backend, I love learning new technologies and I am always looking for new opportunities to grow my skills, I am looking for Being part of a work team that values the skills that I have been developing in order to improve my professional career.
          </ParagraphComponent>
          <LogoComponent />
          <CallToActionContainer>
            <CallToAction href={CV} download={'CV SERGIO PEREZ'} />
          </CallToActionContainer>
        </FirstContainer>
        <SocialsIcon />
      </HomeContainer>
    </PublicLayout>
  )
}

export { Home }
