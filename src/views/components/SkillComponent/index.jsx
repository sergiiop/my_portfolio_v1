import { useEffect, useState } from 'react'
import { SubtitleComponent } from '../SubtitleComponent'
import { AnimatePresence } from 'framer-motion'

import { FilterButton } from '../FilterButton'

import { mySkillsData } from '../../../data/data'
import { SkillHeaderContainer, SkillsContainer } from './Skill.stlyed'
import { SkillItem } from '../SkillItem'

const SkillComponent = () => {
  const [activeSkills, setActiveSkills] = useState('all')
  const [filtered, setFiltered] = useState([])
  const [skills, setSkills] = useState([])

  const saveSkills = () => {
    setSkills(mySkillsData)
    setFiltered(mySkillsData)
  }

  useEffect(() => {
    saveSkills()
  }, [])

  const buttonProperties = [
    { name: 'All', genre: 'all' },
    { name: 'Frontend', genre: 'frontend' },
    { name: 'Backend', genre: 'backend' },
    { name: 'Data Bases', genre: 'db' },
    { name: 'Others', genre: 'others' }
  ]

  return (
    <>
      <SkillHeaderContainer>
        <SubtitleComponent>My Skills</SubtitleComponent>
        <FilterButton
          items={skills}
          setFiltered={setFiltered}
          activeItem={activeSkills}
          setActiveItem={setActiveSkills}
          buttonProperties={buttonProperties}
        />
      </SkillHeaderContainer>
      <SkillsContainer
        layout
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        exit={{ opacity: 0 }}
      >
        <AnimatePresence>
          {filtered.map((skill, id) => {
            return <SkillItem key={id} skill={skill} />
          })}
        </AnimatePresence>
      </SkillsContainer>
    </>
  )
}

export { SkillComponent }
