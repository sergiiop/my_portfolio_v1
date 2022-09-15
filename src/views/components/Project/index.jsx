import {
  ImageContainer,
  ProjectContainer,
  ProjectContent,
  SourceContent,
  TechnologysContainer,
  TechnologySpan
} from './Project.styled'
import { useComponents } from '../../components'
import { ArticleTitle } from '../ArticleTitle'
import { SourceComponent } from '../SourceComponent'

const colorTechnology = {
  ReactJS: '#61dafb',
  'HTML y CSS': 'var(--color-background)',
  JavaScript: '#f7df1e',
  Nodejs: 'green',
  Expressjs: 'transparent',
  WordPress: '#21759B',
  'React Native': '#61dafb',
  Firebase: '#FFC107',
  Git: '#E84E31',
  WebRTC: '#F7F7F7',
  Vite: 'linear-gradient(to left, #fc00ff, #00dbde)'
}

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
          {project.technologies.map((technology, index) => {
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
      <ImageContainer>
        <img src={project.image} alt={project.title} />
        <SourceContent>
          {project.github && (
            <SourceComponent href={project.github} icon='github' />
          )}
          {project.live && <SourceComponent href={project.live} icon='live' />}
        </SourceContent>
      </ImageContainer>
    </ProjectContainer>
  )
}

export { Project }
