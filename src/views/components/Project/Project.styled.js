import styled from 'styled-components'
import { motion } from 'framer-motion'

export const ProjectContainer = styled(motion.article)`
  display: flex;
  box-shadow: 10px 8px 40px 10px rgb(0 0 0 / 10%);
  padding: 15px 20px;
  border-radius: 10px;
  background: #3d3e42;
  ${props => props.left} {
    flex-direction: row-reverse;
  }
  @media screen and (max-width: 1150px) {
    flex-direction: column;
  }
`

export const ProjectContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 50px 70px 20px 30px;
  gap: 1rem;
  max-width: 450px;
  @media screen and (max-width: 1150px) {
    padding: 20px;
  }
`

export const TechnologysContainer = styled.div`
  display: flex;
  gap: 2rem;
  flex-wrap: wrap;
`

export const TechnologySpan = styled.span`
  padding: 5px 10px;
  color: var(--color-background);
  font-size: 1.2rem;
  ${props =>
    props.backGround === `var(--color-background)` &&
    `
      color: var(--color-prim);
    `}

  background: ${props => props.backGround};
  border-radius: 1rem;
  font-weight: bold;
`

export const ImageContainer = styled.div`
  position: relative;
  & > img {
    height: 30vh;
    border-radius: 1rem;
    width: 100%;
  }

  @media screen and (max-width: 1150px) {
    & > img {
      width: 100%;
      align-self: center;
      object-fit: cover;
    }
  }
`

export const SourceContent = styled.div`
  position: absolute;
  top: 0;
  width: 100%;
  height: 30vh;
  border-radius: 1rem;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  opacity: 0;
  transition: opacity 0.5s;
  &:hover {
    opacity: 1;
  }
`
