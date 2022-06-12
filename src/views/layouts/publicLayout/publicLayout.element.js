import styled from 'styled-components'

export const MainContainer = styled.main`
  @media screen and (min-width: 790px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  max-width: 1200px;
  padding: 0 7rem;
  @media screen and (max-width: 820px) {
    padding: 0 3rem;
  }
`
