import styled from 'styled-components'

export const HomeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (max-width: 820px) {
    justify-content: start;
    margin-top: 5rem;
  }
  @media screen and (min-width: 820px) {
    height: 100vh;
  }
`

export const FirstContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 100px;
  text-align: center;
  & > p {
    margin-top: 10px;
  }
  @media screen and (max-width: 820px) {
    padding: 0;
  }
`

export const Span = styled.span`
  color: var(--color-sec);
`

export const CallToActionContainer = styled.div`
  margin-top: 4rem;
  @media screen and (max-width: 820px) {
    margin-top: 2rem;
  }
  @media screen and (max-height: 885px) {
    margin-top: 1rem;
  }
`
