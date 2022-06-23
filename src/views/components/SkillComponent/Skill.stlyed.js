import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SkillsContainer = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  place-items: center;
  row-gap: 3rem;
  margin-bottom: 110px;
`

export const SkillHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`
