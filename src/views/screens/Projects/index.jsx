import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { ProjectsContainers, ProjectSectionContainer } from './Projects.styled'
import { ProjectsData } from '../../../data/data'
import { useComponents } from '../../components'
import { useLayouts } from '../../layouts'

const Projects = () => {
  const { PublicLayout } = useLayouts()
  const { TitleComponent, Project, FilterButton } = useComponents()

  const [projects, setProjects] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeProject, setActiveProject] = useState('all')

  const saveProjects = () => {
    setProjects(ProjectsData)
    setFiltered(ProjectsData)
  }

  useEffect(() => {
    saveProjects()
  }, [])

  const buttonProperties = [
    { name: 'All', genre: 'all' },
    { name: 'Personal Projects', genre: 'personal' },
    { name: 'Professional Projects', genre: 'professional' }
  ]

  return (
    <PublicLayout>
      <ProjectSectionContainer>
        <TitleComponent>Projects</TitleComponent>
        <FilterButton
          items={projects}
          setFiltered={setFiltered}
          activeItem={activeProject}
          setActiveItem={setActiveProject}
          buttonProperties={buttonProperties}
        />
        <ProjectsContainers
          layout
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
        >
          <AnimatePresence>
            {filtered.map((project, id) => {
              return <Project key={id} project={project} left={id % 2 === 0} />
            })}
          </AnimatePresence>
        </ProjectsContainers>
      </ProjectSectionContainer>
    </PublicLayout>
  )
}

export { Projects }
