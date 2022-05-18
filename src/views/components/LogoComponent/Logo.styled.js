import styled from 'styled-components'

export const LogoContainer = styled.div`
  height: 300px;
  margin-top: 25px;
  @media screen and (max-height: 790px) {
    margin-top: 15px;
    height: 220px;
  }
`

export const HeroImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  filter: grayscale(70%);
  border-radius: 50%;
`
