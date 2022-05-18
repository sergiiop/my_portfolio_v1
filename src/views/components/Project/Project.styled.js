import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ProjectContainer = styled(motion.article)`
  display: flex;
  gap: 10rem;
  ${props => props.left} {
    flex-direction: row-reverse;
  }
  & > img {
    width: 100%;
    height: 30vh;
    object-fit: cover;
    border-radius: 1rem;
    margin-bottom: 1rem;
  }

  & > h2 {
    font-size: 0.8rem;
  }
`

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 50px 70px 50px 30px;
  gap: 1rem;
`

export const TechnologysContainer = styled.div`
  display: flex;
  gap: 20px;
`

export const TechnologySpan = styled.span`
  padding: 5px 10px;
  background: ${props => props.backGround};
  border-radius: 1rem;
`
