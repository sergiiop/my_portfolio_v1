import styledComponents from 'styled-components'

export const ResumeSectionContainer = styledComponents.div`
display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 0.1fr 0.9fr;
    grid-template-areas:
        'header header'
        'stack degree';
    height: 100vh;
`

export const ResumeContent = styledComponents.div`
  grid-area: ${props => props.area};
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`

export const ItemsContainer = styledComponents.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 80%;
`
