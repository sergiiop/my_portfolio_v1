const SkillComponent = ({ skill }) => {
  return (
    <div>
      <h1>{skill.name}</h1>
      <img src={skill.path} alt='Skill Image' />
    </div>
  )
}

export { SkillComponent }
