import { useLayouts } from '../../layouts'
import { useComponents } from '../../components'
import { EducationQualityData } from '../../../data/data'
import {
  ItemsContainer,
  ResumeContent,
  ResumeSectionContainer
} from './Resume.styled'

import { mySkills } from '../../../data/data'

const Resume = () => {
  const { PublicLayout } = useLayouts()
  const {
    TitleComponent,
    SubtitleComponent,
    SpanComponent,
    ResumeItemComponent,
    SkillComponent
  } = useComponents()
  return (
    <PublicLayout>
      <ResumeSectionContainer>
        <TitleComponent area='header'>Resume</TitleComponent>
        <ResumeContent area='stack'>
          <div>
            <SubtitleComponent>My Skills</SubtitleComponent>
            <div>
              {mySkills.map(skill => (
                <SkillComponent key={skill.name} skill={skill} />
              ))}
            </div>
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
