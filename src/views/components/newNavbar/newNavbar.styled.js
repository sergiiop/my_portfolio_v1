import styled, { keyframes } from 'styled-components'

const fade_nav = keyframes`
  to {
    transform: translateY(-50%) translateX(0);
    opacity: 1;
  }
`

const fade_nav_bottom = keyframes`
  to {
      transform: translateX(-50%) translateY(0);
      opacity: 1;
    }
`

export const NavMenuContainer = styled.ul`
  position: fixed;
  left: 40px;
  top: 50%;
  transform: translateY(-50%) translateX(-100px);
  background-color: rgba(0, 0, 0, 0.075);
  padding: 15px 10px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 23px;
  border-radius: 50px;
  opacity: 0;
  animation: ${fade_nav} 1s ease-in forwards;
  & .icon {
    font-size: 50px;
    border-radius: 50%;
    padding: 10px;
    transition: fill 0.1s ease;
    fill: rgb(209, 217, 252);
  }

  @media screen and (max-width: 820px) {
    z-index: 1000;
    top: 88%;
    left: 50%;
    padding: 15px 30px;
    transform: translateX(-50%) translateY(100px);
    flex-direction: row;
    animation: ${fade_nav_bottom} 1s ease forwards;
    & .icon {
      font-size: 35px;
      padding: 5px;
    }
  }

  @media screen and (max-width: 500px) {
    padding: 12px 20px;
    max-width: 99%;
  }
`
