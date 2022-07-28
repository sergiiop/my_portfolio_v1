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
          I am a systems engineer passionate about web development and learning, I have good foundations in frontend development as well as backend knowledge, I like to be constantly learning and learning about new technologies as I am always looking to improve my abilities. My goal right now is to be part of a good work team that gives me the opportunity to demonstrate my skills that I have been developing to improve my professional career.
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
