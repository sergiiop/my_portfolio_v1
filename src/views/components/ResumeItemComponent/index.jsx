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
      <ResumeTitlesContainer>
        <ArticleTitle>{education.title}</ArticleTitle>
      </ResumeTitlesContainer>
      <ResumeItemContent>
        <h4>{education.subtitle}</h4>

        <ParagraphComponent>{education.description}</ParagraphComponent>
      </ResumeItemContent>
    </ResumeItemContainer>
  )
}

export { ResumeItemComponent }
