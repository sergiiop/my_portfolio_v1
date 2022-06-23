import { useEffect } from 'react'
import { FilterContainer } from './FilterButton.styled'

const FilterButton = ({
  items,
  setFiltered,
  activeItem,
  setActiveItem,
  buttonProperties
}) => {
  useEffect(() => {
    if (activeItem === 'all') {
      setFiltered(items)
      return
    }
    const filtered = items.filter(item => {
      return item.genre === activeItem
    })
    setFiltered(filtered)
  }, [activeItem])

  return (
    <FilterContainer>
      {buttonProperties.map(button => {
        return (
          <button
            key={button.name}
            onClick={() => {
              setActiveItem(button.genre)
            }}
            className={button.genre === activeItem ? 'active' : ''}
          >
            {button.name}
          </button>
        )
      })}
    </FilterContainer>
  )
}

export { FilterButton }
