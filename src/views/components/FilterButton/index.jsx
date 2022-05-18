import { useEffect } from 'react'
import { FilterContainer } from './FilterButton.styled'

const FilterButton = ({
  projects,
  setFiltered,
  activeProject,
  setActiveProject
}) => {
  useEffect(() => {
    if (activeProject === 0) {
      console.log(projects)
      setFiltered(projects)
      return
    }
    const filtered = projects.filter(project => {
      return project.genre_ids === activeProject
    })
    console.log(filtered)
    setFiltered(filtered)
  }, [activeProject])

  const buttonProperties = [
    { id: 0, name: 'All' },
    { id: 1, name: 'Personal Projects' },
    { id: 2, name: 'Professional Projects' }
  ]

  return (
    <FilterContainer>
      {buttonProperties.map(button => {
        return (
          <button
            key={button.id}
            onClick={() => {
              setActiveProject(button.id)
            }}
            className={button.id === activeProject ? 'active' : ''}
          >
            {button.name}
          </button>
        )
      })}
    </FilterContainer>
  )
}

export { FilterButton }
