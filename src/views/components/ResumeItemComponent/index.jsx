import { ArticleTitle } from '../ArticleTitle'
import { ParagraphComponent } from '../ParagraphComponent'
import {
  ResumeItemContainer,
  ResumeTitlesContainer
} from './ResumeItemComponent.styled'

const ResumeItemComponent = ({ education }) => {
  return (
    <ResumeItemContainer>
      <ResumeTitlesContainer>
        <ArticleTitle>{education.title}</ArticleTitle>
        <h4>{education.subtitle}</h4>
      </ResumeTitlesContainer>
      <ParagraphComponent>{education.description}</ParagraphComponent>
    </ResumeItemContainer>
  )
}

export { ResumeItemComponent }
