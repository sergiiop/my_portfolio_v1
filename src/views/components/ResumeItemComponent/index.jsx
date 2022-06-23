import { ArticleTitle } from '../ArticleTitle'
import { ParagraphComponent } from '../ParagraphComponent'
import {
  ResumeItemContainer,
  ResumeItemContent,
  ResumeTitlesContainer
} from './ResumeItemComponent.styled'

const ResumeItemComponent = ({ education }) => {
  return (
    <ResumeItemContainer>
      <ResumeTitlesContainer year={education.year}>
        <ArticleTitle>{education.title}</ArticleTitle>
      </ResumeTitlesContainer>
      <ResumeItemContent>
        <h4
          style={{
            fontSize: '1.4rem',
            marginBottom: '5px',
            color: 'var(--color-sec)'
          }}
        >
          {education.subtitle}
        </h4>
        <ParagraphComponent>{education.description}</ParagraphComponent>
      </ResumeItemContent>
    </ResumeItemContainer>
  )
}

export { ResumeItemComponent }
