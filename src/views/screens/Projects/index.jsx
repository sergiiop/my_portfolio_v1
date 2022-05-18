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
  const [activeProject, setActiveProject] = useState(0)

  useEffect(() => {
    saveProjects()
  }, [])

  const saveProjects = () => {
    setProjects(ProjectsData)
    setFiltered(ProjectsData)
  }

  return (
    <PublicLayout>
      <ProjectSectionContainer>
        <TitleComponent>Projects</TitleComponent>
        <FilterButton
          projects={projects}
          setFiltered={setFiltered}
          activeProject={activeProject}
          setActiveProject={setActiveProject}
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
