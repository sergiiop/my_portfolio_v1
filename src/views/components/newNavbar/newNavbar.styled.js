import styled from 'styled-components'

export const NavMenuContainer = styled.nav`
  position: fixed;
  left: 2rem;
  top: 50%;
  transform: translateY(-50%);
  padding: 2rem 1.7rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  gap: 23px;
  border-radius: 50px;
  background: rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(25px);
  & .icon {
    font-size: 50px;
    border-radius: 50%;
    padding: 10px;
  }

  @media screen and (max-width: 820px) {
    z-index: 1000;
    top: 90%;
    left: 50%;
    transform: translateX(-50%);
    padding: 15px 30px;
    flex-direction: row;
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
