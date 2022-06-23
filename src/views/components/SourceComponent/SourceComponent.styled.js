import styled from 'styled-components'

export const SourceLink = styled.a`
  color: var(--color-pri);
  text-decoration: none;
  font-size: 2rem;
  font-weight: bold;
  cursor: pointer;
  width: 50px;
  height: 33px;
  background: black;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.6rem;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`
