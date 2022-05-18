import styledComponents from 'styled-components'

export const Title = styledComponents.h2`
grid-area: ${props => props.area || ''};
font-size: 4.5rem;
font-weight: bold;
@media screen and (max-width: 500px) {
  font-size: 4.3rem;
}
@media screen and (max-width: 300px) {
  font-size: 3rem;
}
`
