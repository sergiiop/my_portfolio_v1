import styled from 'styled-components'

export const SocialIconContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 6rem;
  bottom: 3rem;
  &::after {
    content: '';
    width: 2px;
    height: 4rem;
    background-color: #000;
  }
`

export const SocialLink = styled.a`
  transition: fill 0.1s ease;
  fill: rgb(209, 217, 252);
  position: relative;
  cursor: pointer;
  height: 30px;
    width: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1.5rem;
  &::before {
    content: '${props => props.newLabel}';
    position: absolute;
    right: 3.5rem;
    color: white;
    background-color: black;
    padding: 0.5rem 0.8rem;
    border-radius: 1.2rem;
    transition: all 200ms ease-in;
    opacity: 0;
    pointer-events: none;
    font-size: 1.2rem;
  }
  &:hover::before {
    opacity: 1;
    right: 4rem;
  }
`
