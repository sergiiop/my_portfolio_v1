import styled from 'styled-components'

export const MainContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SectionContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 0 7rem;

  @media screen and (max-width: 820px) {
    padding: 0 3rem;
  }

  @media screen and (min-width: 1300px) {
    max-width: 1200px;
  }

  @media screen and (max-width: 1300px) {
    max-width: 1000px;
    padding: 0 3rem;
  }

  @media screen and (max-width: 1150px) {
    max-width: 680px;
  }
  @media screen and (max-width: 520px) {
    max-width: 400px;
  }
`
