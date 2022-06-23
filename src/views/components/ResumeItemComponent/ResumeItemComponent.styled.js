import styledComponents from 'styled-components'

export const ResumeItemContainer = styledComponents.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`

export const ResumeTitlesContainer = styledComponents.div`
  padding-left: 22px;
  position: relative;
  display: flex;
  align-items: center;
  &::before{
    content: '';
    position: absolute;
    width: 1.4rem;
    height: 1.4rem;
    border-radius: 50%;
    left: -0.55rem;
    box-shadow: 0px 0px 20px 6px var(--color-sec);
  }
  &::after{
    content: '${props => props.year}';
    position: absolute;
    background-color: #000;
    color: #fff;
    width: 40px;
    left: calc(-0.9rem - 5rem);
    height: 20px;
    clip-path: polygon(0% 0%, 75% 0%, 100% 50%, 75% 100%, 0% 100%);
    display: flex;
    align-items: center;
    padding-left: 5px;
  }
  @media screen and (max-width: 430px) {
    &::after{
      left: calc(-0.9rem - 4rem);
      width: 36px;
      height: 18px;
      font-size: 0.85rem;
  }
`

export const ResumeItemContent = styledComponents.div`
border-left: 2px solid var(--color-sec);
padding: 0px 0px 10px 20px;
  `
