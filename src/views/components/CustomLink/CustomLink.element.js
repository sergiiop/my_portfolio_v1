import styled from 'styled-components'
import { NavLink } from 'react-router-dom'

export const NavItem = styled.div`
  transition: fill 0.1s ease;
  position: relative;
  &::before {
    content: '${props => props.newLabel}';
    position: absolute;
    left: 7rem;
    top: 0.7rem;
    color: white;
    background-color: black;
    padding: 1rem;
    border-radius: 1.2rem;
    transition: all 200ms ease-in;
    opacity: 0;
    pointer-events: none;
    font-size: 1.5rem;
  }

  &:hover::before {
    opacity: 1;
    left: 7.5rem;
  }
`

export const CustomNavLink = styled(NavLink)`
  display: inline-block;
  border-radius: 50%;
  border: 2px solid transparent;
  &:hover {
    fill: var(--color-sec);
    border: 2px solid var(--color-sec);
  }
  &.active {
    fill: var(--color-sec);
    border: 2px solid var(--color-sec);
    background-color: var(--color-sec);
    color: var(--color-background);
  }
`
