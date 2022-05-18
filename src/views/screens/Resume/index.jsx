import { useLayouts } from '../../layouts'
import { useComponents } from '../../components'
import { EducationQualityData } from '../../../data/data'
import {
  ItemsContainer,
  ResumeContent,
  ResumeSectionContainer
} from './Resume.styled'

const Resume = () => {
  const { PublicLayout } = useLayouts()
  const {
    TitleComponent,
    SubtitleComponent,
    SpanComponent,
    ResumeItemComponent
  } = useComponents()
  return (
    <PublicLayout>
      <ResumeSectionContainer>
        <TitleComponent area='header'>Resume</TitleComponent>
        <ResumeContent area='stack'>
          <div>
            <SubtitleComponent>My Skills</SubtitleComponent>
          </div>
        </ResumeContent>
        <ResumeContent area='degree'>
          <div>
            <SubtitleComponent>Eduaction Quality</SubtitleComponent>
            <SpanComponent>2016 - Present</SpanComponent>
          </div>
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
