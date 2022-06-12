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
    background-color: #000;
    border-radius: 50%;
    left: -0.55rem;
    box-shadow: 0px 0px 20px 6px red;
  }
  &::after{
    content: '2022';
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
`

export const ResumeItemContent = styledComponents.div`
border-left: 2px solid red;
padding: 0px 0px 10px 20px;
  `
