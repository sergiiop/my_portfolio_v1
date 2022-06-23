import styledComponents from 'styled-components'

export const ResumeSectionContainer = styledComponents.div`
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  grid-template-rows: 0.1fr 0.9fr;
  grid-template-areas:
      'header header'
      'stack degree';
  column-gap: 5rem;
  row-gap: 3rem;
  @media screen and (max-width: 1150px) {
    grid-template-areas:
      'header'
      'degree'
      'stack';
    grid-template-columns: 1fr;
    grid-template-rows: 0.1fr auto auto;
    row-gap: 2rem;
  }
  @media screen and (max-width: 520px) {
    grid-template-columns: 1fr;
  }
`

export const ResumeContent = styledComponents.div`
  grid-area: ${props => props.area};
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${props =>
    props.area === 'degree' &&
    `
  align-items: center;
  `}
`

export const ItemsContainer = styledComponents.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
`

export const TitlesContainer = styledComponents.div`
  align-self: start;
`
