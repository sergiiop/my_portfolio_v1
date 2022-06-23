import { useLayouts } from '../../layouts'
import { useComponents } from '../../components'
import { EducationQualityData } from '../../../data/data'
import {
  ItemsContainer,
  ResumeContent,
  ResumeSectionContainer,
  TitlesContainer
} from './Resume.styled'

const Resume = () => {
  const { PublicLayout } = useLayouts()
  const {
    TitleComponent,
    SpanComponent,
    ResumeItemComponent,
    SubtitleComponent,
    SkillComponent
  } = useComponents()
  return (
    <PublicLayout>
      <ResumeSectionContainer>
        <TitleComponent area='header'>Resume</TitleComponent>
        <ResumeContent area='stack'>
          <SkillComponent />
        </ResumeContent>
        <ResumeContent area='degree'>
          <TitlesContainer>
            <SubtitleComponent>Eduaction Quality</SubtitleComponent>
            <SpanComponent>2016 - Present</SpanComponent>
          </TitlesContainer>
          <ItemsContainer>
            {EducationQualityData.map((item, index) => (
              <ResumeItemComponent
                key={index}
                education={item}
              ></ResumeItemComponent>
            ))}
          </ItemsContainer>
        </ResumeContent>
      </ResumeSectionContainer>
    </PublicLayout>
  )
}

export { Resume }
