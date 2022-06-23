import styled from 'styled-components'

export const Title = styled.h4`
  color: ${props => (props.color ? props.color : `var(--color-sec)`)};
  font-size: 2rem;
  font-weight: 500;
`
