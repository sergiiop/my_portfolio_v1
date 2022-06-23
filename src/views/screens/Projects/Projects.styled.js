import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ProjectSectionContainer = styled.div`
  width: 100%;
`

export const ProjectsContainers = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 3rem;
  margin: 20px 0 105px;
`
