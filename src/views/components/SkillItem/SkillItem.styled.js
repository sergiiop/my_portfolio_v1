import styled from 'styled-components'
import { motion } from 'framer-motion'

export const SkillIcon = styled.img`
  height: 50px;
  margin: 0 10px;
`

export const SkillItemContainer = styled(motion.article)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 80%;
  padding: 15px 10px;
  background-color: #3d3e42;
  border-radius: 10px;
  box-shadow: 0px 10px 15px -3px rgba(0, 0, 0, 0.2);
  gap: 10px;
  &:hover {
    background: rgba(245, 71, 104, 0.7);
    color: var(--color-background);
  }
`

export const SkillName = styled.h1`
  font-size: 1.5rem;
  font-weight: bold;
`
