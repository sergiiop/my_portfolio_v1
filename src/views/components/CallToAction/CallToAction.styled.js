import styled from 'styled-components'

export const Button = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px;
  height: 50px;
  background-color: var(--color-background);
  border: 1px solid var(--color-sec);
  border-radius: 10px;
  text-decoration: none;
  color: var(--color-pri);
  font-size: 1.5rem;
  font-weight: bold;
  transition: all 0.2s ease-in;
  cursor: pointer;
  &:hover {
    background-color: var(--color-sec);
    color: var(--color-background);
  }
`
