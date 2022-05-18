import styledComponents from 'styled-components'

export const SecondSubTitle = styledComponents.h3`
  font-size: 2.5rem;
  font-weight: 500;
  @media screen and (max-width: 500px) {
    font-size: 2.3rem;
  }
  @media screen and (max-width: 300px) {
    font-size: 1.8rem;
  }
`
