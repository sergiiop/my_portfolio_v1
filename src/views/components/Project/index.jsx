import {
  ProjectContainer,
  ProjectContent,
  TechnologysContainer,
  TechnologySpan
} from './Project.styled'
import { useComponents } from '../../components'
import { ArticleTitle } from '../ArticleTitle'

const Project = ({ project, left }) => {
  const { ParagraphComponent } = useComponents()
  return (
    <ProjectContainer
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      left={left}
    >
      <ProjectContent>
        <ArticleTitle>{project.title}</ArticleTitle>
        <ParagraphComponent>{project.description}</ParagraphComponent>
        <TechnologysContainer>
          {project.tecnologies.map((technology, index) => {
            const colorTechnology = {
              React: 'cyan',
              HTML: 'orange',
              CSS: 'blue',
              Nodejs: 'green',
              Expressjs: 'transparent'
            }
            return (
              <TechnologySpan
                backGround={colorTechnology[technology]}
                key={index}
              >
                {technology}
              </TechnologySpan>
            )
          })}
        </TechnologysContainer>
      </ProjectContent>
      <img src={project.image} alt={project.title} />
    </ProjectContainer>
  )
}

export { Project }
