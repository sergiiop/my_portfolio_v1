import { SkillItemContainer, SkillIcon, SkillName } from './SkillItem.styled'

const SkillItem = ({ skill }) => {
  return (
    <SkillItemContainer
      layout
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
    >
      <SkillName>{skill.name}</SkillName>
      <SkillIcon src={skill.pathIcon} alt='Skill Image' />
    </SkillItemContainer>
  )
}

export { SkillItem }
