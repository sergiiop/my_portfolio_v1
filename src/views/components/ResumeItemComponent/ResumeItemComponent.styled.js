import styledComponents from 'styled-components'

export const ResumeItemContainer = styledComponents.article`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 20px 30px;
  border: 1px solid black;
  border-radius: 10px;
  position: relative;
  &::before{
    content: '';
    left: -22px;
    position: absolute;
    width: 22px;
    border-top: 1px solid #ccc;
  }
`

export const ResumeTitlesContainer = styledComponents.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  & > h4 {
    font-size: 1.4rem;
    font-weight: 400;
  }
`
