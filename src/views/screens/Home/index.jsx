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
            I'm a systems engineer passionate about the web and learning, my
            main goal is to specialize in frontend development, I love to learn
            new technologies and I'm always looking for new opportunities to
            grow my skills, also I want to be a part of a team that value my
            skills and my work in order to improve my professional career.
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
